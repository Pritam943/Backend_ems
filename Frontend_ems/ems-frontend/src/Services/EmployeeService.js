import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployee = () => {
  return axios.get(REST_API_BASE_URL);
};

export const createEmployee = async (employee) => {
  try {
    const response = await axios.post(REST_API_BASE_URL, employee);
    return response;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};

export const getEmployee = (employeeId) =>
  axios.get(REST_API_BASE_URL + "/" + employeeId);

export const updateEmployee = (employeeId, emplpoyee) =>
  axios.put(REST_API_BASE_URL + "/" + employeeId, emplpoyee);

export const deleteEmployee = (employeeId) =>
  axios.delete(REST_API_BASE_URL + "/" + employeeId);
