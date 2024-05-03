import { FaFacebook, FaGithub, FaReddit } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { fetchData } from '../utils/sample-data';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  facebook: string;
  linkedin: string;
  skype: string;
  instagram: string;
  image: string;
}

const Team: React.FC = () => {
  const [aboutData, setAboutData] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await fetchData("api/information/team/");
        console.log("api data", data);
        setAboutData(data);
      } catch (error) {
        // Handle error
        console.error("Error:", error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Executive Team</h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            At Thembalethu Solutions, we offer a comprehensive suite of electrical services for residential, commercial, and industrial clients. Our team of skilled professionals provides high-quality workmanship, adheres to industry standards, and delivers reliable and sustainable solutions.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.map((teamMember) => (
              <div key={teamMember.id} className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#16428f] dark:border-gray-700 dark:hover:border-transparent">
                <div className="relative rounded-full ring-4 ring-gray-300">
                  <Image src={teamMember.image} alt={teamMember.name} width={100} height={100} />
                </div>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  {teamMember.name}
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  {teamMember.title}
                </p>

                <div className="flex mt-3 -mx-2">
                  <a href={teamMember.facebook} className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                    <FaFacebook size={24} />
                  </a>

                  {/* Include links for other social platforms if available in the response data */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
