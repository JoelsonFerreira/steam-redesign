import Image from 'next/image'
import React from 'react'

import { VscLiveShare } from 'react-icons/vsc'
import { IoPlayOutline } from 'react-icons/io5'

function Card() {
  return (
    <article className='flex relative bg-slate-900 rounded-3xl overflow-hidden p-5 gap-3'>
      <Image src='/capas/civilization.jpg' height={40} width={100} className='rounded-xl' alt='Capa do jogo' />

      <div className='flex flex-col justify-between py-3 w-full'>
        <div className='flex justify-between w-full items-center'>
          <h3 className='font-bold text-2xl text-zinc-200'>The Witcher III</h3>
          <VscLiveShare size={24} className='text-slate-700 cursor-pointer hover:text-slate-400 transition-colors' />
        </div>
        <div className='flex justify-between w-full items-center'>
          <div className='flex items-center ml-4'>
              <Image
                  src='/icons/default-profile.webp'
                  width={32}
                  height={32}
                  alt='Imagem de perfil'
                  className='rounded-full -ml-3 border border-slate-950'
              />
              <Image
                  src='/icons/default-profile.webp'
                  width={32}
                  height={32}
                  alt='Imagem de perfil'
                  className='rounded-full -ml-3 border border-slate-950'
              />
              <Image
                  src='/icons/default-profile.webp'
                  width={32}
                  height={32}
                  alt='Imagem de perfil'
                  className='rounded-full -ml-3 border border-slate-950'
              />
              <Image
                  src='/icons/default-profile.webp'
                  width={32}
                  height={32}
                  alt='Imagem de perfil'
                  className='rounded-full -ml-3 border border-slate-950'
              />
              <Image
                  src='/icons/default-profile.webp'
                  width={32}
                  height={32}
                  alt='Imagem de perfil'
                  className='rounded-full -ml-3 border border-slate-950'
              />
              <span className='w-7 h-7 rounded-full -ml-3 flex items-center justify-center bg-slate-950 text-xs font-bold cursor-pointer'>+3</span>
          </div>

          <button className='flex items-center bg-gradient-to-tr from-blue-600 to-blue-400 hover:from-blue-400 hover:to-blue-600 p-3 rounded-2xl gap-2'>
            <IoPlayOutline size={24} />
            <span className='text-sm font-semibold'>Play now</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card