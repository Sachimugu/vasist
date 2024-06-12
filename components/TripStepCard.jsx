import { Lightbulb } from "lucide-react";
import Image from "next/image";
import React from "react";

function TripStepCard({ iconUrl, title, description }) {
  return (
    <div className="flex  gap-2 md:gap-8">
      <div className=" text-orange-500">
      <Lightbulb size={30}/>
        {/* <Image src='/images/destination-icon.png' alt="step icon" height={50} width={50} /> */}
      </div>
      <div className="flex flex-col">
        <p className="text-slate-900 text-[1rem] font-[700]">{title}</p>
        <p className="text-slate-600 text-[1rem] font-[400]">{description}</p>
      </div>
    </div>
  );
}

export default TripStepCard;
