import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/sample-data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from 'next/router';

interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

function ServicesSection() {
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
    <section className="py-10 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <span className="block mb-2 text-lg font-semibold text-primary">
            Our Core Services
          </span>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl text-dark">
            What We Offer
          </h2>
          <p className="text-base text-body-color">
            At Thembalethu Solutions, we offer a comprehensive suite of
            electrical services for residential, commercial, and industrial
            clients. Our team of skilled professionals provides high-quality
            workmanship, adheres to industry standards, and delivers reliable
            and sustainable solutions.
          </p>
        </div>

        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={30}  // Adjust the card width (smaller value)
          useKeyboardArrows={true}
        >
          {serviceData?.map((service) => (
            <div key={service.id} className="px-2 sm:px-4 md:px-6 lg:px-8"> {/* Adjust padding */}
              <div
                className="relative p-4 mb-8 bg-white rounded-lg shadow-md hover:shadow-lg"
                style={{
                  background: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h4 className="mb-3 text-xl font-semibold text-dark">
                  {service.name}
                </h4>
                <p className="text-black">{service.description}</p>
                <br></br>
                <br></br>
                <br></br>
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-4">
                  <button
                    className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                    onClick={() => handleGetQuote(service.id)}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default ServicesSection;
