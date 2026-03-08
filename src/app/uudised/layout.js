export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata = {
  title: 'Uudised - NETI',
  description: 'Loe uusimaid uudiseid NETI-st',
}

export default function UudisedLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}
