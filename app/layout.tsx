import { poppins } from '@/theme-config/poppins'
import './globals.css'

export const metadata = {
  title: 'Cristina Verdi\'s Blog',
  description: 'A personal blog built with love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  )
}
