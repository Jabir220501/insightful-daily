import React from "react";

function DropdownOptions() {
  return (
    <li>
      <div class="flex items-center p-2 rounded hover:bg-gray-100">
        <input
          id="filter-radio-example-1"
          type="radio"
          value=""
          name="filter-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
        />
        <label
          for="filter-radio-example-1"
          class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
        >
          Last day
        </label>
      </div>
    </li>
  );
}

export default DropdownOptions;
