import Image from "next/image";
import React from "react";

const W1 = () => {
  return (
    <div className="md:relative bg-sky-200   ">
      {/* <p className="md:text-[3.125rem] text-[2.525rem] leading-9 md:leading-normal px-2 py-3  text-sky-950 font-[700] text-center md:py-8 md:px-16">
        Remote Raters: Helping You Earn a Passive Income
      </p> */}
      <div class=" bg-sky-200 bg-opacity-30 py- w-[100%] md:w-[60%] lg:py-8">
        <div className=" sm:mt-0 max-w-[100rem]  border-2 border-sky-950 flex mr-auto md:py-0 lg:py-8 items-center rounded-r-full text-white -300 justify-center border-r-[10px]">
          <div className="bg-gree-600 flex flex-col gap-0 md:gap-2 lg:gap-4 py-3 px-5 md:py-6 lg:32 lg:px-16">
            <p className="font-bold text-slate-900 text-lg md:text-2xl">
              Here for You
            </p>
            <p className="text-slate-900 md:text-2xl">
              Remote Rater Consist of an internationally diversed team of remote
              freelance rates who have a robust experience working across the
              broad areas of data validation and search relevance
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="md:absolute sm:top-[5] md:top-[-10%] md:left-[65%] z-1  md  flex items-center justify-center ">
          {/* <div className="border-l-[10px] border-red-300  rounded-full"> */}
          <Image
            src="/images/h1.png"
            className=" "
            width={500}
            height={500}
            alt="hero image"
          />
        </div>
      </div>
      //{" "}
    </div>
    // </div>
  );
};

export default W1;
