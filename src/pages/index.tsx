import { Inter } from 'next/font/google'

import Image from 'next/image';

import AsideMenu from '@/components/AsideMenu';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel/';
import { VscLiveShare } from 'react-icons/vsc';
import Card from '@/components/Card';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className} flex gap-20 min-h-screen max-w-screen-2xl mx-auto`}>
      <AsideMenu />
      <main className='flex-1 w-full max-w-6xl p-10'>
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
