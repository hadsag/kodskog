"use client";
import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import RootLayout from "../../app/layout";

const MovieFlexContent = () => {
  const movieFlexUrl = process.env.NEXT_PUBLIC_MOVIEFLEX_URL;
  return (
    <div id="projects" className="w-full">
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-black/70 z-10" />
        <img
          className="absolute z-1 w-full h-full object-cover"
          src="https://elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com/public/assets/projects/KodSkogLogo.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">KodSkog</h2>
          <h3> DevOps / Node / AWS  </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-6 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-800 mb-6">
            This website was built using NextJS (TypeScript). The KodSkog project was designed as a technical exercise to enhance my cloud deployment and web development skills, focusing specifically on AWS for hosting, CI/CD pipelines for automation, and Docker and Kubernetes for containerization and orchestration. The choice to upgrade the user interface with React was driven by the desire to improve the site’s functionality and user experience. This endeavor not only allowed me to practice deploying a scalable, efficient web application but also to create a platform showcasing diverse computer science topics, thus reflecting my journey and competencies in both cloud technologies and frontend development.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Hadi-Saghir/kodskog/tree/main/Kodskog-FE"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition duration-300 ease-in-out">
                Code
              </button>
            </a>
          </div>
          <p className="text-gray-800 mb-6">
          <br />
            As the KodSkog Keep I continously add projects and update this page.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-4">
            <p className="text-center font-bold pb-2 text-gray-800">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> TypeScript & JavaScript
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> HTML
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> Tailwind CSS
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> Node.JS (Next.JS)
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> Docker &
                Kubernetes
              </p>
              <p className="text-gray-600 flex items-center">
                <RiRadioButtonFill className="pr-2 text-blue-500" /> AWS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-blue-500">Back</p>
        </Link>
      </div>
    </div>
  );
};



export default function MovieFlex(){
  return (
    <RootLayout>
      <MovieFlexContent />
    </RootLayout>
  );
};