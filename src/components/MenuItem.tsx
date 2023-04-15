import React from 'react'

import { IconType } from 'react-icons'

type MenuItemProps = {
    title: string,
    href: string,
    Icon: IconType
}

function MenuItem({
    title,
    href,
    Icon
}: MenuItemProps) {
  return (
    <a href={href} className='flex items-center gap-4 text-white/60 hover:text-white cursor-pointer transition-colors'>
        <Icon size={24} />
        <span>{title}</span>
    </a>
  )
}

export default MenuItem