import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactLogos = () => {
  const telegramLink = "https://t.me/remoteraters"; // Replace with your link

  const whatsAppLink =
    "https://wa.me/+2348110070275?text=You%20are%20most%20warmly%20welcome%20to%20RemoteRaters%2C%20and%20we%20are%20glad%20to%20assist%20you%20with%20any%20queries%20you%20might%20have.%20Kindly%20proceed"; // Replace with your link

  return (
    <div className="bg-sky-200">
      <p className="md:text-[3.125rem] text-[1.825rem] leading-9 md:leading-0 px-2 py-3  text-slate-900 font-[700] text-center md:py-8 md:px-16">
        Contact Us
        <br className="hidden md:block" />
      </p>
      <div className="flex gap-8 md:gap-16 justify-center item-center px-4 py-2 md:p-8 bg-sky-200 shadow-md ">
        <Link
          href="mailto:enquiries@remoteraters.com"
          className="hover:shadow-lg px-4 flex justify-center items-center"
          target="_blank"
        >
          <Image
            src="/images/gm.svg"
            width={90}
            height={90}
            alt="Gmail Icon"
            className="cursor-pointer" // Add your CSS class for pointer cursor
          />
        </Link>

        <Link href={whatsAppLink}  className="hover:shadow-lg px-4 flex justify-center items-center" target="_blank">
          <Image
            src="/images/wh.svg"
            width={100}
            height={100}
            alt="WhatsApp Icon"
            className="cursor-pointer"
          />
        </Link>

        <Link href={telegramLink}  className="hover:shadow-lg px-4 flex justify-center items-center" target="_blank">
          <Image
            src="/images/te.svg"
            width={100}
            height={100}
            alt="Telegram Icon"
            className="cursor-pointer"
          />
        </Link>

        <Link href="https://www.linkedin.com/company/remoteraters/about/"  className="hover:shadow-lg px-4 flex justify-center items-center shadow-white" target="_blank">
          <Image
            src="/images/li.svg"
            width={100}
            height={100}
            alt="LinkedIn Icon"
            className="cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default ContactLogos;
