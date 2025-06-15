"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Paginator({ total }: { total: number }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page") || null);

  const updatePage = (page: string) => {
    if (page !== "..." && Number(page) !== currentPage) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(page));
      router.push(`?${params.toString()}`);
    }
  };

  const getPageNumbers = () => {
    const pages = [];

    if (currentPage <= 3 && total > 4) {
      for (let i = 1; i <= Math.min(5, total); i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(total);
    } else if (currentPage > 3 && currentPage < total - 2) {
      pages.push(1);
      pages.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      pages.push("...");
      pages.push(total);
    } else if (currentPage >= total - 2 && total > 4) {
      pages.push(1);
      pages.push("...");
      for (let i = total - 3; i <= total; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <>
      {currentPage === null ? null : (
        <nav>
          <ul className="fixed bottom-2 right-[50%] translate-x-[50%] flex items-center -space-x-px h-10 text-base">
            <li
              onClick={() => updatePage(String(currentPage - 1 || 1))}
              className="cursor-pointer flex items-center justify-center px-2 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </li>

            {pages.map((page, index) => {
              return (
                <li
                  key={index}
                  aria-current="true"
                  onClick={() => updatePage(String(page))}
                  className={` cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                    page === currentPage ? "font-bold" : ""
                  }`}
                >
                  {page}
                </li>
              );
            })}
            <li
              onClick={() =>
                updatePage(
                  currentPage + 1 > total
                    ? String(total)
                    : String(currentPage + 1)
                )
              }
              className="cursor-pointer flex items-center justify-center px-2 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
