import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeeListItem from "./EmployeeListItem/EmployeeListItem";
import { deleteEmployee, getEmployeesList } from "../../Services/employees-api";
import useLoadingContext from "../../hooks/use-LoadingContext";
import useSharedDataContext from "../../hooks/use-SharedDataContext";
import Button from "../Button/Button";

function EmployeeList() {
  const navigate = useNavigate();
  const {isLoading, setIsLoading} = useLoadingContext();
  const {setEmpData} = useSharedDataContext()
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const list = await getEmployeesList();
    setIsLoading(false);
    setData(list);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDeleteEmployee = async (id) => {
    await deleteEmployee(id);
    fetchData();
  };

  const handleEditEmployee = (item) => {
    setEmpData(item);
     navigate("/update-employee");
  };

  const config = [
    { label: "Image", render: (item) => <img src={item.url} className='w-20 h-20'/> },
    { label: "Name", render: (item) => item.name },
    { label: "Email_Id", render: (item) => item.email },
    { label: "Phone no.", render: (item) => item.mobile },
    { label: "Designation", render: (item) => item.designation },
    { label: "Course", render: (item) => item.course },
    { label: "Gender", render: (item) => item.gender },
    { label: "Created_At", render: (item) => item.createdAt },
    { label: "Action", render: (item)=> null, action: (item) => <th className="flex items-center justify-center">
      <Button onClick={()=>handleEditEmployee(item)}>Edit</Button>
      <Button onClick={()=>handleDeleteEmployee(item._id)}>Delete</Button>
    </th>}
  ];

  const keyFn = (item) => {
    return item._id;
  }

  return (
    <div className="h-screen border border-black">
     {isLoading ? "Loading..." : <EmployeeListItem data={data} config={config} keyFn={keyFn}/>}
    </div>
  );
}

export default EmployeeList;
