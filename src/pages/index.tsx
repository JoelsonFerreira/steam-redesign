import { Inter } from 'next/font/google'

import AsideMenu from '@/components/AsideMenu';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel/';
import Card from '@/components/Card';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} flex gap-10 min-h-screen max-w-screen-2xl mx-auto`}>
      <AsideMenu />
      <main className='flex-1 w-full max-w-6xl py-10'>
        <Header />
        <Carousel />

        <section className='grid grid-cols-2 gap-5'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </div>
  )
}
