import React from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeExternalLinks from "rehype-external-links";
import { CodeBlock } from "../Components/Code";

const InterviewBasics = () => {
  const options = { code: CodeBlock };

  return (
    <article className="px-40">
      <h1 className="text-2xl font-semibold py-4">Case Interview Basics</h1>

      <p className="tracking-wide leading-6 text-xl">
        In our Case Interview Basics we have put together{" "}
        <strong>everything you need to know about case interviews</strong> in
        various articles. Our primary goal is to equip you with comprehensive{" "}
        <strog>
          theoretical knowledge and <strong>best-practice methodologies</strong>{" "}
          that enable you to crack any single case you can think of. In total,
          you can read through 50 relevant articles that are categorized in the
          subject areas:
        </strog>
      </p>

      <ul
        role="list"
        className="marker:text-sky-400 list-disc pl-10 space-y-3 text-slate-600 text-xl"
      >
        <li>
          In{" "}
          <strong>
            <Link
              href="/case-interview-basics/interview-first-aid"
              class="basic-link"
            >
              Interview First Aid
            </Link>
          </strong>{" "}
          we have gathered the most important information about the interview in
          general (cases, personal fit, analytical tests such as PST).
        </li>
        <li>
          Within{" "}
          <strong>
            <Link
              href="/case-interview-basics/case-cracking-toolbox"
              class="basic-link"
            >
              Case Cracking
            </Link>
          </strong>{" "}
          we provide you with concrete advice about specific case types (e.g.
          market sizing) and introduce priceless tools that allow you to
          perfectly structure your case.
        </li>
        <li>
          The area{" "}
          <strong>
            <Link
              href="/case-interview-basics/business-concept-library"
              class="basic-link"
            >
              Business Concepts
            </Link>
          </strong>{" "}
          includes proven analyses that help you solve all kind of problems. In
          addition, you can find a glossary about business terms that are
          commonly used.
        </li>
      </ul>

      <p>
        These areas combined cover all nuances within a case interview so that
        you should <strong>master all the basics</strong> once you fully
        completed our Case Interview Basics.
      </p>
    </article>
  );
};

export default InterviewBasics;
