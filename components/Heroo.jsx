import React from "react";
import NavBar from "./NavBar";

const Heroo = () => {
  return (
    <div className="lg:min-h-screen min-h-screen pb-5 bg-slate-900">
      <div className="max-w-[100rem] mx-auto p-2 md:p-16">
        <div className="mt-36 sm:mt-0">
          <p className="text-3xl md:text-6xl font-extrabold text-center p-4 md:px-16 md:py-10 text-white">
            {/* Remote Rater for Data Validation and Relevance Jobs
             */}
            Raters for Data Validation and Search Relevance Evaluation
          </p>
          <p className="text-sm md:text-2xl  text-center p-4 leading-6 md:px-10 text-white">
            In a world where real income is fast shrinking, <span className="text-sky-500 text-sm md:text-2xl leading-6">creating multiple
            streams of income</span> becomes imperative. There are remote online data
            validation and search relevance jobs in your locale. <span className="block text-orange-500 text-sm md:text-2xl leading-6">
            You get the
            job. We do the job. You get the cash. You pay us.
              </span>
          </p>
          <div className="md:-ml-16  mt-6 md:mt-10 sm:mt-10 flex justify-center space-x-6 text-sm">
            <button
              type="button"
              class="  px-6 py-3 text-lg font-bold text-white bg-orange-500 hover:bg-orange-600 focus:ring-4  rounded-full focus:outline-none "
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
