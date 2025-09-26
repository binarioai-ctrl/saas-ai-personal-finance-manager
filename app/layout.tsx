import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ai-personal-finance-manager',
  description: 'Plataforma de gestión financiera personal con IA que analiza gastos, predice ahorros y optimiza inversiones automáticamente.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  )
}