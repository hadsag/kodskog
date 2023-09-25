"use client";
import React from "react";
import RootLayout from "../../app/layout";


const SmartCoffeeContent = () => {
  return (
    <div id="projects" className="w-full">
      <div className="w-screen h-screen relative">
        <iframe src="/assets/projects/SmartCoffeeBlog.html" 
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
