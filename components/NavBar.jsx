"use client";

import { useState } from "react";
import { AlignJustify, ChevronDown, X } from "lucide-react";
import Image from "next/image";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-sky-950 px-36 py-4 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="logo" width={70} height={70} />
            <p className="pb-2 -ml-2 font-bold text-sky-500 text-2xl">
              Remote<span className="text-orange-500">Raters</span>
            </p>
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <p
              className={`hover:text-orange-500 text-white font-[600] cursor-pointer flex items-center gap-2`}
            >
              Home
            </p>
            <p
              className={`hover:text-orange-500 text-white font-[600] cursor-pointer flex items-center gap-2`}
            >
              Who we are
            </p>
            <p
              className={`hover:text-orange-500 text-white font-[600] cursor-pointer flex items-center gap-2`}
            >
              How we proceed
            </p>
            <p
              className={`hover:text-orange-500 text-white font-[600] cursor-pointer flex items-center gap-2`}
            >
              How you benefit
            </p>

            <p
              className={`hover:text-orange-500 text-white font-[600] cursor-pointer flex items-center gap-2`}
            >
              Contact Us
            </p>

            {/* <MainButton
              text="Sign up"
              classes="bg-transparent text-slate-900 font-[600] shadow-none rounded-normal border border-navText hover:bordeorangeone hover:text-orangete"
            /> */}

            <div className="flex gap-1 items-center text-slate-900 cursor-pointer">
              <p className="font-[700]">EN</p>
              <div>
                <ChevronDown size={15}></ChevronDown>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden  shadow-sm w-full  fixed top-0  z-[999]   py-4 animate-in fade-in zoom-in  ${
          menu ? "  bg-sky-200 py-2 h-screen bg-opacity-[95%]" : "bg-sky-950"
        } `}
      >
        <div className="flex items-center  justify-between px-2 py-2 ">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <div className="flex items-center">
              <Image src="/images/logo.png" alt="logo" width={60} height={60} />

             {menu ?"":<p className="pb-1  font-bold text-sky-500 text-2l">
              Remote<span className="text-orange-500">Raters</span>
            </p>}
            </div>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-white"
                onClick={toggleMenu}
                size={30}

              />
            ) : (
              <AlignJustify
                className="cursor-pointer font-semibold animate-in fade-in zoom-in text-white"
                onClick={toggleMenu}
                size={30}
              />
              // <img
              //   src="/images/hamburger.svg"
              //   alt="logo"
              //   className="cursor-pointer animate-in fade-in zoom-in"
              //   onClick={toggleMenu}
              // />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right ">
            <div className="flex flex-col gap-8 mt-8 mx-4 ">
              <div className="flex gap-[20px] xl:gap-[50px] text-[16px] flex-col select-none ">
              <p
              className={`hover:text-orange-500 text-slate-900 font-[600] cursor-pointer flex items-center gap-2`}
            >
              Home
            </p>
            <p
              className={`hover:text-orange-500 text-slate-900 font-[600] cursor-pointer flex items-center gap-2`}
            >
              Who we are
            </p>
            <p
              className={`hover:text-orange-500 text-slate-900 font-[600] cursor-pointer flex items-center gap-2`}
            >
              How we proceed
            </p>
            <p
              className={`hover:text-orange-500 text-slate-900 font-[600] cursor-pointer flex items-center gap-2`}
            >
              How you benefit
            </p>

            <p
              className={`hover:text-orange-500 text-slate-900 font-[600] cursor-pointer flex items-center gap-2`}
            >
              Contact Us
            </p>

                <div className="flex gap-1 items-center text-slate-900 cursor-pointer">
                  <p className="font-[700]">EN</p>
                  <div>
                    <ChevronDown size={15}></ChevronDown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
