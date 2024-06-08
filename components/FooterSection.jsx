import Image from "next/image";
import React from "react";

function FooterSection() {
  return (
    <section>
      <div className="flex bg-slate-900 flex-col md:flex-row justify-between gap-8 p-4 ">
        <div className="hidden md:block">
          <p>
            <Image src="/images/logo.png" alt="footer logo" width={80} height={80} />
          </p>
          <p className="text-lightGray mt-[1.19rem]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="flex gap-8 flex-grow justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-slate-200 font-[700] text-[1.3125rem]">
              Company
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-lightGray text-[1.125rem] hover:text-orange-500 font-[500]">About</p>
              <p className="text-lightGray text-[1.125rem] hover:text-orange-500 font-[500]">
                Careers
              </p>
              <p className="text-lightGray text-[1.125rem] hover:text-orange-500 font-[500]">
                Mobile
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-slate-200 font-[700]  text-[1.3125rem]">
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-lightGray text-[1.125rem] hover:text-orange-500 font-[500]">
                Help/FAQ
              </p>
              <p className="text-lightGray text-[1.125rem] hover:text-orange-500 font-[500]">Press</p>
              <p className="text-lightGray text-[1.125rem] hover:text-orange-500 font-[500]">
                Affilates
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-slate-200 font-[700] text-[1.3125rem]">More</p>
            <div className="flex flex-col gap-2">
              <p className="text-lightGray text-[1.125rem] hover:text-orange-500  font-[500]">
                Airlinefees
              </p>
              <p className="text-lightGray text-[1.125rem] hover:text-orange-500 font-[500]">
                Airline
              </p>
              <p className="text-lightGray text-[1.125rem] hover:text-orange-500 font-[500]">
                Low fare tips
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-4 items-center">
            <div className="block md:hidden">

          <Image src="/images/logo.png" alt="footer logo" width={80} height={80} className=""/>
            </div>
            <img src="/images/facebook-icon.png" alt="social icon" />
            <img src="/images/instagram-icon.png" alt="social icon" />
            <img src="/images/x-icon.png" alt="social icon" />
          </div>
          
          
        </div>
      </div>
      <p className="p-4 hover:text-orange-500 bg-sky-300 text-lightGray text-[0.875rem] font-[600] flex justify-center">
        All rights reserved@sachimugu
      </p>
    </section>
  );
}

export default FooterSection;
