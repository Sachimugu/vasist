import React from "react";
import TripStepCard from "./TripStepCard";
import Image from "next/image";


function BookNextTripSection() {
  const steps = [
    {
      id: 0,
      iconUrl: "/images/destination-icon.png",
      title: "Focus on Your Priorities",
      description:
        "We free you up from the time-consuming tasks that bog you down. ",
    },
    {
      id: 1,
      iconUrl: "/images/payment-icon.png",
      title: "Flexibility and Scalability:",
      description:
        "We offer customized solutions that adapt to your workload and budget. ",
    },
    {
      id: 2,
      iconUrl: "/images/destination-icon.png",
      title: "Cost-Effectiveness",
      description:
        "Hiring a virtual assistant is a cost-efficient way to access skilled professionals without the overhead of a full-time employee. ",
    },
  ];
  return (
    <section className="bg-sky-50 flex justify-between flex-col md:flex-row items-center p-8  md:pl-44 md:pr-36">
      <div>
        <p className="hidden md:block text-lightGray text-[1.125rem] font-[600] text-left">
          Easy and Fast
        </p>
        <p className=" text-[2.125rem] text-title font-[700] text-left">
        Why Work With Us?
        </p>

        <div className="flex flex-col gap-[3rem] mt-[1.94rem]">
          {steps.map((step) => (
            <TripStepCard
              key={step.id}
              title={step.title}
              description={step.description}
              iconUrl={step.iconUrl}
            />
          ))}
        </div>
      </div>
      <div className="p-8">
        <Image src="/images/va.png" alt="card with a girl on a wall"  width={500} height={500}/>
      </div>
    </section>
  );
}

export default BookNextTripSection;
