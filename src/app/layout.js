import './globals.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { Barlow } from 'next/font/google'

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  title: 'NETI - Eesti Interneti Kataloog ja Otsingusüsteem',
  description: 'Avasta parimad Eesti veebilehed ühes kohas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="et">
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
