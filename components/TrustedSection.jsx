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
    <section className="bg-sky-100 pt-8 shadow-sm shadow-black">
      <div className="container mx-auto px-4">
        <h2 className=" text-2xl md:text-3xl font-bold text-center text-gray-800">Trusted Data Compaines</h2>
        
      </div>
    </section>
  );
};

export default TrustedSection;
