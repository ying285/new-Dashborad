import Topbar from '@/components/Topbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideBar from '@/components/sideBar/SideBar'
import { Providers } from './globaRedux/Provider'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashborad',
  description: 'Business Dashborad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `} >
        <Providers >
        <Topbar/>
        <div className="flex">
        <SideBar/>
        
        {children}
        
        </div>
        </Providers>
        
        </body>
    </html>
  )
}
