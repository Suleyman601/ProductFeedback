import React from "react";

const Tag = (props) => {
  return (
    <div className="rounded-lg px-4 py-2 inline-block bg-gray-300 text-blue bg-lightIndigo hover:bg-blue hover:text-white font-bold text-[13px]">
      {props.tagName}
    </div>
  );
};

export default Tag;
