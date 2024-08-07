import React from "react";
import Link from "next/link";

const FirstAidComponent = () => {
  return (
    <article className="px-40">
      <h1 className="text-2xl font-semibold py-4">Interview First Aid</h1>

      <p className="tracking-wide leading-6 text-xl">
        In this area we provide you first of all with a <strong>guide</strong>{" "}
        to set up a smooth preparation phase for your{" "}
        <strong>upcoming interviews</strong> since you will need a proper plan
        to succeed. In addition we introduce a{" "}
        <strong>best practice approach</strong> that empowers you to master
        every case and personal fit question. Furthermore you can find an
        extensive overview about <strong>analytical tests</strong> (such as the
        Problem Solving Test - PST) that are commonly used at reputable
        consultancies to assess your numerical skills.
      </p>

      <h2 className="text-xl text-slate-600 font-medium py-4">
        Contents of this section
      </h2>
      <div className="flex flex-col gap-4 text-slate-400 underline">
        <Link
          href="/case-interview-basics/interview-first-aid/starters-guide-to-case-prep"
          class="content-item"
        >
          Starter&apos;s Guide to Case Prep
        </Link>
        <Link
          href="/case-interview-basics/interview-first-aid/crack-the-case-interview"
          class="content-item"
        >
          Crack the Case Interview
        </Link>
        <Link
          href="/case-interview-basics/interview-first-aid/ace-the-personal-fit-interview"
          class="content-item"
        >
          Ace the Personal Fit Interview
        </Link>
        <Link
          href="/case-interview-basics/interview-first-aid/recruitment-tests-in-consulting-interviews"
          class="content-item"
        >
          Recruitment Tests in Consulting Interviews
        </Link>
      </div>
    </article>
  );
};

export default FirstAidComponent;
