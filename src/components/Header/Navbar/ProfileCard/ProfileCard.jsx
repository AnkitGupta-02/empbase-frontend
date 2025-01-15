import React from "react";

function ProfileCard({ name, username }) {
  return (
    <div className="absolute w-[400px] top-10">
      <div className="w-full h-full bg-white rounded-3xl">
        <div>{name}</div>
        <div>{username}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
