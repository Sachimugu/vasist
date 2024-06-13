import Image from "next/image";
import React from "react";
import LogoGroupSection from "./LogoGroupSection";
const brands = [
  {
    brand_name: "Parfoils",
    brand_icon: "/images/parfoils.png"
  },
  {
    brand_name: "Yandex",
    brand_icon: "/images/yandex.png"
  },
  {
    brand_name: "Bosch",
    brand_icon: "/images/bosch.png"
  },
  {
    brand_name: "Lukoil",
    brand_icon: "/images/lukoil.png"
  }
];
const TrustedSection = () => {
  return (
    <section className="bg-sky-100 ">
      <div className="container mx-auto px-4">
        <h2 className=" md:text-[2.725rem] text-[1.525rem] leading-9 md:leading-normal px-2 py-3  text-slate-900 font-[700] text-center md:py-8 md:px-16">Trusted Data Compaines</h2>
        
      </div>
    </section>
  );
};

export default TrustedSection;
