import Image from 'next/image'
import React from 'react'

const W2 = () => {
  return (
    <div><div className="md:relative bg-sky-200  md: ">
    <div class="bg-sky-200 bg-opacity-30 py-2 w-[100%] md:w-[60%] md:ml-auto lg:py-8">
      <div className=" sm:mt-0 max-w-[100rem]  border-2 border-sky-950 flex mr-auto md:py-0 lg:py-8 items-center rounded-l-full text-white -300 justify-center border-r-[10px]">
        <div className="bg-gree-600 flex flex-col gap-0 md:gap-2 lg:gap-6 py-12 px-5 md:py-24 lg:32 lg:px-16">
         
          <p className='text-sky-950 md:text-2xl'>We are available to be hired for outsourced jobs in these aformentioned roles and are happy to deliver the rating tasks on your behalf</p>
        </div>
      </div>
      
    </div>

    <div>
    <div className="md:absolute md:top-[7%] md:right-[70%] z-1 mt-2 md  ">
        {/* <div className="border-l-[10px] border-red-300  rounded-full"> */}
          <Image
            src="/images/heroimage3.jpg"
            className=" rounded-full border-[10px] shadow-lg border-sky-500"
            width={400}
            height={400}
            alt="hero image"
          />
        </div>
      </div>
  //   </div></div>
  )
}

export default W2