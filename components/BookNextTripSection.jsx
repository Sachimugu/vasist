import React from "react";
import TripStepCard2 from "./TripStepCard2";

function BookNextTripSection2() {
  const steps = [
    {
      id: 0,
      iconUrl: "/images/destination-icon.png",
      title: "Focus on Your Piriorities",
      description:
        "We Free you from the time consuming tasks the bog you down ",
    },
    {
      id: 1, 
      iconUrl: "/images/payment-icon.png",
      title: "Flexibility and Scalability",
      description:
        "We offer customised solutions that adapt to your workload and budget",
    },
    {
      id: 2,
      iconUrl: "/images/airport-icon.png",
      title: "Cost_Effectiveness",
      description:
        "Hring a virtual assitance is a cost-efficient way to access skilled professionals without the over head of a full time employee",
    },
  ];
  return (
    <section className="flex justify-between flex-col md:flex-row items-center bg-sky-100 p-4">
      <div>
       
        <p className="md:text-[3.125rem] text-[2.125rem] text-sky-950 font-[700] text-left">
          Why Work With Us
        </p>

        <div className="flex flex-col gap-[3rem] mt-[1.94rem]">
          {steps.map((step) => (
            <TripStepCard2
              key={step.id}
              title={step.title}
              description={step.description}
              iconUrl={step.iconUrl}
            />
          ))}
        </div>
      </div>
      {/* <div>
        <img src="/images/next-trip.png" alt="card with a girl on a wall" />
      </div> */}
    </section>
  );
}

export default BookNextTripSection2;
