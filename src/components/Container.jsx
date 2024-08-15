import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto p-4">
      {children}
    </div>
  );
};

export default Container;
