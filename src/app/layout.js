import './globals.css'
import '@fortawesome/fontawesome-free/css/all.css'

export const metadata = {
  title: 'NETI - Eesti Interneti Kataloog ja Otsingusüsteem',
  description: 'Avasta parimad Eesti veebilehed ühes kohas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="et">
      <body>{children}</body>
    </html>
  )
}
