

import { RiHomeLine } from "react-icons/ri";
import { BsUiChecksGrid } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiCoin, BiNote } from "react-icons/bi";
import { MdOutlineScience } from "react-icons/md";

export const content = {
  menu: [
    {
      id: "home",
      title: "Home",
      href: "/",
      Icon: RiHomeLine,
    }, {
      id: "categories",
      title: "Categories",
      href: "/",
      Icon: BsUiChecksGrid,
    }, {
      id: "new",
      title: "New",
      href: "/",
      Icon: AiOutlineThunderbolt,
    }, {
      id: "points-shop",
      title: "Points shop",
      href: "/",
      Icon: BiCoin,
    }, {
      id: "news",
      title: "News",
      href: "/",
      Icon: BiNote,
    }, {
      id: "laboratory",
      title: "Laboratory",
      href: "/",
      Icon: MdOutlineScience,
    }
  ]
}
