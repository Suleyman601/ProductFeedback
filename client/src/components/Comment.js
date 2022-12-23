import React from "react";
import profileImg1 from "../assets/user-images/image-elijah.jpg";

const Comment = () => {
  return (
    <div className="grid grid-cols-[40px_1fr] gap-x-4">
      <img
        src={profileImg1}
        width="40"
        className=" rounded-full"
        alt="Message Icon"
      />
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="font-bold text-navyBlue">Elijah Moss</p>
          <p>@hexagon.bestagon</p>
        </div>

        <p className="font-semibold text-blue">Reply</p>
      </div>
      <p className="text-gray col-span-2">
        Also, please allow styles to be applied based on system preferences. I
        would love to be able to browse Frontend Mentor in the evening after my
        device’s dark mode turns on without the bright background it currently
        has.
      </p>
    </div>
  );
};

export default Comment;
