import axios from "axios";
const baseURL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

export const getEmployeesList = async (value = {}) => {
  const response = await axios.get(`${baseURL}/employee/listing`, value, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data.employeeList;
};

export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${baseURL}/employee/${id}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
