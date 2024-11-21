import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div>
      <div className="flex justify-between p-2 bg-slate-100">
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Story Time</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Immerse yourself in captivating stories for both kids and adults. 
        Let our app read to you or upload your own tales!
      </p>
      <Link href="/story">
        <Button size="lg">
          Start Your Story Adventure
        </Button>
      </Link>
    </div>
    </div>
  );
}
