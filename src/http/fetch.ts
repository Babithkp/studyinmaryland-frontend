import axios from "axios";
const vercelUrl = import.meta.env.VITE_BACKEND_URL;
// const localUrl = "http://localhost:3000/api/"

export const uploadsingleFile = async (file: unknown) => {
  await axios.post(`${vercelUrl}fileupload`, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const newUserregistration = async (file: unknown) => {
  return await axios.post(`${vercelUrl}api/newRegistration`, file);
};
export const newAgentCreation = async (file: unknown) => {
  return await axios.post(`${vercelUrl}api/createAgent`, file);
};
export const agentLogin = async (file: unknown) => {
  return await axios.post(`${vercelUrl}api/loginAgent`, file);
};

export const getAllStudents = async () => {
  return await axios.get(`${vercelUrl}api/getStudentData`);
};
export const getAllAgents = async () => {
  return await axios.get(`${vercelUrl}api/getAgentData`);
};
export const getAgentsById = async (id: unknown) => {
  return await axios.post(`${vercelUrl}api/getSingleAgentById`, id);
};
export const getUserDetailsByAgentId = async (id: unknown) => {
  return await axios.post(`${vercelUrl}api/getUserDetailsByAgentId`, id);
};
export const updateAgentProfileImg = async (data: unknown) => {
  return await axios.post(`${vercelUrl}api/updateAgentProfileImg`, data);
};
