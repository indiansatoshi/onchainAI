import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'onchainAI',
  description: 'web3 rails for GenAI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
