import '@/style/reset.scss'
import '@/style/global.scss'
import type { Metadata } from 'next'
import { poppins } from '@/libs/font'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Round Rock',
  description: 'Yard Maintanence Company Landing Page | Mert Enercan',
  openGraph:{images:['https://s3-media0.fl.yelpcdn.com/bphoto/g1kB_Aw_TptD90PLzioPFA/1000s.jpg']}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
