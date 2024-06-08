import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="md:relative bg-sky-200 bg-bg-image md:">
      <div class="bg-sky-200 bg-opacity-30  w-[100%] md:w-[60%] lg:py-8">
        <div className="mt-20 sm:mt-0 max-w-[100rem] bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 flex mr-auto md:py-0 lg:py-8 items-center rounded-r-full text-white -300 justify-center border-r-[10px]  border-orange-400 ">
          <div className="bg-gree-600 flex flex-col gap-0 md:gap-2 lg:gap-6 py-12 px-5 md:py-24 lg:32 lg:px-16">
            <p className="text-white font-extrabold bg-green800 -ml-10 md:ml-0  text-center px-8 md:px-8 text-3xl  sm:text-5xl lg:text-5xl tracking-tight  leading-t md:leading-relaxed dark:text-white">
              Earn a Passive Income in{" "}
              <span className=" md:inline"> Data Validation and </span>
              <span className=" md:inline"> Relevance Jobs. </span>
            </p>

            <p className="mt-4 md-t-4   md:text-[1.5rem] text-center text-slate-300  max-wxl mx-auto dark:text-slate-400">
              You get the job. We do the job. You get the cash. You pay us.{" "}
            </p>
            <div className="-ml-10 md:-ml-16  mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
              <button
                type="button"
                class="  px-6 py-3 text-lg font-bold text-white bg-orange-500 hover:bg-orange-600 focus:ring-4  rounded-md focus:outline-none "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        
      </div>

      <div>
      <div className="md:absolute md:top-[18%] md:left-[65%] z-1 mt-2 md  ">
          {/* <div className="border-l-[10px] border-red-300  rounded-full"> */}
            <Image
              src="/images/heroimage3.jpg"
              className=" rounded-full border-[10px] shadow-lg border-sky-500"
              width={500}
              height={500}
              alt="hero image"
            />
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default Hero;
