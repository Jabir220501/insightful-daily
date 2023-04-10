import React from "react";

function ToggleSwitch(props) {
  return (
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="true" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        {props.label}
      </span>
    </label>
  );
}

export default ToggleSwitch;
