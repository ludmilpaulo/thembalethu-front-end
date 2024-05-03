import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { fetchData } from "../utils/sample-data";

type Restaurant = {
  id: number;
  title: string;
  logo: string;
};

type Restaurants = Restaurant[];

export default function Client() {
  const [clients, setClients] = useState<Restaurants>([]);
  const [isHovered, setIsHovered] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["100vw", "-100vw"],
        transition: { repeat: Infinity, duration: 10 },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const data = await fetchData("api/information/clients/");
        // const imageUrls = data.map((item) => item.image);
        setClients(data);
      } catch (error) {
        // Handle error
        console.error("Error:", error);
      }
    };

    fetchCarouselData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="px-0 space-y-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Our <span className="underline">Potential</span> Clients
          </h4>
        </div>
      </div>

      <div className="flex flex-row p-4 overflow-x-auto scroll-snap-x-mandatory">
        <motion.div
          animate={controls}
          className="flex flex-row overflow-x-auto scroll-snap-x-mandatory"
         // onMouseEnter={() => setIsHovered(true)}
        //  onMouseLeave={() => setIsHovered(false)}
        >
          {clients.map((restaurant: Restaurant) => (
            // eslint-disable-next-line react/jsx-key

            <div
              key={restaurant?.id}
              className="flex-none flex-shrink-0 scroll-snap-start"
            >
              <div className="flex flex-col items-center p-4 m-4 bg-white shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-xl">
                <Image
                  className="w-32 h-32 mb-4 rounded-full sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-64 lg:h-32 xl:w-32 xl:h-32"
                  width={300}
                  height={300}
                  src={restaurant?.logo}
                  alt={restaurant?.title}
                />
                <div className="text-xl font-medium text-black">
                  {restaurant?.title}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
