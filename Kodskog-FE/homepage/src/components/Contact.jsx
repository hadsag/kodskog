"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#84735b]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='lg:p-4 h-full '>
            <div>
              <h2 className='py-2'>Hadi Saghir</h2>
              <p className='py-4'>
                I am open for collaborations on intresseting projects and research and available for freelance. Contact
                me and let&apos;s talk.
              </p>
            </div>
            <div>
              <p className='uppercase pt-8'>Connect With Me</p>
              <p className='py-4'>
                You can directly contact me at hadisaghir@hotmail.com or connect on LinkedIn!
              </p>
              <div className='flex items-center justify-start py-4'>
                <a
                  href='https://www.linkedin.com/in/hadi-saghir/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/Hadi-Saghir'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>

                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <Link href='/resume'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
