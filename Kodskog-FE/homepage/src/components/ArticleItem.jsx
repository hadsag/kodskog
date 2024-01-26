import Link from "next/link";
import React from "react";

const ArticleItem = ({ title, articleUrl, openInNewTab = false }) => {
  return (
    <div className="py-4">
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
