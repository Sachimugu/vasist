import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    // <div className="bg-sky-200 bg-bg-image  ">
    <div class="bg-sky-200 bg-opacity-30 pb-8">
      <div className="flex flex-col lg:pr-48 md:flex-row md:justify-between">
        <div className="w-full shadow-lg my-[5rem] p-8 md:my-0 md:w-[60%] bg-slate-900 rounded-r-full md:pl-44 md:pr-8 md:py-24 lg:py-48 flex flex-col  md:gap-8  justify-center border-r-[10px]  border-red-300 ">
          <p className="font-medium text-sm md:text-lg pb-2 md:pb-0 text-slate-200 ">BUSSINESS VIRTUAL ASSISTANT </p>
          <p className="text-2xl md:text-4xl volkhov font-[700] md:leading-[3rem] text-slate-200">
            Efficient <span className="hidden md:inline">,</span> <span className="md:hidden">and</span> Reliable <span className="hidden md:inline"> and Professional</span> {" "}
            <span className="block z-10 md:text-5xl text-orange-500">
              {" "}
              <span className=""> Support</span> at Your Fingertips
            </span>
           
          </p>
          <p className="text-md md:text-xl font-medium pb-4 pt-2 md:py-0 text-slate-200">
            {" "}
            Ensure your customers receive top-notch support and attention with
            our trained customer service representatives
            <span className="hidden md:inline">
              available to address inquiries, solve issues, and maintain strong
              relationships
            </span>
            
          </p>

          <div className="gap-2 flex md:gap-8">
            <button
              type="button"
              class="text-orange-500 px-5 py-2.5 hover:text-white border border-orange-500 hover:t-orange-500 font-bold rounded-lg text-sm  text-center dark:border-orange-300 dark:text-orange-300 dark:hover:text-white dark:hover:bg-orange-400 dark:focus:ring-orange-900"
            >
              Learn More
            </button>

            <button
              type="button"
              class="px-5 py-2.5 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Get Started
            </button>
          </div>
        </div>
        {/* <div className="flex justify-center items-center -mt-4 md:mt-0  ">
          <div className="border-l-[10px] border-red-300  rounded-full">
            <Image
              src="/images/heroimage3.jpg"
              className=" rounded-full border-[10px] shadow-lg border-sky-500"
              width={500}
              height={500}
              alt="hero image"
            />
          </div>
        </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default HeroSection;
