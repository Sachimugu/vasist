import Image from "next/image";
import Link from "next/link";
import React from "react";

function FooterSection() {

  const telegramLink = "https://t.me/remoteraters"; // Replace with your link

  const whatsAppLink =
    "https://wa.me/+2348110070275?text=You%20are%20most%20warmly%20welcome%20to%20RemoteRaters%2C%20and%20we%20are%20glad%20to%20assist%20you%20with%20any%20queries%20you%20might%20have.%20Kindly%20proceed"
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
            We are a team of rating experts who work online and evaluate data
            <span className="hidden text-center md:block"></span> providing
            quality checks and judgements
          </p>
        </div>
        <div className="flex gap-8 flex-grow justify-around">
          <div className="flex flex-col justify-center  items-center gap-2">
            <p className="text-slate-200 font-[700] text-lg md:text-[1.3125rem]">
              Company
            </p>
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2">
              <Link href="mailto:enquiries@remoteraters.com" target="_blank" className="text-slate-400  flex gap-1 text-sm text-[1.125rem] hover:text-orange-500 font-[500]">

                  <Image
                    src="/images/gm.svg"
                    width={11}
                    height={11}
                    alt="Gmail Icon"
                    className="cursor-pointer" // Add your CSS class for pointer cursor
                  />
                  enquiries@remoteraters.com{" "}
              </Link>
              <Link href={whatsAppLink} target="_blank">
                <p className="text-slate-400 flex gap-1 text-sm text-[1.125rem] hover:text-orange-500 font-[500]">

                  <Image
                    src="/images/wh.svg"
                    width={15}
                    height={15}
                    alt="WhatsApp Icon"
                    className="cursor-pointer"
                  />
                  +2348110070275
                </p>
              </Link>

              <Link href={telegramLink} target="_blank">

                <p className="text-slate-400 flex gap-1 text-sm text-[1.125rem] hover:text-orange-500 font-[500]">
                  <Image
                    src="/images/te.svg"
                    width={15}
                    height={15}
                    alt="Telegram   Ic
                    on"
                    className="cursor-pointer"
                  />
                  @remoteraters
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
