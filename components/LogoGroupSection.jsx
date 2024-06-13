import Image from "next/image";
import React from "react";

function LogoGroupSection() {
  return (
    <div className="w-full flex justify-center items-center ">
      <img src="/images/2.png"  alt="logo group" />
      <img src="/images/3.png"  alt="logo group" />
      <img src="/images/5.png"  alt="logo group" />
      <img src="/images/4.png"  alt="logo group" />
      {/* <Image src="/images/1.jpeg" width={30} height={30} alt="logo group" />
      <Image src="/images/2.png" width={30} height={30} alt="logo group" />
      <Image src="/images/3.png" width={30} height={30} alt="logo group" />
      <Image src="/images/4.png" width={30} height={30} alt="logo group" /> */}
    </div>
  );
}

export default LogoGroupSection;
