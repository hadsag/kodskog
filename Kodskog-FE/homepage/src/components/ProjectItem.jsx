"use client";
import Link from "next/link";
import React from "react";

// On touch devices there's no hover state, so we always show the overlay on mobile (md:hidden/md:block)
// and keep the hover-only behavior on desktop.
const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  openInNewTab = false,
}) => {
  const button = openInNewTab ? (
    <a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center py-3 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
    >
      Visit Website
    </a>
  ) : (
    <Link href={projectUrl}>
      <p className="text-center py-3 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
        More Info
      </p>
    </Link>
  );

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#84735b] to-[#a49382]">
      <img
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        width={1200}
        height={1600}
        alt={title}
      />

      {/* Desktop: show on hover only */}
      <div className="hidden md:group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]">
        <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        {button}
      </div>

      {/* Mobile: always visible bar at the bottom */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-sm">{title}</p>
          <p className="text-gray-300 text-xs">{tech}</p>
        </div>
        {openInNewTab ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 shrink-0 py-1 px-3 rounded-lg bg-white text-gray-700 font-bold text-sm"
          >
            Visit
          </a>
        ) : (
          <Link href={projectUrl}>
            <span className="ml-2 shrink-0 py-1 px-3 rounded-lg bg-white text-gray-700 font-bold text-sm">
              Info
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
