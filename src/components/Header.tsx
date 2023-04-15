import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai'

function Header() {
  return (
    <header className='flex items-center justify-between h-11 w-full'>
      <h4 className='font-bold text-xl text-zinc-200'>Good evening, Joelson!</h4>
      <div className='flex items-center'>
        <strong className='text-sm font-medium'>Online</strong>
        <div className='flex items-center ml-4'>
            <Image
                src="/icons/default-profile.webp"
                width={28}
                height={28}
                alt="Imagem de perfil"
                className="rounded-full -ml-3 border border-slate-950"
            />
            <Image
                src="/icons/default-profile.webp"
                width={28}
                height={28}
                alt="Imagem de perfil"
                className="rounded-full -ml-3 border border-slate-950"
            />
            <span className="w-7 h-7 rounded-full -ml-3 flex items-center justify-center bg-slate-800 text-xs font-bold cursor-pointer">+3</span>
        </div>
        <nav className='flex gap-6 ml-20'>
            <button className="relative">
                <AiOutlineSearch size={24} />
            </button>
            <button className="relative">
                <AiOutlineHeart size={24} />
                <span className='w-2 h-2 rounded-full bg-pink-500 absolute -top-3 -right-3'></span>
            </button>
            <button className="relative">
                <AiOutlineShopping size={24} />
                <span className='w-2 h-2 rounded-full bg-blue-400 absolute -top-3 -right-3'></span>
            </button>
        </nav>
      </div>
    </header>
  )
}

export default Header