"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// logos.js
const logos = [
  { id: 1, src: '/images/1.png' },
  { id: 2, src: '/images/2.png' },
  { id: 3, src: '/images/3.png' },
  { id: 4, src: '/images/4.png' },
  { id: 5, src: '/images/5.png' },
];



const LogoSlider = () => {
  const settings = {
    dots: false, // Hide navigation dots
    infinite: true, // Enable continuous loop
    slidesToShow: 4, // Display 4 logos per slide
    slidesToScroll: 1, // Scroll by 1 logo
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval (3 seconds)
    speed: 500, // Set animation duration (0.5 seconds)
    arrows: false, // Hide navigation arrows (optional)
  };

  return (
    <div className="flex justify-center items-center">
      <Slider {...settings}>
        {logos.map((logo) => (
          <div key={logo.id} className="flex justify-center items-center">
            <img src={logo.src} alt={`Logo ${logo.id}`} className="h-20" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default LogoSlider;