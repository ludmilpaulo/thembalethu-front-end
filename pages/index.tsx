import React, { useEffect, useState } from "react";

import About from "../components/About";
import Banner from "../components/Banner";
import Client from "../components/Client";
import Footer from "../components/Footer";
import Head from 'next/head';
import Image from "next/image";
import { IoChatbubbleOutline } from "react-icons/io5";
import NavBar from "../components/NavBar";
import Script from 'next/script';
import ServicesSection from "../components/ServicesSection";
import constructionImage from '../assets/thembalethu-construction.jpg';
import electricalImage from '../assets/thembalethu-electrical.jpg';
import { fetchData } from "../utils/sample-data";
import solarImage from '../assets/thembalethu-solar.jpg';

//import background_logo from '../assets/Untitled.png'; // Adjust the path






interface AboutData {
  title: string;
  content: string;
  logo: string;
  client: string;
  background_logo: string;
}

const IndexPage = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  const openChat = () => setChatOpen(true);
  const closeChat = () => setChatOpen(false);

  const [aboutData, setAboutData] = useState<AboutData[] | undefined>();

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const data = await fetchData("api/information/about-us/");
        console.log("api data", data);
        setAboutData(data);
      } catch (error) {
        // Handle error
        console.error("Error:", error);
      }
    };

    fetchCarouselData();
  }, []);

  const firstPageInfo =
    Array.isArray(aboutData) && aboutData?.length > 0 ? aboutData[0] : null;


  return (
    <>
      <Head>
        <title>Thembalethu Solutions - Electrical Solutions</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Thembalethu Solutions offers top-quality electrical solutions for homes and businesses. Contact us for all your electrical needs." />
        <meta name="keywords" content="electrical solutions, electrical services, electricians, wiring, electrical projects" />
        <meta name="author" content="Thembalethu Solutions" />

        {/* Open Graph and Twitter Card tags for social sharing */}
        <meta property="og:title" content="Thembalethu Solutions - Electrical Solutions" />
        <meta property="og:description" content="Your trusted partner for electrical solutions. Contact us for all your electrical needs." />
        <meta property="og:image" content="https://ludmilpaulo.pythonanywhere.com/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ThembalethuSolutions" />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />

      </Head>


      <div className="flex flex-col min-h-screen">
        <div className="hero-section">
          <NavBar />
        </div>

        <div className="flex-grow">
          <div className="container px-5 pt-24 pb-6 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <h2 className="text-sm text-[rgba(22,66,143,1)] tracking-widest font-medium mb-1">Who We Are</h2>
              <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-red-600">About Thembalethu Solutions</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Thembalethu Solutions, founded in 2017, is a dynamic and forward-thinking electrical services company based in South Africa. With a strong commitment to excellence and a passion for innovation, Thembalethu Solutions has rapidly emerged as a prominent player in the electrical industry, offering a wide range of services to meet the diverse needs of its clients.</p>
            </div>

          </div>
          <button className="flex mx-auto mb-24 text-white bg-[rgba(22,66,143,1)] border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Our Profile</button>
        </div>

        <div className="w-full h-auto sm:h-custom">
          <Banner />
        </div>
        {/*<div className="px-2 sm:px-4">
          <Client />
         </div>*/}
        <div className="container px-5 pt-24 pb-6 mx-auto mt-24">
          <div className="flex flex-col text-center w-full mb-10">
            <h2 className="text-sm text-[rgba(22,66,143,1)] tracking-widest font-medium mb-1">Our Services</h2>
            <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-red-600">About Thembalethu Solutions</h1>
          </div>

        </div>


        <div className="text-gray-600 body-font">
          <div className="container px-5 pt-0 pb-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={constructionImage} alt="blog" width={400} height={400} />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 bg-red-600 rounded-lg text-center px-4 text-white">CONSTRUCTION</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-center">General Building</h1>
                    <p className="leading-relaxed mb-3">Elevate your space with our comprehensive range of services. From expert tiling and precision painting to flawless ceiling installation, seamless partitioning, and masterful carpentry, we transform your vision into reality.</p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-[#16428f] inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={electricalImage} alt="blog" width={400} height={400} />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 bg-red-600 rounded-lg text-center px-4 text-white">ELECTRICAL</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-center">Industrial & Residential</h1>
                    <p className="leading-relaxed mb-3">Explore our expertise in both residential and industrial electrical services. From powering homes with safety and reliability to optimizing industrial operations, our team delivers tailored solutions for every electrical need, ensuring efficiency and peace of mind.</p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-[#16428f] inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={solarImage} alt="blog" width={400} height={400} />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1 bg-red-600 rounded-lg text-center px-4">SOLAR</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3  text-center text-center text-gray-900">We Go Green</h1>
                    <p className="leading-relaxed mb-3">Unlock the power of sustainable energy with our solar services. From design to installation, we harness the sun's renewable energy to illuminate your path to a greener future, empowering you with efficient and eco-friendly solutions for your home or business.</p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-[#16428f] inline-flex items-center md:mb-2 lg:mb-0 text-center">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <Footer />

    </>
  );
};

export default IndexPage;
