import React from "react";

const AbcAnalysisComponent = () => {
  return (
    <div class="basic-section article-wrapper js-article-wrapper ">
      <div class="bootcamp-article-nav">
        <div class="bootcamp-article-nav-column prev-column">
          <a
            href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/pareto-principle"
            class="nav-link"
            title="Pareto Principle"
          >
            <i class="fas fa-chevron-left nav-icon"></i> Previous article
          </a>
        </div>
        <div class="bootcamp-article-nav-column next-column">
          <a
            href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/7s-framework-of-mckinsey"
            class="nav-link"
            title="7S-Framework of McKinsey"
          >
            Next article <i class="fas fa-chevron-right nav-icon"></i>
          </a>
        </div>
      </div>
      <article class="basic-article article-content js-article-content">
        <h2>
          <strong>
            Focus on Critical Issues by Conducting an ABC Analysis
          </strong>
        </h2>
        <h2>
          Learn to differentiate between relevant and irrelevant issues in a
          case interview
        </h2>
        <p>
          The ABC analysis is based on the&nbsp;
          <a href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/pareto-principle">
            pareto principle
          </a>
          &nbsp;and helps in the prioritization of key issues. The method
          creates&nbsp;<strong>transparency </strong>showing the significance of
          various revenue segments. For instance, an ABC analysis can be used to
          segment product lines as important/less important according to their
          share of sales or the overall value they provide to the company.&nbsp;
        </p>
        <p>
          Using the ABC analysis, a company's material selection can be divided
          into&nbsp;<strong>A-, B- and C-goods</strong>. Let's assume that
          “A-goods” are materials that are often scarce and have&nbsp;a high
          value per unit. Consequently, a few&nbsp;units of "A-goods" account
          for&nbsp;significant revenues (as a share of the total revenues). In
          addition, “C-goods” have a low value per unit with no scarcity within
          the company. Thus, whenever you are asked which materials are
          “strategic” or worth being looked at, your answer should be: “
          <strong>Let’s focus on A-goods first</strong>”&nbsp;to focus on items
          with the highest impact&nbsp;with minimal efforts.&nbsp;
        </p>
        <h2>
          Conduct an ABC analysis to tackle the right cost blocks within a
          supply chain optimization
        </h2>
        <p>
          Suppose you have determined that an{" "}
          <strong>automotive company</strong> is making losses due to high
          working capital within the supply chain (see{" "}
          <a href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/the-value-chain">
            value chain
          </a>{" "}
          for more info). What could you do to reduce the working capital?
        </p>
        <p>
          Since you need to cut{" "}
          <a href="/case-interview-basics/business-concept-library/common-terms-of-business/fixed-variable-costs">
            costs
          </a>{" "}
          you should first focus on the right cost blocks. Try to{" "}
          <strong>cluster your inventory </strong>based on its stock quantity
          and value by conducting an ABC analysis. You will quickly notice that
          most of your working capital is tied up for the purchase or production
          of motors. Compared to other materials such as screws, there an only a
          few motors on stock, but they are extremely expensive. In addition,
          because they are considered as “important”, the head of production
          insisted on high safety stock. But, through advanced&nbsp;
          <a href="https://www.preplounge.com/en/bootcamp.php/business-concept-library/common-terms-of-business/supply-and-demand">
            <strong>demand</strong>
          </a>
          &nbsp;<strong>planning </strong>and&nbsp;<strong>just-in-time</strong>{" "}
          delivery, you determine that you could reduce the inventory level and
          cut costs significantly. Moreover, you can possibly even increase the
          availability (reducing stock-out events).
        </p>
        <p>&nbsp;</p>
        <figure class="image">
          <img
            src="/uploads/bootcamp/7/type-conversion-1677660494-qkdxgygmuoe6.webp"
            alt="type-conversion-1677660494-qkdxgygmuoe6.webp"
          />
        </figure>
        <h2>Key takeaways</h2>
        <ul>
          <li>
            ABC analysis is a simple method of <strong>prioritizing</strong>
            &nbsp;issues.
          </li>
          <li>
            The analysis <strong>classifies different kinds of products</strong>
            &nbsp;based on their value or share of sales.
          </li>
          <li>
            This differentiation provides a better{" "}
            <strong>understanding of the anatomy of the cost structure </strong>
            and a good foundation for further analysis.
          </li>
        </ul>
      </article>
      <div class="action-wrapper js-action-wrapper">
        <button
          class="basic-button js-mark-as-read"
          data-uri="/ajax/bootcamp/mark-as-read/7"
        >
          Mark article as read
        </button>
        <button
          class="basic-button basic-button-ghost js-mark-as-unread"
          data-uri="/ajax/bootcamp/mark-as-unread/7"
        >
          Mark article as unread
        </button>
      </div>

      <div class="bootcamp-article-nav bootcamp-article-nav-bottom">
        <div class="bootcamp-article-nav-column prev-column">
          <a
            href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/pareto-principle"
            class="nav-link"
            title="Pareto Principle"
          >
            <i class="fas fa-chevron-left nav-icon"></i> Previous article
          </a>
        </div>
        <div class="bootcamp-article-nav-column next-column">
          <a
            href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/7s-framework-of-mckinsey"
            class="nav-link"
            title="7S-Framework of McKinsey"
          >
            Next article <i class="fas fa-chevron-right nav-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AbcAnalysisComponent;
