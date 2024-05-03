"use client ";

import React, { useEffect, useState } from "react";

import Team from "./Team";
import { fetchData } from "../utils/sample-data";
import { motion } from "framer-motion";

interface AboutData {
  title: string;
  content: string;
  logo: string;
  client: string;
  background_logo: string;
}

function About() {
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center justify-center h-screen px-6 mx-auto text-center md:text-left md:flex-row max-w-7xl md:mb-10"
        style={{
          background: `url(${firstPageInfo?.background_logo})`,
          backgroundSize: "cover",
        }}
      >
        <motion.img
          initial={{
            x: -200,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={firstPageInfo?.logo}
          className="object-cover rounded-full md:rounded-lg"
          alt="About Us"
        />
        <div className="px-0 md:px-10 md:w-1/2 flex flex-col justify-center">
          <h4 className="hidden text-4xl font-semibold">{firstPageInfo?.title}</h4>
          <p
            className="text-lg  text-gray-500 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: firstPageInfo?.content }}
          />
        </div>
      </motion.div>
      <div className="border-b border-solid border-gray-300"></div>
      <Team />
    </>
  );
}

export default About;
