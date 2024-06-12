import React from "react";
import TripStepCard from "./TripStepCard";
import Image from "next/image";

function BookNextTripSection() {
  const steps = [
    {
      id: 0,
      iconUrl: "/images/destination-icon.png",
      title: "Research Job Opportunities",
      description:
        "We research and update you on which compaines are currently recruiting Raters in your location and the job role. it is also fine if you already have this information.",
    },
    {
      id: 1,
      iconUrl: "/images/payment-icon.png",
      title: "Application",
      description:
        "You apply for the role or you provide us the information to do so on your behalf if you so wish. If application is unsuccessful, you may need to reapply",
    },
    {
      id: 2,
      iconUrl: "/images/destination-icon.png",
      title: "Test",
      description:
        "If appplication is succcessful and invited for tests, then you either take the tests or we do so on your behalf at no cost. ",
    },
    {
      id: 3,
      iconUrl: "/images/destination-icon.png",
      title: "Documentation and Onboarding",
      description:
        "If test is passed successfully you complete the onboarding documentation. If onboarding is successful then we do the daily rating tasks o your behalf while you us the agreed hourly fee ",
    },
  ];
  return (
    <section className="bg-sky-100 ">
      <p className=" md:text-[2.725rem] text-[1.525rem] leading-9 md:leading-normal px-2 py-3  text-slate-900 font-[700] text-center md:py-8 md:px-16 ">
          Operation Simple and Seamless
        </p>
        <p className="text-  md:block text-slate-600 text-[1.125rem] md:font-[500] md:px-16 ml-8">
          With a focus to leaving you with no stress, we have curated a process that's easy for you to understand and follow.
        </p> 
      <div className="flex justify-between flex-col md:flex-row items-center p-6 md:px-8  md:pl- md:pr">
        <div>
        {/* <p className=" text-[2.125rem] text-title font-[700] text-left">
          Why Work With Us?
        </p> */}

        <div className="flex flex-col gap-6 ">
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
        <Image
          src="/images/va.png"
          alt="card with a girl on a wall"
          width={700}
          height={700}
        />
      </div>
      </div>
    </section>
  );
}

export default BookNextTripSection;
