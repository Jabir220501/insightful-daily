import React from "react";

function FormInput(props) {
  return (
    <label htmlFor="email" className="flex flex-col mb-5 lg:mb-6">
      {props.label}
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="mt-1 p-4 rounded-xl text-sm text-cremeTxt"
        value={props.value}
        onChange={props.onChange}
        required
      />
    </label>
  );
}

export default FormInput;
