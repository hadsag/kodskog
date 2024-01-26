"use client";
import React from "react";
import RootLayout from "../../app/layout";
import Image from "next/image";

const SmartCoffeeContent = () => {
  return (
    <div id="projects" className="w-full">
      <div className="w-screen h-[20vh] relative">
        <div className="absolute top-0 left-0 w-full h-[20vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/SmartCoffee.png"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Smart Coffee Machine</h2>
          <h3> Docker / Hosting / MQTT / Micropython / NodeRED </h3>
        </div>
      </div>
      <div className="w-screen h-[80vh] relative">
        <iframe
          // src="/assets/projects/SmartCoffeeBlog.html"
          src="https://hackmd.io/@hadsag/Sk53vvxu3"
          className="w-full h-full absolute inset-0"
        />
      </div>
    </div>
  );
};

const SmartCoffee = () => {
  return (
    <RootLayout>
      <SmartCoffeeContent />
    </RootLayout>
  );
};

export default SmartCoffee;
