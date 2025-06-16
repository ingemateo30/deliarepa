import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deliarepas',
  description: 'Las mejores arepas santandereanas en cada mordisco. Especialidades únicas con ingredientes naturales y sin conservantes.',
  keywords: 'arepas, santander, colombia, comida, tradición, arepa de plátano, arepa de yuca, domicilios',
  authors: [{ name: 'ArepasMax' }],
  openGraph: {
    title: 'ArepasMax - Autenticidad, sabor y tradición santandereana',
    description: 'Las mejores arepas santandereanas en cada mordisco. Especialidades únicas con ingredientes naturales.',
    type: 'website',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArepasMax - Autenticidad, sabor y tradición santandereana',
    description: 'Las mejores arepas santandereanas en cada mordisco.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#c62828" />
      </head>
      <body>{children}</body>
    </html>
  )
}