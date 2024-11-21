import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from './provider';

import { Inter } from 'next/font/google'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Story Time App',
  description: 'An interactive story time app for kids and adults',
}


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
          {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
