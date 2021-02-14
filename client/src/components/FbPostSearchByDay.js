import React, { useState } from "react";

const FbPostSearchByDay = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };

  return (
    <form onSubmit={onSubmit}>
      <input className=" hidden" onChange={(e) => setText(e.target.value)} />

      <button
        type="submit"
        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
      >
        Postimet e sotme
      </button>
    </form>
  );
};

export default FbPostSearchByDay;
