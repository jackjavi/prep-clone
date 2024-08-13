import React from "react";

const ParetoPrincipleComponent = () => {
  return (
    <div class="basic-section article-wrapper js-article-wrapper ">
      <div class="bootcamp-article-nav">
        <div class="bootcamp-article-nav-column prev-column"></div>
        <div class="bootcamp-article-nav-column next-column">
          <a
            href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/abc-analysis"
            class="nav-link"
            title="ABC Analysis"
          >
            Next article <i class="fas fa-chevron-right nav-icon"></i>
          </a>
        </div>
      </div>
      <article class="basic-article article-content js-article-content">
        <h2>
          <strong>
            The Pareto Principle&nbsp;Is About&nbsp;Focusing on Factors That
            Have the Largest Impacts on a Problem/Case Solution
          </strong>
        </h2>
        <h2>Prioritize issues with the Pareto Principle</h2>
        <p>
          Pareto's 80-20 principle is a general rule of thumb that describes an
          unequal distribution between causes and effects. The principle states
          that{" "}
          <strong>80% of overall results are driven by 20% of inputs</strong>.
          For example: 80% of work requires 20% effort, 80% of a project
          requires 20% of the time, and 80% of revenue comes from 20% of
          clients. When analyzing{" "}
          <a href="/management-consulting-cases">case problems</a>, the Pareto
          rule can be utilized to diagnose big issues that might be caused by a
          much smaller problem. On the other hand, problems that seemingly look
          huge might result in only a small issue.
        </p>
        <h2>
          Use the Pareto Principle to logically focus on critical high impact
          areas
        </h2>
        <p>
          The Pareto Principle highlights a common{" "}
          <a href="/case-interview-basics/interview-first-aid/crack-the-case-interview/approaching-a-case">
            approach
          </a>{" "}
          for consultants: solving a problem where you can produce the highest
          positive impact with the lowest amount of effort because consultants
          usually have very limited time to work on a problem. During a
          McKinsey, BCG, or Bain interview, you need to find a solution in less
          than an hour. Therefore, focusing on important aspects of the case is
          crucial.
        </p>
        <h2>Apply the Pareto Principle in case interviews</h2>
        <p>
          The Pareto Principle should be intuitive when evaluating options to
          determine the root causes of problems and their solutions.&nbsp;For
          instance, look at the chart below, the{" "}
          <a href="/case-interview-basics/business-concept-library/common-terms-of-business/fixed-variable-costs">
            costs
          </a>{" "}
          per sold product from an analysis of an online store:
        </p>
        <p>&nbsp;</p>
        <figure class="image">
          <img
            src="/uploads/bootcamp/26/type-conversion-1677768243-ngn69ergr5ho.webp"
            alt="type-conversion-1677768243-ngn69ergr5ho.webp"
          />
        </figure>
        <p></p>
        <div class="highlight-box highlight-box-light-grey js-highlight-box">
          {" "}
          Want to see the full case behind the example? View and solve the&nbsp;
          <a href="/management-consulting-cases/candidate-led-usual-style/intermediate/madflixcom-49">
            Madflix case
          </a>
          &nbsp;
        </div>
        <p>
          If you want to reduce the total costs by 10%, you need to save 17.5
          cents. By a thorough breakdown of costs, you can focus on the ones
          with the highest impact: distribution and amortization costs.
        </p>
        <p>
          Reducing only distribution and amortization costs by 10% will yield
          savings of 16 cents.
        </p>
        <p>
          <strong>Impact Analysis:</strong>
        </p>
        <ul>
          <li>
            Changing 50% of costs positions (distribution and amortization)
            leads to 91% (16/17.5) of planned cost reduction.
          </li>
          <li>
            In other words, only 50% of the possible effort is required
            (assuming reduction of costs by 10% requires the same effort for
            every cost position).
          </li>
        </ul>
      </article>
      <div class="action-wrapper js-action-wrapper">
        <button
          class="basic-button js-mark-as-read"
          data-uri="/ajax/bootcamp/mark-as-read/26"
        >
          Mark article as read
        </button>
        <button
          class="basic-button basic-button-ghost js-mark-as-unread"
          data-uri="/ajax/bootcamp/mark-as-unread/26"
        >
          Mark article as unread
        </button>
      </div>

      <div class="bootcamp-article-nav bootcamp-article-nav-bottom">
        <div class="bootcamp-article-nav-column prev-column"></div>
        <div class="bootcamp-article-nav-column next-column">
          <a
            href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/abc-analysis"
            class="nav-link"
            title="ABC Analysis"
          >
            Next article <i class="fas fa-chevron-right nav-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ParetoPrincipleComponent;
