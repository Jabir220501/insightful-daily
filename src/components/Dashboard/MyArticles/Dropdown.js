import React from "react";
import DropdownOptions from "./DropdownOptions";

function Dropdown() {
  return (
    <div>
      <div>
        <button
          class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          <svg
            class="w-4 h-4 mr-2 text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Last 30 days
          <svg
            class="w-3 h-3 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <ul class="p-3 space-y-1 text-sm text-gray-700">
            <DropdownOptions />
            <DropdownOptions />
            <DropdownOptions />
          </ul>
        </div>
      </div>
      <label for="table-search" class="sr-only">
        Search
      </label>
    </div>
  );
}

export default Dropdown;
