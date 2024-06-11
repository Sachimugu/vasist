import Image from "next/image";
import React from "react";

const ContactLogos = () => {
  return (
    <div className="bg-sky-200 text-center pt-4">
      {/* <div className="bg-orange-500 p-4  mx-auto"> */}
        <button className="md:text-[3.125rem] rounded-full bg-orange-500 p-4 text-[1.525rem] leading-9 md:leading-0 px-4 py-3  text-sky-950 font-[700] text-center md:py-8 md:px-16">
          Contact Us
          <br className="hidden md:block" />
        </button>
      {/* </div> */}
      <div className="flex gap-8 md:gap-16 justify-center item-center px-4 py-2 md:p-8 bg-sky-200 shadow-md ">
        <Image
          src="/images/gm.svg"
          width={90}
          height={90}
          alt="icons"
          className="cursor-pointer"
        />
        <Image
          src="/images/wh.svg"
          width={100}
          height={100}
          alt="icons"
          className="cursor-pointer"
        />
        <Image
          src="/images/te.svg"
          width={100}
          height={100}
          alt="icons"
          className="cursor-pointer"
        />
        <Image
          src="/images/li.svg"
          width={100}
          height={100}
          alt="icons"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ContactLogos;
