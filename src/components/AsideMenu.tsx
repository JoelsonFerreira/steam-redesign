import Image from "next/image";
import React from "react";

import { AiOutlineSetting } from "react-icons/ai";
import { TbArrowUpRight } from "react-icons/tb";

import MenuItem from "@/components/MenuItem";
import { content } from "@/data/content";

function AsideMenu() {
  return (
    <aside className="flex-col justify-between w-72 md:h-screen md:sticky top-0 pt-3 md:py-10 flex">
      <div className="flex justify-between md:block">
        <button className="rotate-90 md:hidden">|||</button>

        <Image
          src="/icons/steam.svg"
          width={150}
          height={50}
          alt="logo steam"
          className="mb-0 md:mb-10"
        />
        
        <nav className="flex-col gap-7 hidden md:flex">
          {content.menu.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </nav>
      </div>

      <div className="hidden md:block">
        <div
          className="h-64 w-full
            bg-gradient-to-tr from-blue-950 to-blue-400 hover:from-blue-400 hover:to-blue-950 
            cursor-pointer rounded-3xl flex flex-col justify-between items-end p-5
          "
        >
          <TbArrowUpRight size={24} />
          <h3 className="font-bold text-xl text-zinc-200">Do you need help?</h3>
        </div>

        <div className="border-t border-t-white/10 py-3 mt-10 flex items-center gap-4">
          <Image
            src="/icons/default-profile.webp"
            width={44}
            height={44}
            alt="Imagem de perfil"
            className="rounded-2xl"
          />
          <strong>Joelson</strong>
          <AiOutlineSetting
            size={24}
            className="text-white/30 hover:text-white cursor-pointer ml-auto"
          />
        </div>
      </div>
    </aside>
  );
}

export default AsideMenu;
