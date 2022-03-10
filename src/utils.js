import axios from "axios";

// In this folder we will perform all the functions of CRUD requests

const getAllData = (url) => axios.get(url);
const getById = (url) => axios.get(url);
const addUser = (url, obj) => axios.post(url, obj);
const updateUser = (url, id, obj) => axios.put(`${url}/${id}`, obj);
const deleteUser = (url, id) => axios.delete(`${url}/${id}`);

// Export all the functions we created
export { getAllData, getById, addUser, updateUser, deleteUser };
