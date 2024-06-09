import React from "react";
import NavBar from "./NavBar";

const Heroo = () => {
  return (
    <div className="h-screen bg-sky-950">
      <NavBar></NavBar>
      <div className="max-w-[100rem] mx-auto p-2 md:p-16">
        <div className="mt-36 sm:mt-0">
          <h1 className="text-3xl md:text-6xl font-extrabold text-center p-4 md:p-16 text-white">
            Remote Rater for Data Validation and Relevance Jobs
          </h1>
          <h1 className="text-sm md:text-2xl  text-center p-4 leading-6 md:px-16 text-white">
            In the world where real income is shrinking faster than blinking an
            eye, harnessing every income oppoortunity becomes the goal. There
            are remote online data validation jobs in your locale. You get the
            job. We do the job. You get the cash you pay us. You pay us.
          </h1>
          <div className="md:-ml-16  mt-8 md:mt-16 sm:mt-10 flex justify-center space-x-6 text-sm">
              <button
                type="button"
                class="  px-6 py-3 text-lg font-bold text-white bg-orange-500 hover:bg-orange-600 focus:ring-4  rounded-md focus:outline-none "
              >
                Get Started
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Heroo;
