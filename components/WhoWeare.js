import Image from "next/image";
import React from "react";
import ServiceSection from "./ServiceSection";

const WhoWeare = () => {
  return (
    // <div className="bg-sky-200 bg-bg-image  ">
    <div class="bg-sky-200 py-8">
      {/* <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"> */}
        <div className="max-w-[100rem] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex mr-auto w-full md:w-[80%] p-4 items-center rounded-r-full text-white -300 justify-center  border-r-[10px]  border-orange-500 ">

      <p className=" mx-auto px-2 text-left text-sm md:text-lg md:font-medium">Remote Rater Consist of an internationally diversed team of remote freelance rates who have a robust experience working across the broad areas of data validation and search relevance</p>
        </div>
      <ServiceSection />

        <div className="max-w-[100rem] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex ml-auto  md:w-[80%] p-4 items-center rounded-l-full text-white -300 justify-center  border-l-[10px]  border-orange-500 ">

      <p className="mx-auto px-2 text-right text-sm md:text-lg md:font-medium">We are available to be hired for outsourced jobs in these aformentioned roles and are happy to deliver the rating tasks on your behalf</p>
        </div>
      
      {/* </div> */}
    </div>
  );

};

export default WhoWeare;
