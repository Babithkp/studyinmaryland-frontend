import axios from "axios";
// const vercelUrl = import.meta.env.VITE_BACKEND_URL;
const localUrl = "http://localhost:3000/"

export const uploadsingleFile = async (file: unknown) => {
  await axios.post(`${localUrl}api/fileupload`, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const newUserregistration = async (file: unknown) => {
  return await axios.post(`${localUrl}api/newRegistration`, file);
};
export const newAgentCreation = async (file: unknown) => {
  return await axios.post(`${localUrl}api/createAgent`, file);
};
export const agentLogin = async (file: unknown) => {
  return await axios.post(`${localUrl}api/loginAgent`, file);
};

export const getAllStudents = async () => {
  return await axios.get(`${localUrl}api/getStudentData`);
};
export const getAllAgents = async () => {
  return await axios.get(`${localUrl}api/getAgentData`);
};
export const getAgentsById = async (id: unknown) => {
  return await axios.post(`${localUrl}api/getSingleAgentById`, id);
};
export const getUserDetailsByAgentId = async (id: unknown) => {
  return await axios.post(`${localUrl}api/getUserDetailsByAgentId`, id);
};
export const updateAgentProfileImg = async (data: unknown) => {
  return await axios.post(`${localUrl}api/updateAgentProfileImg`, data);
};
