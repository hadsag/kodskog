"use client";
import Link from "next/link";
import React from "react";

// Titles are long academic names — we truncate the category prefix into a badge
// and show the rest as the title to improve scannability.
const ArticleItem = ({ title, articleUrl, openInNewTab = false }) => {
  // Split "Category: Title" into badge + title if a colon is present
  const colonIdx = title.indexOf(":");
  const category = colonIdx !== -1 ? title.slice(0, colonIdx).trim() : null;
  const displayTitle = colonIdx !== -1 ? title.slice(colonIdx + 1).trim() : title;

  const content = (
    <>
      {category && (
        <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-wider text-[#84735b] bg-[#f0ece7] px-2 py-0.5 rounded">
          {category}
        </span>
      )}
      <p className="text-base font-medium text-gray-800 leading-snug group-hover:text-[#84735b] transition-colors duration-200">
        {displayTitle}
      </p>
    </>
  );

  const baseClass =
    "group block border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 hover:border-[#c3bcab]";

  return openInNewTab ? (
    <a href={articleUrl} target="_blank" rel="noopener noreferrer" className={baseClass}>
      {content}
    </a>
  ) : (
    <Link href={articleUrl} className={baseClass}>
      {content}
    </Link>
  );
};

export default ArticleItem;
