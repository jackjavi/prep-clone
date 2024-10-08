"use client";

import React, { useState } from "react";
import Link from "next/link";

const SideBar = () => {
  const [openSubSection, setOpenSubSection] = useState(null);

  const toggleSubSection = (subSection) => {
    setOpenSubSection(openSubSection === subSection ? null : subSection);
  };

  return (
    <div className="pt-12">
      {/* Case Cracking */}
      <div>
        <h2 className="font-bold">Case Cracking</h2>
        <div className="ml-4 mt-2">
          {/* Identify Your Case Type */}
          <div
            className="cursor-pointer flex justify-between items-center"
            onClick={() => toggleSubSection("identifyCaseType")}
          >
            <span>Identify Your Case Type</span>
            <span>{openSubSection === "identifyCaseType" ? "▾" : "▸"}</span>
          </div>
          {openSubSection === "identifyCaseType" && (
            <ul className="ml-4 mt-2">
              <Link href="/case-interview-basics/case-cracking-toolbox/identify-your-case-type/market-sizing">
                <li>✓ Market Sizing</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/identify-your-case-type/market-entry">
                <li>• Market Entry</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/identify-your-case-type/profitability-case">
                <li>✓ Profitability Cases</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/identify-your-case-type/growth-strategy">
                <li>• Growth Strategy</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/identify-your-case-type/ma">
                <li>• M&A Cases</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/identify-your-case-type/competitive-response">
                <li>• Competitive Response</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/identify-your-case-type/pricing">
                <li>• Pricing</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/identify-your-case-type/valuation">
                <li>• Valuation</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/identify-your-case-type/brainteaser">
                <li>• Brainteaser</li>
              </Link>
            </ul>
          )}
          {/* Structure Your Thoughts */}
          <div
            className="cursor-pointer flex justify-between items-center mt-4"
            onClick={() => toggleSubSection("structureThoughts")}
          >
            <span>Structure Your Thoughts</span>
            <span>{openSubSection === "structureThoughts" ? "▾" : "▸"}</span>
          </div>
          {openSubSection === "structureThoughts" && (
            <ul className="ml-4 mt-2">
              <Link href="/case-interview-basics/case-cracking-toolbox/structure-your-thoughts/issue-tree">
                <li>• Issue Tree</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/structure-your-thoughts/mece-principle">
                <li>• MECE Principle</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/structure-your-thoughts/pyramid-principle">
                <li>• Pyramid Principle</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/structure-your-thoughts/porters-five-forces">
                <li>• Porter's Five Forces</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/structure-your-thoughts/4c-framework">
                <li>• 4C Framework</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/structure-your-thoughts/4p-framework">
                <li>• 4P Framework</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/structure-your-thoughts/2x2-matrices-and-the-bcg-matrix">
                <li>• 2x2 Matrices and the BCG Matrix</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/structure-your-thoughts/the-stacey-matrix">
                <li>• The Stacey Matrix</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/structure-your-thoughts/influence-model">
                <li>• Influence Model</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/structure-your-thoughts/adkar-model">
                <li>• ADKAR Model</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/structure-your-thoughts/mckinsey-growth-pyramid">
                <li>• McKinsey Growth Pyramid</li>
              </Link>
            </ul>
          )}
          {/* Practice Your Basics */}
          <div
            className="cursor-pointer flex justify-between items-center mt-4"
            onClick={() => toggleSubSection("practiceBasics")}
          >
            <span>Practice Your Basics</span>
            <span>{openSubSection === "practiceBasics" ? "▾" : "▸"}</span>
          </div>
          {openSubSection === "practiceBasics" && (
            <ul className="ml-4 mt-2">
              <Link href="/case-interview-basics/case-cracking-toolbox/practice-your-basics/charts-and-data-in-case-interviews">
                <li>• Charts and Data in Case Interviews</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/practice-your-basics/why-math-matters">
                <li>• Why Math Matters</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/practice-your-basics/math-skills-required-in-case-interviews">
                <li>• Math Skills Required in Case Interviews</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/practice-your-basics/fast-math">
                <li>• Fast Math</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/practice-your-basics/important-facts">
                <li>• Important Facts</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/practice-your-basics/correlation-and-causality">
                <li>• Correlation and Causality</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/practice-your-basics/qualitative-and-quantitative-analysis">
                <li>• Qualitative and Quantitative Analysis</li>
              </Link>
              <Link href="/case-interview-basics/case-cracking-toolbox/practice-your-basics/roi-and-roas">
                <li>• ROI and ROAS</li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
