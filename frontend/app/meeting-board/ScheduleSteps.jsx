import React from "react";
import Image from "next/image";

const ScheduleSteps = () => {
  return (
    <div className=" py-12 h-full px-12 md:px-0">
      <h1 className="md:text-5xl text-3xl font-Inter mb-8">
        Schedule Mock Interviews on the Meeting Board
      </h1>
      <div className="md:flex flex-auto gap-12 p-8 bg-slate-300 rounded-2xl ">
        <div className="h-[250px] md:w-1/4 w-full flex flex-col">
          <div className="">
            <Image
              src="/assets/meeting-board/schedule-step-1.png"
              alt="Step 1"
              width={200}
              height={200}
              className="object-cover rounded-lg"
            />
          </div>

          <p className="md:text-xl text-lg font-playfair py-4 tracking-wide leading-10 h-full">
            1. Select time & date
          </p>
        </div>
        <div className="h-[250px] md:w-1/4 w-full flex flex-col">
          <div className="">
            <Image
              src="/assets/meeting-board/schedule-step-2.png"
              alt="Step 2"
              width={200}
              height={200}
              className="object-cover rounded-lg"
            />
          </div>

          <p className="md:text-xl text-lg font-playfair py-4 tracking-wide leading-10 h-full">
            2. Add your invitation
          </p>
        </div>
        <div className="h-[250px] md:w-1/4 w-full flex flex-col">
          <div className="">
            <Image
              src="/assets/meeting-board/schedule-step-3.png"
              alt="Step 3"
              width={200}
              height={200}
              className="object-cover rounded-lg"
            />
          </div>

          <p className="md:text-xl text-lg font-playfair py-4 tracking-wide leading-10 h-full">
            3. Wait for approval
          </p>
        </div>
        <div className="h-[250px] md:w-1/4 w-full flex flex-col">
          <div className="">
            <Image
              src="/assets/meeting-board/schedule-step-4.png"
              alt="Step 4"
              width={200}
              height={200}
              className="object-cover rounded-lg"
            />
          </div>

          <p className="md:text-xl text-lg font-playfair py-4 tracking-wide leading-10 h-full">
            4. Practice together
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSteps;
