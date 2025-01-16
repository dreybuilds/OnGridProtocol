import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"


// Load B612 font family
const b612 = localFont({
  src: [
    {
      path: './fonts/B612.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/B612.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-b612'
})

export const metadata: Metadata = {
  title: "OnGridAfrica - Invest in Africa's Renewable Energy Future",
  description: "Join us in transforming the energy sector through community-driven investments.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${b612.variable} font-b612 bg-neutral-950 antialiased`}>
        {children}
      </body>
    </html>
  )
}