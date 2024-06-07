import React from "react";

function TripStepCard({ iconUrl, title, description }) {
  return (
    <div className="flex  gap-8 items-center">
      <div>
        <img src={iconUrl} alt="step icon" />
      </div>
      <div className="flex flex-col">
        <p className="text-lightGray text-[1rem] font-[700]">{title}</p>
        <p className="text-lightGray text-[1rem] font-[400]">{description}</p>
      </div>
    </div>
  );
}

export default TripStepCard;
