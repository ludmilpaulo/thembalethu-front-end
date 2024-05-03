"use client ";

import About from "../components/About";
import NavBar from "../components/NavBar";

const AboutPage = () => (
  <>
    <div className="hero-section-secondary">
      <NavBar />
      <div className="h-1 bg-[#16428f]"></div>
    </div>
    <div className="container px-6 py-14 mx-auto">
    <div className="text-center mb-16">
            <p className="block mb-2 text-lg font-semibold text-primary text-[#e20613]">
              Our Profile
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            About Thembalethu Solutions
            </h2>
            
          </div>
      <About />
    </div>
  </>
);

export default AboutPage;
