import React from "react";
import Link from "next/link";

const StartersGuideComponent = () => {
  return (
    <article className="px-40">
      <h1 className="text-2xl font-semibold py-4">
        Starter's Guide to Case Prep
      </h1>
      <div data-href="/case-interview-basics/interview-first-aid/starters-guide-to-case-prep/how-to-start-the-case-interview-preparation">
        <h2 className="text-2xl font-semibold py-4 underline">
          <Link href="/case-interview-basics/interview-first-aid/starters-guide-to-case-prep/how-to-start-the-case-interview-preparation">
            How to Start The Case Interview Preparation
          </Link>
        </h2>
        <p class="article-description">
          Learn the basics of a real consulting case interview and repeatedly
          train the skills you need to ace your real case interview at MBB or
          the Big Four.
        </p>
      </div>
      <div
        class="article-snippet js-clickable"
        data-href="/case-interview-basics/interview-first-aid/starters-guide-to-case-prep/conduct-mock-interviews-with-peers-and-coaches"
      >
        <h2 className="text-2xl font-semibold py-4 underline">
          <a href="/case-interview-basics/interview-first-aid/starters-guide-to-case-prep/conduct-mock-interviews-with-peers-and-coaches">
            Conduct Mock Interviews with Peers and Coaches
          </a>
        </h2>
        <p class="article-description">
          Practice with peers and conduct mock interviews to land your top job
          at McKinsey, BCG, or Bain. Learn more in our Case Interview Basics.
        </p>
      </div>{" "}
    </article>
  );
};

export default StartersGuideComponent;
