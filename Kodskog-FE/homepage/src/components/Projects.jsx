"use client";
import React from 'react';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#84735b]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Movie Flex'
            backgroundImg="/assets/projects/MovieFlex.png"
            projectUrl='/MovieFlex/Overview'
            tech='React JS'
          />
          <ProjectItem
            title='Smart Coffee Machine'
            backgroundImg="/assets/projects/SmartCoffee.png"
            projectUrl='/SmartCoffeeMachine/Overview'
            tech='Self-hosting, NodeRED, MQTT, Micropython, Docker'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
