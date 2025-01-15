import React, { useCallback, useEffect, useState } from "react";

import EmployeeListItem from "./EmployeeListItem/EmployeeListItem";
import { deleteEmployee, getEmployeesList } from "../../Services/employees-api";

function EmployeeList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const list = await getEmployeesList();
    setLoading(false);
    setData(list);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = async (id) => {
    await deleteEmployee(id);
    fetchData();
  };

  const renderList = data.map((item) => (
    <EmployeeListItem
      key={item._id}
      {...item}
      onClick={() => handleClick(item._id)}
    />
  ));

  return (
    <div className="flex justify-center h-full border border-black">
      <div className="grid w-full h-full grid-cols-3 px-8 py-6 gap-y-16">
        {loading ? "Loading..." : renderList}
      </div>
    </div>
  );
}

export default EmployeeList;
