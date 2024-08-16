import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <>
      <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
        {text}
      </button>
    </>
  );
};

export default PrimaryButton;
