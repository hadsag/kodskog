import Link from "next/link";
import React from "react";

const ArticleItem = ({ title, articleUrl, openInNewTab = false }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-4 hover:border-gray-300">
      {openInNewTab ? (
        <a
          href={articleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-blue-500 hover:underline"
        >
          {title}
        </a>
      ) : (
        <Link href={articleUrl}>
          <p className="text-xl font-semibold text-blue-500 hover:underline">
            {title}
          </p>
        </Link>
      )}
    </div>
  );
};

export default ArticleItem;
