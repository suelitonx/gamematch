import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { AuthProvider } from '@/providers/auth-provider'
import NavBar from '@/components/navbarone'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GameMatch',
  description: 'Sua lista de jogos focada somente em você e no que você gosta!',
}
//<Header />
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>

        <html lang="en">
          <body className={inter.className}>
            <Header></Header>
            {children}
          </body>
        </html>

    </AuthProvider>

  )
}
