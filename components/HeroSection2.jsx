import React from "react";

const HeroSection2 = () => {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 h-screen">
      <div className="max-w-[100rem] bg-purpl-500 h-screen mx-auto py-40 px-4 md:px-8">
        <div className="bg-gree-600 h-screen flex flex-col gap-8 md:gap-10">
          {/* <p className="text-slate-200 font-extrabold text-xl sm:text-2xl lg:text-2xl tracking-tight text-center dark:text-white ">
            BUSSINESS VIRTUAL ASSISTANT{" "}
          </p> */}

          <p className="text-white font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-center leading-relaxed dark:text-white">
            Earn a Passive Income in Data Validation and Relevance Services.
          </p>

          <p className="text-slate-200 font-bold text-xl sm:text-2xl lg:text-2xl tracking-tight text-center dark:text-white">
           You get the job. we do the job. You get the cash. You pay us.
            
          </p>
          <div className="gap-4 flex items-center justify-center md:gap-8">
            <button
              type="button"
              class="text-orange-500 px-5 py-2.5 hover:text-white border border-orange-500 hover:t-orange-500 font-bold rounded-lg text-sm  text-center dark:border-orange-300 dark:text-orange-300 dark:hover:text-white dark:hover:bg-orange-400 dark:focus:ring-orange-900"
            >
              Learn More
            </button>

            <button
              type="button"
              class="px-5 py-2.5 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
