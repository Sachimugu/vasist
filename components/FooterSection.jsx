import Image from "next/image";
import React from "react";

function FooterSection() {
  return (
    <section>
      <div className="md:flex bg-slate-900  p-4 ">
        <div className="flex md:flex justify-center items-center ">
          <p>
            <Image
              src="/images/logo.png"
              alt="footer logo"
              width={120}
              height={120}
            />
          </p>
          <p className="text-sm text-slate-200 mt-[1.19rem] pb-2 text-center">
            We are a team of rating expert who work online and evalute data
             <span className="hidden text-center md:block"></span> providing quality checks and
            judgements
          </p>
        </div>
        <div className="flex gap-8 flex-grow justify-around">
          <div className="flex flex-col justify-center  items-center gap-2">
            <p className="text-slate-200 font-[700] text-lg md:text-[1.3125rem]">
              Company
            </p>
            <div className="flex flex- gap-2">
              <p className="text-slate-400 text-sm text-[1.125rem] hover:text-orange-500 md:font-[500]">
                About
              </p>
              <p className="text-slate-400 text-sm text-[1.125rem] hover:text-orange-500 md:font-[500]">
                Careers
              </p>
              <p className="text-slate-400 text-sm text-[1.125rem] hover:text-orange-500 md:font-[500]">
                Mobile
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-slate-200 font-[700]  text-[1.3125rem]">
              Contact
            </p>
            <div className="flex flex- gap-2">
              <p className="text-slate-400 text-sm text-[1.125rem] hover:text-orange-500 font-[500]">
                Help
              </p>
              <p className="text-slate-400 text-sm text-[1.125rem] hover:text-orange-500 font-[500]">
                Press
              </p>
              <p className="text-slate-400 text-sm text-[1.125rem] hover:text-orange-500 font-[500]">
                Affilates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
