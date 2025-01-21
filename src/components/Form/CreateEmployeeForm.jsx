import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Accordion from "../Accordion";

function CreateEmployeeForm() {
  const [empValue, setEmpValue] = useState("");
  const designationList = [
    {label:"HR"},{label:"Manager"},{label:"Sales"},{label:"Other"},
  ];
  const genderList = [
    {label:"Male"},{label:"Female"}
  ];
  const CourseList = [
    {label:"BCA"},{label:"MCA"},{label:"BSC"}
  ];
  return (
    <div>
      <form>
        <Input type="text" name="name" />
        <Input type="email" name="email" />
        <Input type="tel" name="telephone" />
        <Accordion list={designationList} />
        <Accordion list={genderList}/>
        <Accordion list={CourseList} />
        <Input type="file" name="url" />
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default CreateEmployeeForm;
