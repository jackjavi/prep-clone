import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#122547] text-white py-8 md:min-h-[50vh] h-full w-full mb-4 flex flex-col md:text-xl text-lg">
      <div className=" flex md:flex-row flex-col px-4  md:h-[80%]">
        {/* Logo and Language Selector */}
        <div className="w-full mb-6 flex  justify-center">
          <h2 className="text-2xl font-bold mb-4">PREP CLONE</h2>
        </div>

        {/* About PREP CLONE */}
        <div className="w-full  mb-6 flex flex-col  ">
          <h3 className="font-semibold mb-4">About PREP CLONE</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                For Companies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                For Universities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                For Coaches
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Popular in Consulting */}
        <div className="w-full  mb-6 flex flex-col ">
          <h3 className="font-semibold mb-4">Popular in Consulting</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Case Library
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Meeting Board
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Mental Math Tool
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Case Interview Basics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Market Sizing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Case Interview
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Case Interview Coaching
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Consulting Q&A
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Consulting Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Consulting Employers */}
        <div className="w-full  mb-6 flex flex-col ">
          <h3 className="font-semibold mb-4">Consulting Employers</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Kearney
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Roland Berger
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                All Consulting Employers »
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-500 mt-8 pt-6">
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          <p className="text-sm">&copy; 2024 PREP CLONE</p>
          <ul className="flex space-x-4 text-sm">
            <li>
              <a href="#" className="hover:text-gray-400">
                Cookies & Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Imprint
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Sitemap
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="container mx-auto px-4 mt-4 text-sm text-gray-400">
          <p>Our servers are powered by electricity from renewable sources.</p>
        </div>
        <div className="container mx-auto px-4 mt-6 flex justify-end space-x-4">
          {/* Social media icons */}
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
