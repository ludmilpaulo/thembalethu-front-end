import {
  
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-[#16428e] dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
          {/* Other links remain the same */}
        </ul>
        <div className="flex items-center justify-between max-w-xs pt-8 mx-auto">
          <a
            href="https://twitter.com/ThembalethuSol2"
            className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.facebook.com/thembalethusa.co.za"
            className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FaFacebook size={20} />
          </a>
          <a
           href="https://www.linkedin.com/in/thembalethu-solutions-89282b221/"
            className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/thembalethu_solutions/"
            className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center pt-10 font-light text-center text-white dark:text-gray-200 sm:pt-12">
        Created by Maindo
      </div>
    </footer>
  );
};

export default Footer;
