import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetchData } from "../utils/sample-data";

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
    <nav className="relative flex items-center justify-between h-8 max-w-full p-6 bg-black h-34">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={dataObj?.logo}
            alt={dataObj?.title}
            width={40}
            height={40}
            className="w-32 mr-2 h-28"
          />
        </Link>
      </div>
      <div className="items-center hidden space-x-8 md:flex">
        <Link className="flex items-center text-white" href={"/AboutPage"}>
          <span>About Us</span>
        </Link>

        <Link
          className="flex items-center text-white"
          href={"/QuotePage"}
        >
          <span>Services</span>
        </Link>

      

        <Link
          className="flex items-center text-white"
          href={"/Contactpage"}
        >
          <span>Contact Us</span>
        </Link>
      </div>
      <div className="flex items-center md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white cursor-pointer"
        >
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} absolute top-0 left-0 w-64 h-screen bg-white z-10`}
      >
        <Link
          className="flex items-center p-4 text-black"
          href={"/AboutPage"}
        >
          <span>About Us</span>
        </Link>

        <Link
          className="flex items-center p-4 text-black"
          href={"/QuotePage"}
        >
          <span>Services</span>
        </Link>

        

        <Link
          className="flex items-center p-4 text-black"
          href={"/Contactpage"}
        >
          <span>Contact Us</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
