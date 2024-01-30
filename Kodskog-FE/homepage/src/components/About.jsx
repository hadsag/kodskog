"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest justify-normal text-[#84735b]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <div className="py-2 text-gray-600">
          Hey there! I'm Hadi, a tech enthusiast on a journey through the tech universe. Since 2021, I've been on a relentless quest for innovative solutions and endless learning, to contribute to the sustainable advancement of technology and leave a tangible impact on the industry.          </div>

          <div className="py-2 text-gray-600">
          Along this exciting journey, I've ventured into diverse realms of the tech world, from crafting embedded systems and orchestrating elegant system architectures. I've explored the wonders of artificial intelligence and machine learning, delved into the intricacies of data management encompassing persistence, parallelization, and more, and navigated the complex world of computer science.          </div>

          <div className="py-2 text-gray-600">
          Collaboration is at the heart of tech development, and I take pride in being a team player with strong leadership skills as the situation demands. I value the input and ideas of my colleagues and work closely with stakeholders to ensure the successful project delivery.          </div>
          
          <div className="py-2 text-gray-600">
          To stay at the forefront of the ever-evolving field of computer science, I'm committed to continual learning. I stay updated with the latest trends and technologies through extensive reading, hands-on experimentation, and real-world applications.          </div>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="relative w-full h-auto shadow-xl shadow-gray-400 rounded-xl overflow-hidden">
          <div className="aspect-w-12 aspect-h-20">
            <Image
              src="http://elasticbeanstalk-eu-north-1-102471047009.s3-website.eu-north-1.amazonaws.com/public/assets/About.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
