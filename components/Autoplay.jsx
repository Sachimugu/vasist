'use client'
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
    <div className="slider-container  bg-sky-100 pb-2">
      
      <Slider {...settings}>
        <div className="px-2 mt-1 md:mt-0">
        <img src="/images/4.png"  alt="logo group" />

        </div>
        <div  className="px-2 mt-4">
        <img src="/images/1.jpeg"  alt="logo group" />

        </div>
        
        <div  className="px-2 mt-2 md:mt-0">
        <img src="/images/2.png"  alt="logo group" />

        </div>
        <div  className="px-2 md:mt-8 mt-2">
        <img src="/images/5.png"  alt="logo group" />

        </div>
        <div className="px-2 mt-2 md:mt-0">
      <img src="/images/3.png"  alt="logo group" />
          
        </div>
      
      </Slider>
    </div>
  );
}

export default AutoPlay;