'use client'
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow() {
  return (
    <div
    />
  );
}

function SamplePrevArrow() {
  return (
    <div
    />
  );
}

function AutoPlay() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>


    <div className="hidden md:inline slider-container  bg-sky-100 -mb-6 -mt-6">
      
      <Slider {...settings}>
        <div className="-2 mt-1 md:mt-0">
        <Image src="/4.png" width={140} height={140}  alt="logo group" />


        </div>
        <div  className="-2 md:mt-6">
        <Image src="/1.jpeg" width={160} height={160}  alt="logo group" />

        </div>
        
        <div  className="-2 mt-2 md:-mt-3">
        <Image src="/2.png"  width={160} height={160} alt="logo group" />

        </div>
        <div  className="-2 md:mt-8 mt-2">
        <Image src="/5.png"  width={200} height={200} alt="logo group" />

        </div>
        <div className="-2 mt-2 md:mt-0">
      <Image src="/3.png"  width={160} height={160} alt="logo group" />
          
        </div>
      
      </Slider>
    </div>

    <div className="md:hidden slider-container  bg-sky-100 -mb- -mt-2">
      
      <Slider {...settings}>
        <div className="-2 mt-1 md:mt-0">
        <Image src="/4.png" width={60} height={60}  alt="logo group" />


        </div>
        <div  className="-2 mt-5">
        <Image src="/1.jpeg" width={60} height={60}  alt="logo group" />

        </div>
        
        <div  className="-2 mt-2 md:-mt-2">
        <Image src="/2.png"  width={60} height={60} alt="logo group" />

        </div>
        <div  className="-2 md:mt-8 mt-4">
        <Image src="/5.png"  width={80} height={80} alt="logo group" />

        </div>
        <div className="-2 mt-2 md:mt-0">
      <Image src="/3.png"  width={60} height={60} alt="logo group" />
          
        </div>
      
      </Slider>
    </div>
    </div>
  );
}

export default AutoPlay;