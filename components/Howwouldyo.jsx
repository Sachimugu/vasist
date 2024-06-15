import Image from "next/image";
import React from "react";

const Howwouldyo = () => {
  return (
    <div className="md:relative bg-sky-100  pb-4 md:flex justify-center items-center">
      <div className=" md:w-[70%]">
        <p className="md:text-[2.6125rem] text-[1.525rem] leading-normal md:leading-0 px-2  text-slate-900 font-[700] text-center md:py-8 md:px-8">
          We do the Job You get the Cash
        </p>
        <p className="text-slate-600 text-lg md:text-2xl  px-6 md:px-12 text- md:text-left ">
          This is an income opportunity that will not interfere with your time
          or main source of income. You benefit by creating an added source of
          passive income for yourself at no extra cost; while our team of experts complete
          the daily tasks requirement on your behalf in exchange for our agreed
          hourly rate.
        </p>
      </div>
      <div className="flex justify-center items-center  ">
          {/* <div className="border-l-[10px] border-red-300  rounded-full"> */}
            <Image
              src="/images/pbw.png"
              className=" md:mt- "
              width={400}
              height={400}
              alt="hero image"
            />
          </div>
    </div>
  );
};

export default Howwouldyo;
