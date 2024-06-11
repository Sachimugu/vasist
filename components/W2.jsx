import Image from "next/image";
import React from "react";

const W2 = () => {
  return (
    <div className="bg-sky-200 md:relative ">
      <div className="  bg-sky-200  md: ">
        <div class=" bg-sky-200 bg-opacity-30 py-2 w-[100%] md:w-[60%] md:ml-auto lg:py-8">
          <div className=" sm:mt-12 max-w-[100rem]  border-2 border-sky-950 flex mr-auto md:py-0 lg:py-8 items-center rounded-l-full text-white -300 justify-center border-l-[10px]">
            <div className="bg-gree-600 flex flex-col gap-0 md:gap-2 lg:gap-6 py-3 px-5 md:py-6 lg:32 lg:px-16">
              <p className="text-sky-950 md:text-2xl text-right">
                We are available to be hired for outsourced jobs in these
                aformentioned roles and are happy to deliver the rating tasks on
                your behalf
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="md:absolute lg:-top-[1%] md:-top-[%] md:right-[60%] z-1 mt-2 md flex items-center justify-center ">
            {/* <div className="border-l-[10px] border-red-300  rounded-full"> */}
            <Image
              src="/images/h2.png"
              className=" "
              width={500}
              height={500}
              alt="hero image"
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default W2;
