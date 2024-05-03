"use client ";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchData } from "../utils/sample-data";

interface Restaurant {
  id: number;
  name: string;
  phone: string;
  address: string;
  logo: string;
}

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);

  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const data = await fetchData("api/information/carousel/");
        const imageUrls = data.map((item) => item?.image);
        setImages(imageUrls);
      } catch (error) {
        // Handle error
        console.error("Error:", error);
      }
    };

    fetchCarouselData();
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [images]);

  return (
    <div className="relative">
      {images.length > 0 && (
        <Image
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="object-cover w-full h-[400px]"
          width={300}
          height={300}
          unoptimized={true} // To bypass domain check for external images
        />
      )}
    </div>
  );
};

export default Banner;
