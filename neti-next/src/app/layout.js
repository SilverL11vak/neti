import './globals.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { Barlow, Playfair_Display } from 'next/font/google'

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'NETI - Eesti Interneti Kataloog ja Otsingusüsteem',
  description: 'Avasta parimad Eesti veebilehed ühes kohas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="et">
      <body className={`${barlow.className}`} style={{ '--font-playfair': playfair.style.fontFamily }}>{children}</body>
    </html>
  )
}
