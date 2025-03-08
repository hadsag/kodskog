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
            I'm Hadi, a tech enthusiast. I've been on a relentless quest for endless learning.
          </div>

          <div className="py-2 text-gray-600">
            I'm working at Amazon Web Services as a software developer and graduated from Malmö University with B.Sc. in Computer Science with specialization in Computer Systems Development
          </div>

          <div className="py-2 text-gray-600">
            My interests in software development are multifaceted, with my latest focus being on Chaos Engineering. This involves intentionally introducing disturbances into systems to test their resilience and ensure they can withstand real-world scenarios.
          </div>

          <div className="py-2 text-gray-600">
            Outside of work, I love engaging and bonding with my peers and friends over fika (Swedish for coffee break), football, volleyball, badminton, hiking, gaming, music, watching great movies or series, and many other activities.
          </div>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="relative w-full h-auto shadow-xl shadow-gray-400 rounded-xl overflow-hidden">
          <div className="aspect-w-12 aspect-h-20">
            <img
              src="https://elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com/public/assets/About.jpg"
              className="rounded-xl"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                objectFit: 'cover' //or contain
              }}
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
