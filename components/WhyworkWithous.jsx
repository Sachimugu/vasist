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
        "We research and update you on what compaines in your location are currently recruiting in your location Raters and the job tole. it is also fine if you already have this information. ",
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
        "if test is passed successfully you complete the onboarding documentation. If onboarding is successful then we do the daily rating tasks o your behalf while you us the agreed hourly fee ",
    },
  ];
  return (
    <section className="bg-sky-100 flex justify-between flex-col md:flex-row items-center p-4 md:p-8  md:pl-44 md:pr-36">
      <div>
        <p className="hidden md:block text-lightGray text-[1.125rem] font-[600] text-left">
          Easy and Fast
        </p>
        {/* <p className=" text-[2.125rem] text-title font-[700] text-left">
          Why Work With Us?
        </p> */}

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
        <Image
          src="/images/va.png"
          alt="card with a girl on a wall"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}

export default BookNextTripSection;
