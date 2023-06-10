import React from "react";

type FormProps = {
  label: string;
  placeholder: string;
};

function IdeasForm({ label, placeholder }: FormProps) {
  return (
    <form className="bg-gray-600 p-8 rounded-md w-1/2 h-2/3 flex flex-col justify-evenly">
      <label
        htmlFor="prompt"
        className="block mb-4 text-lg font-medium text-white"
      >
        {label}
      </label>
      <textarea
        id="prompt"
        className="block w-full text-sm rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        rows={9}
      ></textarea>
      <button
        type="submit"
        className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default IdeasForm;