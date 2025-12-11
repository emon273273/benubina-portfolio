import './globals.css'
import { Inter } from 'next/font/google'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Benubina | Software Development Agency',
  description: 'We build innovative software solutions that drive business growth. From web applications to mobile apps, we turn your ideas into powerful digital experiences.',
  keywords: ['software development', 'web development', 'mobile apps', 'UI/UX design', 'cloud solutions'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
