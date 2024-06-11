import React from "react";
import NavBar from "./NavBar";

const Heroo = () => {
  return (
    <div className="lg:min-h-screen min-h-screen pb-5 bg-sky-950">
      <div className="max-w-[100rem] mx-auto p-2 md:p-16">
        <div className="mt-36 sm:mt-0">
          <p className="text-3xl md:text-6xl font-extrabold text-center p-4 md:p-16 text-white">
            Remote Rater for Data Validation and Relevance Jobs
          </p>
          <p className="text-sm md:text-2xl  text-center p-4 leading-6 md:px-16 text-white">
            In the world where real income is shrinking faster than blinking an
            eye, harnessing every income oppoortunity becomes the goal. There
            are remote online data validation jobs in your locale. You get the
            job. We do the job. You get the cash you pay us. You pay us.
          </p>
          <div className="md:-ml-16  mt-8 md:mt-16 sm:mt-10 flex justify-center space-x-6 text-sm">
              <button
                type="button"
                class="  px-6 py-3 text-lg font-bold text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4  rounded-md focus:outline-none "
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
