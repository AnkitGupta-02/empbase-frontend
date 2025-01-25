import axios from "axios";
const baseURL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

export const createEmployee = async (value = {}) => {
  const response = await axios.post(
    baseURL + "/employee/create",
    value,
    {
      withCredentials: true,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};

export const getEmployeesList = async () => {
  const response = await axios.get(baseURL + "/employee/listing", {
    withCredentials: true,
  });
  return response.data.employeeList;
};

export const updateEmployee = async (id, value = {}) => {
  const response = await axios.put(baseURL + "/employee/" + id, value, {
    withCredentials: true,
  });
  return response;
};

export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${baseURL}/employee/${id}`, {
    withCredentials: true,
  });
  return response;
};
