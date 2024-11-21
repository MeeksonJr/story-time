'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function StoryPage() {
  const [text, setText] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (file) {
      const text = await file.text()
      setText(text)
    }
    setIsPlaying(true)
    speak(text)
  }

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.onend = () => setIsPlaying(false)
    speechSynthesis.speak(utterance)
  }

  const stopSpeaking = () => {
    speechSynthesis.cancel()
    setIsPlaying(false)
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Story Time</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="story-text">Enter your story:</Label>
          <Textarea
            id="story-text"
            value={text}
            onChange={handleTextChange}
            className="mt-1"
            rows={10}
            placeholder="Once upon a time..."
          />
        </div>
        <div>
          <Label htmlFor="file-upload">Or upload a text file:</Label>
          <Input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            accept=".txt"
            className="mt-1"
          />
        </div>
        <div className="flex space-x-2">
          <Button type="submit" disabled={isPlaying}>
            {isPlaying ? 'Reading...' : 'Read Story'}
          </Button>
          {isPlaying && (
            <Button type="button" onClick={stopSpeaking} variant="secondary">
              Stop Reading
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

