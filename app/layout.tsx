import { montserrat, poppins } from '@/constant/font'
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: "Home - Portfolio",
  description: 'Deri Kurniawan Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} lg:overflow-x-hidden`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
