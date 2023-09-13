'use client'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins =  Poppins({ subsets: ['latin'], weight:['200','400','600']})

export const metadata: Metadata = {
  title: 'Soares Shopping',
  description: 'The Better Shopping For Your Style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="utf-8">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
