import Image from "next/image";
import React from "react";

import {
  AiFillApple,
  AiFillWindows,
  AiOutlineLike,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { FaSteamSymbol } from "react-icons/fa";
import { RiFireLine } from "react-icons/ri";
import { TbTag } from "react-icons/tb";
import { VscLiveShare } from "react-icons/vsc";

function Game() {
  return (
    <section className="mt-4 md:mt-10 gap-2 flex flex-col md:flex-row">
      <article className="relative">
        <Image
          src={"/banners/witcher3.jpg?v=123"}
          width={720}
          height={720}
          alt="Banner do jogo The Witcher 3"
          className="rounded-3xl"
        />
        <div className="absolute left-0 top-0 p-5 flex gap-1">
          <button className="bg-pink-500 rounded-full pd-6 h-6 flex items-center justify-center px-3 gap-1">
            <RiFireLine size={14} />
            <span className="font-medium">Popular</span>
          </button>
          <button className="bg-slate-950 rounded-full pd-6 w-6 h-6 flex items-center justify-center">
            <AiFillWindows size={14} />
          </button>
          <button className="bg-slate-950 rounded-full pd-6 w-6 h-6 flex items-center justify-center">
            <AiFillApple size={14} />
          </button>
          <button className="bg-slate-950 rounded-full pd-6 w-6 h-6 flex items-center justify-center">
            <FaSteamSymbol size={14} />
          </button>
        </div>
        <div className="absolute left-0 bottom-0 p-5 flex gap-1 items-center">
          <Image
            src="/icons/default-profile.webp"
            width={28}
            height={28}
            alt="Imagem de perfil"
            className="rounded-xl"
          />
          <Image
            src="/icons/default-profile.webp"
            width={28}
            height={28}
            alt="Imagem de perfil"
            className="rounded-xl"
          />
          <Image
            src="/icons/default-profile.webp"
            width={28}
            height={28}
            alt="Imagem de perfil"
            className="rounded-xl"
          />
          <button className="bg-slate-950 rounded-xl pd-6 h-8 flex items-center justify-center px-3 gap-1">
            <AiOutlineLike size={14} />
            <span className="font-medium">+ 53 friends</span>
          </button>
        </div>
      </article>

      <div className="flex flex-col flex-1 gap-2">
        <article className="bg-slate-900 rounded-3xl p-7 space-y-11">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl text-zinc-200">
              The Witcher III
            </h3>
            <VscLiveShare
              size={24}
              className="text-slate-700 cursor-pointer hover:text-slate-400 transition-colors"
            />
          </div>

          <div className="flex gap-2">
            <button className="bg-slate-700 px-3 py-1 rounded-full flex items-center gap-2 text-sm">
              <TbTag />
              <span>Survive</span>
            </button>

            <button className="bg-slate-700 px-3 py-1 rounded-full flex items-center gap-2 text-sm">
              <TbTag />
              <span>Adventure</span>
            </button>

            <button className="bg-slate-700 px-2 py-1 rounded-full flex items-center gap-2 text-sm">
              <AiOutlinePlus />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex gap-2 w-full">
              <button className="bg-slate-700 p-2 rounded-2xl flex items-center gap-2 text-sm w-full text-left">
                <div className="bg-green-400 p-2 rounded-xl">
                  <BsEmojiSmile size={24} className="text-green-950" />
                </div>
                <div>
                  <div className="font-medium">Perfect</div>
                  <div className="text-white/50">6385</div>
                </div>
              </button>
            </div>
            <div className="flex gap-2 w-full">
              <button className="bg-blue-500 p-2 rounded-2xl flex items-center gap-2 text-sm w-full text-left">
                <div className="p-2">
                  <AiOutlineShopping size={24} className="text-white" />
                </div>
                <div>
                  <span className="font-medium text-xl">$ 29</span>
                  <span className="font-medium text-xs">,99</span>
                </div>
              </button>
            </div>
          </div>
        </article>

        <article className="grid grid-cols-2 w-full flex-1 gap-2">
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/banners/god-of-war.jpg"
              fill
              alt="Banner do jogo God of War"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/banners/god-of-war.jpg"
              fill
              alt="Banner do jogo God of War"
            />
            <div className="absolute w-full h-full bg-black/75 flex flex-col items-center justify-center">
              <span className="font-bold">135</span>
              <span className="text-sm font-light text-white/60">
                more photos
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Game;
