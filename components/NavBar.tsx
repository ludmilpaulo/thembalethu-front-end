import { IoClose, IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { fetchData } from "../utils/sample-data";
import logoLandscape from "../assets/thembalethu-logo-landscape-w400.png";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const [image, setImages] = useState<string | null>(null);
  const dataObj = Array.isArray(image) && image.length > 0 ? image[0] : null;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const data = await fetchData("api/information/about-us/");
        console.log("api data", data);
        setImages(data);
      } catch (error) {
        // Handle error
        console.error("Error:", error);
      }
    };

    fetchCarouselData();
  }, []);

  return (
    <nav className="relative flex items-center justify-between max-w-full px-6 py-4">
      <div className="flex items-center justify-start">
        <div className="mr-auto logo">
          <Link href="/">
            <Image
              src={logoLandscape}
              alt={dataObj?.title}
              // width={400}
              // height={83}
              className="h-[70px] w-[180px] cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="items-center flex-1">
        <div className="flex justify-end mr-10">
          {isMobileMenuOpen ? (
            <IoClose
              className="block md:hidden text-2xl "
              onClick={toggleMobileMenu}
            />
          ) : (
            <IoMenu
              className="block md:hidden text-2xl mt-[-11px] mr-[-20px]"
              onClick={toggleMobileMenu}
            />
          )}
          <div
            className={`md:flex md:justify-between lg:w-[40%] md:w-[75%] ${
              isMobileMenuOpen
                ? "block fixed right-0 top-0 bottom-0 bg-white px-12 pt-5"
                : "hidden"
            }`}
          >
            {isMobileMenuOpen && (
              <IoClose
                color="#e20613"
                className="block md:hidden text-2xl text-red-500 ml-[-30px]"
                onClick={toggleMobileMenu}
              />
            )}
            <Link
              className="flex items-center text-[#e20613] text-lg font-black"
              href={"/AboutPage"}
            >
              <span>About Us</span>
            </Link>

            <Link
              className="flex items-center text-[#e20613] text-lg font-black"
              href={"/ServicePage"}
            >
              <span>Services</span>
            </Link>

            <Link
              className="flex items-center text-[#e20613] text-lg font-black"
              href={"/Contactpage"}
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex space-x-4">
          {/* Example social media icons */}
          <a
            href="https://www.facebook.com/thembalethusa.co.za"
            className="text-[#1a3f85] text-lg"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-[#1a3f85] text-lg">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/thembalethusa.co.za"
            className="text-[#1a3f85] text-lg"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
