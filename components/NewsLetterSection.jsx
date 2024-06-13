import React from "react";
// import MainButton from "../common/MainButton";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

function NewsLetterSection() {
  return (
    <div className="border-2 shadow-lg shadow-black border-sky- p-8 md:p-[4rem] rounded-[1.25rem] rounded-tl-extraLarge relative ">
      <div className="z-20">
        {/* <p className="text-lightGray text-[1.5rem] font-[600] text-center mb-[2.63rem]">
          Contact us to get information and interesting offerss{" "}
          <br className="hidden md:block" />
        </p> */}

        <div className="flex justify-between flex-col md:flex-row items-center gap-8 mx-[2.63rem]">
          <div className="relative  flex flex-col gap-4 flex-grow z-[10]">
          <Input
              type="Your name"
              placeholder="Your name"
              className="bg-white h-[3.5rem] pl-[1rem]"
            />

            {/* <div className="absolute top-5 left-4">
              <img src="/images/envelop.png" alt="envelope icon" />
            </div> */}
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white h-[3.5rem] pl-[1rem]"
            />
            <Textarea placeholder="Type your message here." />
            <Button className="bg-orange-500 text-white">Send message</Button>
          </div>

          {/* <MainButton
            text="Subscribe"
            classes="w-[9.25rem] h-[3.25rem] z-[10]"
            isGradient
          /> */}
        </div>
      </div>
      <div className="absolute bottom-0  left-4 z-0 opacity-25">
        <img
          src="/images/round-ring-left.png"
          alt="round ring left"
          className="w-[200px]"
        />
      </div>

      {/* <div className="absolute -top-4 -right-4">
        <img src="/images/send-shape.png" alt="send icon" />
      </div> */}

      <div className="absolute top-0 right-0 opacity-25">
        <img
          src="/images/round-ring-right.png"
          alt="round ring right"
          className="w-[200px]"
        />
      </div>

      <div className="absolute -bottom-16 right-[-6rem] hidden md:block">
        <img src="/images/plus-group.png" alt="send icon" />
      </div>
    </div>
  );
}

export default NewsLetterSection;
