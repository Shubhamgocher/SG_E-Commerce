"use client";
import React, { useCallback, useState } from "react";
import { Avatar } from "..";
import { BiSolidDownArrow } from "react-icons/bi";
import Link from "next/link";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handelClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div>
      <div
        onClick={handelClick}
        className="relative flex items-center justify-center gap-2 border border-slate-400 px-3 py-2 rounded-full cursor-pointer hover:bg-slate-500 focus:ring-1 focus:border focus:border-blue-500"
      >
        <Avatar />
        <BiSolidDownArrow />
      </div>
      {isOpen && (
        <div className="absolute right-8 top-[58px] flex flex-col justifu-center p-2 w-[170px] rounded-md bg-white shadow-md text-sm">
          <div className="flex flex-col">
            <Link href={'/login'}>Login</Link>
            <Link href={'/login'}>Login</Link>
            <Link href={'/login'}>Login</Link>
            <Link href={'/login'}>Login</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
