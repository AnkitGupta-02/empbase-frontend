import axios from 'axios';
const baseURL = import.meta.env.VITE_API_BASE_URL ||'http://localhost:8080/api';

export const getEmployeesList = async (value={}) => {
    try {
        const response = await axios.get(`${baseURL}/employee/listing`,value,{withCredentials:true});
        return response.data.employeeList;
    } catch (error) {
        console.error("there was an error to fetch the list", error);
    }
}

export const deleteEmployee = async (id) => {
    try {
        const response = await axios.delete(`${baseURL}/employee/${id}`,{withCredentials:true});
        return response;
    } catch (error) {
        console.error("there was an error to delete employee data ", error);
    }
}