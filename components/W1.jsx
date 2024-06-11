import Image from 'next/image'
import React from 'react'

const W1 = () => {
  return (
    <div className="md:relative bg-sky-50  md: ">
      <p className="md:text-[3.125rem] text-[1.825rem] leading-9 md:leading-0 px-2 py-3  text-sky-950 font-[700] text-center md:py-8 md:px-16">
         REMOTE RATERS: HELPING YOU EARN A PASSIVE INCOME
        </p>
      <div class="bg-sky-50 bg-opacity-30 py-2 w-[100%] md:w-[60%] lg:py-8">
        <div className=" sm:mt-0 max-w-[100rem]  border-2 border-sky-950 flex mr-auto md:py-0 lg:py-8 items-center rounded-r-full text-white -300 justify-center border-r-[10px]">
          <div className="bg-gree-600 flex flex-col gap-0 md:gap-2 lg:gap-6 py-12 px-5 md:py-24 lg:32 lg:px-16">
            {/* <p className="text-white font-extrabold bg-green800 -ml-10 md:ml-0  text-center px-8 md:px-8 text-3xl  sm:text-5xl lg:text-5xl tracking-tight  leading-t md:leading-relaxed dark:text-white">
              Earn a Passive Income in{" "}
              <span className=" md:inline"> Data Validation and </span>
              <span className=" md:inline"> Relevance Jobs. </span>
            </p>

            <p className="mt-4 md-t-4   md:text-[1.5rem] text-center text-slate-300  max-wxl mx-auto dark:text-slate-400">
              You get the job. We do the job. You get the cash. You pay us.{" "}
            </p>
            <div className="-ml-10 md:-ml-16  mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
             
            </div> */}

            <p className='text-sky-950 md:text-2xl'>Remote Rater Consist of an internationally diversed team of remote freelance rates who have a robust experience working across the broad areas of data validation and search relevance</p>
          </div>
        </div>
        
      </div>

      <div>
      <div className="md:absolute md:top-[25%] md:left-[65%] z-1 mt-2 md  ">
          {/* <div className="border-l-[10px] border-red-300  rounded-full"> */}
            <Image
              src="/images/pb1.png"
              className=" rounded-full border-[10px] shadow-lg border-sky-500"
              width={500}
              height={500}
              alt="hero image"
            />
          </div>
        </div>
    //   </div>
    // </div>
  )
}

export default W1