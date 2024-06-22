"use client";
import React, { useState } from "react";
// import MainButton from "../common/MainButton";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

const formatDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};

function NewsLetterSection() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [uname, setUname] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/send", { email, message, uname });

      if (res.status === 200) {
        const now = new Date();
        const formattedDate = formatDate(now);
        toast({
          className: "bg-green-500 text-white",
          title: "Email sent successfully",
          description: formattedDate,
        });
        setEmail("");
        setMessage("");
        setUname("");
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);

      const now = new Date();
      const formattedDate = formatDate(now);
      toast({
        className: "bg-red-500 text-white",
        title: "Failed to Send Email",
        description: formattedDate ,
      });
    }
  };
  return (
    <div className="border-2 shadow-lg shadow-black border-sky- py-8 md:p-[4rem] rounded-[1.25rem] rounded-tl-extraLarge relative ">
      <div className="z-20">
        {/* <p className="text-lightGray text-[1.5rem] font-[600] text-center mb-[2.63rem]">
          Contact us to get information and interesting offerss{" "}
          <br className="hidden md:block" />
        </p> */}

        <div className="flex justify-between flex-col md:flex-row items-center gap-8 md:mx-[2.63rem]">
          <form
            onSubmit={handleSubmit}
            className="relative  flex flex-col gap-4 flex-grow z-[10]"
          >
            <Input
              type="Your name"
              placeholder="Your name"
              id="uname"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
              required
              className="bg-white h-[3.5rem] pl-[1rem]"
            />

            {/* <div className="absolute top-5 left-4">
              <img src="/images/envelop.png" alt="envelope icon" />
            </div> */}
            <Input
              type="email"
              id="email"
              placeholder="Your email"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white h-[3.5rem] pl-[1rem]"
            />
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Type your message here."
            />
            <Button type="submit" className="bg-orange-500 text-white">
              {loading ? "Sending..." : "Send message"}
            </Button>
          </form>

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
