// ServicePage.tsx

import React, { useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import { fetchData } from "../utils/sample-data";
import { useRouter } from "next/router";

interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ServicePage: React.FC = () => {
  const [serviceData, setServiceData] = useState<Service[] | null>(null);
  const router = useRouter();

  const handleGetQuote = (serviceId: number) => {
    router.push(`/quote?serviceId=${serviceId}`);
  };

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const data = await fetchData("api/services/services/");
        setServiceData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchServiceData();
  }, []);

  return (
    <>
      <div className="hero-section-secondary">
        <NavBar />
        <div className="h-1 bg-[#16428f]"></div>
      </div>

      <div className="my-10 text-center max-w-xl mx-auto">
        <span className="block mb-2 text-lg font-semibold text-primary text-[#e20613]">
          Our Core Services
        </span>
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl text-dark">
          What We Offer
        </h2>
        <p className="text-base text-body-color">
          At Thembalethu Solutions, we offer a comprehensive suite of electrical
          services for residential, commercial, and industrial clients. Our team
          of skilled professionals provides high-quality workmanship, adheres to
          industry standards, and delivers reliable and sustainable solutions.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-4/5">
          {serviceData?.map((service, index) => (
            <div
              key={service.id}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 p-4">
                <img
                  src={service.image}
                  alt="Service Image"
                  className="rounded-lg"
                />
              </div>
              <div className="w-1/2 p-4">
                <h1 className="text-3xl font-bold">{service.name}</h1>
                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                ></p>
                <button
                  onClick={() => handleGetQuote(service.id)}
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicePage;
