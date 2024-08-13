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
              <Link href="/business-terms/opportunity-costs">
                <li>• Opportunity Costs</li>
              </Link>
              <Link href="/business-terms/tuckman-model">
                <li>• The Tuckman Model</li>
              </Link>
              <Link href="/business-terms/economy-of-scale">
                <li>• Economy of Scale and Economy of Scope</li>
              </Link>
              <Link href="/business-terms/servant-leadership">
                <li>• Servant Leadership</li>
              </Link>
              <Link href="/business-terms/net-present-value">
                <li>• Net Present Value - NPV</li>
              </Link>
              <Link href="/business-terms/balance-sheet">
                <li>• Balance Sheet</li>
              </Link>
              <Link href="/business-terms/design-thinking">
                <li>• Design Thinking</li>
              </Link>
              <Link href="/business-terms/income-statement">
                <li>• Income Statement</li>
              </Link>
              <Link href="/business-terms/cash-flow-statement">
                <li>• Cash Flow Statement</li>
              </Link>
              <Link href="/business-terms/supply-and-demand">
                <li>• Supply and Demand</li>
              </Link>
              <Link href="/business-terms/fixed-variable-costs">
                <li>• Fixed & Variable Costs</li>
              </Link>
              <Link href="/business-terms/cagr">
                <li>• CAGR-Compound Annual Growth Rate</li>
              </Link>
              <Link href="/business-terms/scrum-framework">
                <li>• The Scrum Framework: A Guide for Aspiring Consultants</li>
              </Link>
              <Link href="/business-terms/kanban-framework">
                <li>• The Kanban Framework</li>
              </Link>
              <Link href="/business-terms/blue-ocean-strategy">
                <li>• The Blue Ocean Strategy</li>
              </Link>
              <Link href="/business-terms/lean-management">
                <li>• Lean Management</li>
              </Link>
              <Link href="/business-terms/peter-principle">
                <li>• Peter Principle</li>
              </Link>
              <Link href="/business-terms/emotional-intelligence">
                <li>• Emotional Intelligence</li>
              </Link>
              <Link href="/business-terms/amazon-interview-questions">
                <li>• The Amazon Interview Questions</li>
              </Link>
              <Link href="/business-terms/itil">
                <li>• Information Technology Infrastructure Library (ITIL)</li>
              </Link>
              <Link href="/business-terms/devops">
                <li>• DevOps</li>
              </Link>
              <Link href="/business-terms/five-dysfunctions-of-a-team">
                <li>• Five Dysfunctions of a Team</li>
              </Link>
              <Link href="/business-terms/kolb-learning-circle">
                <li>• Kolb's Learning Circle</li>
              </Link>
              <Link href="/business-terms/interpersonal-communication">
                <li>• Interpersonal Communication</li>
              </Link>
              <Link href="/business-terms/six-sigma">
                <li>• Six Sigma</li>
              </Link>
              <Link href="/business-terms/hypothesis-in-consulting">
                <li>• The Role of the Hypothesis in Consulting</li>
              </Link>
              <Link href="/business-terms/inflation">
                <li>• The Roots and Effects of Inflation</li>
              </Link>
              <Link href="/business-terms/amazon-leadership-principles">
                <li>• Amazon Leadership Principles</li>
              </Link>
              <Link href="/business-terms/learning-organization">
                <li>• Learning Organization</li>
              </Link>
              <Link href="/business-terms/theory-of-planned-behavior">
                <li>• Theory of Planned Behavior</li>
              </Link>
              <Link href="/business-terms/situational-leadership">
                <li>• Situational Leadership</li>
              </Link>
              <Link href="/business-terms/theory-of-constraints">
                <li>• Theory of Constraints</li>
              </Link>
              <Link href="/business-terms/herzberg-2-factor-theory">
                <li>• Herzberg's 2-Factor Theory</li>
              </Link>
              <Link href="/business-terms/capability-based-planning">
                <li>• Capability-Based Planning</li>
              </Link>
              <Link href="/business-terms/unique-value-proposition">
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
