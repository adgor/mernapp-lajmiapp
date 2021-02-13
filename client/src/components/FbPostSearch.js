import React, { useState } from "react";

const FbPostSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };

  return (
    <div className=" max-w-4xl rounded overflow-hidden my-14 mx-auto">
      <form onSubmit={onSubmit} className=" w-full max-w-4xl">
        <div className=" flex items-center  border-b-2 border-indigo-500 py-2 ">
          <input
            onChange={(e) => setText(e.target.value)}
            className=" appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Fan page, titul apo date"
          />

          <button
            type="submit"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Kerko
          </button>
        </div>
      </form>
    </div>
  );
};

export default FbPostSearch;
