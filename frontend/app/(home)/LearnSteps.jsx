import React from "react";
import Image from "next/image";

const LearnSteps = () => {
  return (
    <div className=" py-12 h-full px-12 md:px-0">
      <h1 className="md:text-5xl text-3xl font-Inter">
        Secure Your Top Job in Just 3 Steps{" "}
      </h1>
      <div className="md:flex flex-auto gap-12 py-16">
        <div className="min-h-[400px] md:w-1/3 w-full">
          <Image
            src="/assets/step-1.png"
            alt="Step 1"
            width={500}
            height={500}
            className="object-cover w-full h-[50%] rounded-lg"
          />
          <h2 className="md:text-3xl text-xl font-mono py-4 font-bold">
            Learn
          </h2>
          <p className="md:text-xl text-lg font-playfair py-4 tracking-wide leading-10">
            Every interview preparation begins with the theoretical foundation.
            Our case interview basics offer you comprehensive know-how, tips and
            tricks. Benefit from over 200 exclusive practice cases, 200 drills
            and 80 videos and use tools for Mental Math and Personal Fit.
          </p>
        </div>
        <div className="h-[400px] md:w-1/3 w-full">
          <Image
            src="/assets/step-2.png"
            alt="Step 2"
            width={500}
            height={500}
            className="object-cover w-full h-[50%] rounded-lg"
          />
          <h2 className="md:text-3xl text-xl font-mono py-4 font-bold">
            Practice
          </h2>
          <p className="md:text-xl text-lg font-playfair py-4 tracking-wide leading-10">
            Practice makes perfect! Conduct mock interviews with peers from the
            community or get coaching by former (MBB) consultants.
          </p>
        </div>
        <div className="h-[400px] md:w-1/3 w-full">
          <Image
            src="/assets/step-3.png"
            alt="Step 3"
            width={500}
            height={500}
            className="object-cover w-full h-[50%] rounded-lg"
          />
          <h2 className="md:text-3xl text-xl font-mono py-4 font-bold">
            Get the offer
          </h2>
          <p className="md:text-xl text-lg font-playfair py-4 tracking-wide leading-10">
            The theory is in your mind. The mock interviews have boosted your
            confidence. You are perfectly prepared for your interview. Convince
            your target company and start your career in consulting!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnSteps;
