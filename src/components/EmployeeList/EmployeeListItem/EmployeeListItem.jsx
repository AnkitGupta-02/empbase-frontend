import React from "react";
import Button from "../../Button/Button.jsx";
import { useNavigate } from "react-router-dom";

function EmployeeListItem({
  _id,
  name,
  email,
  mobile,
  designation,
  gender,
  course,
  url,
  createdAt,
  onClick,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create");
  };
  return (
    <div className="w-5/6 border shadow-md rounded-t-xl ">
      <div className="flex items-center justify-center w-full">
        <img src={url} className="rounded-t-lg " />
      </div>
      <div className="w-full px-4 py-4 font-medium text-gray-700">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Mobile: {mobile}</p>
        <p>Designation: {designation}</p>
        <p>Gender: {gender}</p>
        <p>Course: {course}</p>
        <p>Created_At: {createdAt}</p>
      </div>
      <div className="flex w-full py-2 justify-evenly">
        <Button
          onClick={handleClick}
          className="w-2/6 text-white bg-black rounded-md"
        >
          Edit
        </Button>
        <Button
          onClick={onClick}
          className="w-2/6 text-white bg-black rounded-md"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default EmployeeListItem;
