import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Accordion from "../Accordion";
import Loading from "../Loading";
import { createEmployee } from "../../Services/employees-api";
import useLoadingContext from "../../hooks/use-LoadingContext";

function CreateEmployeeForm() {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useLoadingContext();
  const [value, setValue] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: "",
    url: null,
  });
  const designationList = [
    { label: "HR" },
    { label: "Manager" },
    { label: "Sales" },
    { label: "Other" },
  ];
  const genderList = [{ label: "Male" }, { label: "Female" }];
  const CourseList = [{ label: "BCA" }, { label: "MCA" }, { label: "BSC" }];

  const handleChange = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleAccordionChange = (name, selectedItem) => {
    setValue((prev) => ({ ...prev, [name]: selectedItem.label }));
  };

  const handleFileChange = (event)=> {
    const file = event.target.files[0];
      setValue((prev) => ({ ...prev, url: file }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name",value.name);
    formData.append("email",value.email);
    formData.append("mobile",value.mobile);
    formData.append("designation",value.designation);
    formData.append("gender",value.gender);
    formData.append("course",value.course);
    formData.append("url",value.url);
       
    try {
      const response = await createEmployee(formData);
      
      if (response.status) {
        toast.success("Add Successful", { autoClose: 2000 });
        navigate("/employee-list");
      }
      setValue({
        name: "",
        email: "",
        mobile: "",
        designation: "",
        gender: "",
        course: "",
        url: null,
      });
    } catch (error) {
      toast.error(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center w-4/12 px-4 h-5/6 gap-y-4">
        <div className="w-full px-2">
          <h1 className="px-3 text-3xl font-medium text-gray-500">
            Add new employee details
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="w-full px-2 py-4 rounded-md ">
          <Input
            type="text"
            name="name"
            placeholder="full name"
            onChange={handleChange}
            value={value.name}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={value.email}
          />
          <Input
            type="tel"
            name="mobile"
            placeholder="Phone Number"
            onChange={handleChange}
            value={value.mobile}
          />
          <div className="flex flex-col px-3 py-1 gap-y-4">
            <Accordion
              name="designation"
              placeholder="Designation"
              list={designationList}
              onChange={handleAccordionChange}
            />
            <Accordion
              name="gender"
              placeholder="Gender"
              list={genderList}
              onChange={handleAccordionChange}
            />
            <Accordion
              name="course"
              placeholder="Course"
              list={CourseList}
              onChange={handleAccordionChange}
            />
          </div>
          <div className="">
            <Input
              type="file"
              name="url"
              placeholder="Image"
              onChange={handleFileChange}
              className=""
            />
            <p className="px-3 text-sm text-gray-400 ">
              Select your profile image .JPG
            </p>
          </div>
          <Button
            className={`text-lg border-none text-white rounded-md bg-[#2A2D34] flex items-center justify-center ${
              isLoading ? "cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? <Loading /> : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateEmployeeForm;
