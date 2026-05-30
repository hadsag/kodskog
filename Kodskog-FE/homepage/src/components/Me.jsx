"use client";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// About and Contact are logically both personal — grouping them under "Me"
// avoids two separate full-height sections and reduces scroll distance.
const Me = () => {
  return (
    <div id="me" className="w-full py-8">
      <div className="max-w-[1240px] mx-auto px-2">
        <p className="text-xl tracking-widest uppercase text-[#84735b]">Me</p>

        {/* About */}
        <h2 className="py-4">Hi, I'm <span className="text-[#84735b]">Hadi</span>! 👋</h2>
        <div className="space-y-3 text-gray-600">
          <p>
            I'm a Syrian-Swedish software developer based in Dublin, working at AWS on the Fault
            Injection Service team. I hold a B.Sc. in Computer Science from Malmö University,
            specializing in Computer Systems Development.
          </p>
          <p>
            When I'm not writing code, you'll find me enjoying fika ☕, playing football,
            volleyball, badminton, or ping pong, climbing walls, hiking trails, gaming, or binging
            a great movie or series. Always up for trying new activities!
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        <div className="shadow-xl shadow-gray-400 rounded-xl p-6">
          <p className="text-gray-600 mb-6">I'm open for collaborations on interesting projects and research. Get in touch on one of the following platforms!</p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/hadi-saghir/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/Hadi-Saghir" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
