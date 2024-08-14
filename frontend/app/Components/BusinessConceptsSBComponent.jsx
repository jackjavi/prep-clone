"use client";

import React, { useState } from "react";
import Link from "next/link";

const BusinessConceptsSBComponent = () => {
  const [openSubSection, setOpenSubSection] = useState(null);

  const toggleSubSection = (subSection) => {
    setOpenSubSection(openSubSection === subSection ? null : subSection);
  };

  return (
    <div className="pt-12">
      {/* Business Analysis Tools */}
      <div>
        <h2 className="font-bold">Business Analysis Tools</h2>
        <div className="ml-4 mt-2">
          {/* Useful Business Analysis Tools */}
          <div
            className="cursor-pointer flex justify-between items-center"
            onClick={() => toggleSubSection("usefulBusinessTools")}
          >
            <span>Useful Business Analysis Tools</span>
            <span>{openSubSection === "usefulBusinessTools" ? "▾" : "▸"}</span>
          </div>
          {openSubSection === "usefulBusinessTools" && (
            <ul className="ml-4 mt-2">
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/pareto-principle">
                <li>• Pareto Principle</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/abc-analysis">
                <li>• ABC Analysis</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/7s-framework-of-mckinsey">
                <li>• 7S-Framework of McKinsey</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/the-capability-maturity-model-cmm">
                <li>• The Capability Maturity Model (CMM)</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/break-even-analysis">
                <li>• Break-Even Analysis</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/cost-benefit-analysis">
                <li>• Cost-Benefit Analysis</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/benchmarking">
                <li>• Benchmarking</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/core-competencies">
                <li>• Core Competencies</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/swot-analysis">
                <li>• SWOT Analysis</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/the-value-chain">
                <li>• The Value Chain</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/the-5-cs-of-credit">
                <li>• The 5 Cs of Credit</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/product-life-cycle">
                <li>• Product Life Cycle</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/the-business-model-canvas">
                <li>• The Business Model Canvas</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/the-balanced-scorecard">
                <li>• The Balanced Scorecard</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/the-cynefin-framework">
                <li>• The Cynefin Framework</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/kotter-change-management-model">
                <li>• Kotter Change Management Model</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/the-competing-values-framework">
                <li>• The Competing Values Framework</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/the-pestel-analysis-for-consulting">
                <li>• The PESTEL Analysis for Consulting</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/smart-goals-in-consulting">
                <li>• SMART Goals in Consulting</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/strategic-public-triangle">
                <li>• Public Value Strategic Triangle</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/grow-model">
                <li>• GROW Model</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/useful-business-analysis-tools/the-hoshin-kanri-matrix">
                <li>• Hoshin Kanri Matrix</li>
              </Link>
            </ul>
          )}
          {/* Common Terms of Business */}
          <div
            className="cursor-pointer flex justify-between items-center mt-4"
            onClick={() => toggleSubSection("commonTermsOfBusiness")}
          >
            <span>Common Terms of Business</span>
            <span>
              {openSubSection === "commonTermsOfBusiness" ? "▾" : "▸"}
            </span>
          </div>
          {openSubSection === "commonTermsOfBusiness" && (
            <ul className="ml-4 mt-2">
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/opportunity-costs">
                <li>• Opportunity Costs</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/the-tuckman-model">
                <li>• The Tuckman Model</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/economy-of-scale-and-economy-of-scope">
                <li>• Economy of Scale and Economy of Scope</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/servant-leadership">
                <li>• Servant Leadership</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/net-present-value-npv">
                <li>• Net Present Value - NPV</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/balance-sheet">
                <li>• Balance Sheet</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/design-thinking">
                <li>• Design Thinking</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/income-statement">
                <li>• Income Statement</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/cash-flow-statement">
                <li>• Cash Flow Statement</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/supply-and-demand">
                <li>• Supply and Demand</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/fixed-variable-costs">
                <li>• Fixed & Variable Costs</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/cagr-compound-annual-growth-rate">
                <li>• CAGR-Compound Annual Growth Rate</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/the-scrum-framework-a-guide-for-aspiring-consultants">
                <li>• The Scrum Framework: A Guide for Aspiring Consultants</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/the-kanban-framework">
                <li>• The Kanban Framework</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/the-blue-ocean-strategy">
                <li>• The Blue Ocean Strategy</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/lean-management">
                <li>• Lean Management</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/peter-principle">
                <li>• Peter Principle</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/emotional-intelligence">
                <li>• Emotional Intelligence</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/the-amazon-interview-questions">
                <li>• The Amazon Interview Questions</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/information-technology-infrastructure-library-itil">
                <li>• Information Technology Infrastructure Library (ITIL)</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/devops">
                <li>• DevOps</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/five-dysfunctions-of-a-team">
                <li>• Five Dysfunctions of a Team</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/kolbs-learning-circle">
                <li>• Kolb's Learning Circle</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/interpersonal-communication">
                <li>• Interpersonal Communication</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/six-sigma">
                <li>• Six Sigma</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/the-role-of-the-hypothesis-in-consulting">
                <li>• The Role of the Hypothesis in Consulting</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/the-roots-and-effects-of-inflation">
                <li>• The Roots and Effects of Inflation</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/amazon-leadership-principles">
                <li>• Amazon Leadership Principles</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/learning-organization">
                <li>• Learning Organization</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/theory-of-planned-behavior">
                <li>• Theory of Planned Behavior</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/situational-leadership">
                <li>• Situational Leadership</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/theory-of-constraints">
                <li>• Theory of Constraints</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/herzbergs-2-factor-theory">
                <li>• Herzberg's 2-Factor Theory</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/capability-based-planning">
                <li>• Capability-Based Planning</li>
              </Link>
              <Link href="/case-interview-basics/business-concept-library/common-terms-of-business/unique-value-proposition-uvp">
                <li>• Unique Value Proposition (UVP)</li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessConceptsSBComponent;
