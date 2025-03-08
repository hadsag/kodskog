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
        <h2 className='py-4'>What I&apos;ve Worked on</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='AWS FIS'
            backgroundImg="https://elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com/public/assets/projects/FIS.png"
            projectUrl='https://aws.amazon.com/fis/'
            tech='SDE '
            openInNewTab
          />
        <ProjectItem
            title='Model Compression'
            backgroundImg="https://elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com/public/assets/projects/McHuggingface.png"
            projectUrl='https://huggingface.co/hadsag'
            tech='Capstone Project '
            openInNewTab
          />
        <ProjectItem
            title='Fyaril'
            backgroundImg="https://elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com/public/assets/projects/Fyaril.png"
            projectUrl='/projects/FyarilSearchEngine'
            tech=' Internship '
          />
          <ProjectItem
            title='The Digital Hub'
            backgroundImg="https://elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com/public/assets/projects/DigiMentors.png"
            projectUrl='https://digimentor.uni.mau.se'
            tech=' Student Job '
            openInNewTab
          />
          <ProjectItem
            title='Smart Coffee Machine'
            backgroundImg="https://elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com/public/assets/projects/SmartCoffeeImg.png"
            projectUrl='/projects/SmartCoffeeMachine'
            tech=' University Project '
          />
          <ProjectItem
            title='MovieFlex'
            backgroundImg="https://elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com/public/assets/projects/MovieFlexImg.png"
            projectUrl='/projects/MovieFlex'
            tech=' University Project '
          />
          <ProjectItem
            title='KodSkog'
            backgroundImg="https://elasticbeanstalk-eu-north-1-102471047009.s3.eu-north-1.amazonaws.com/public/assets/projects/KodSkogLogo.png"
            projectUrl='/projects/KodSkog'
            tech=' Personal Project '
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
