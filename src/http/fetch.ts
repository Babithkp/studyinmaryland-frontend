import axios from "axios";


// const vercelUrl = "https://studyinmaryland-backend.vercel.app/api/";
const localUrl = "http://localhost:3000/api/"

export const uploadsingleFile = async (file: unknown) => {
  await axios.post(`${localUrl}fileupload`, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const newUserregistration = async (file: unknown) => {
  return await axios.post(`${localUrl}newRegistration`, file);
};
export const newAgentCreation = async (file: unknown) => {
  return await axios.post(`${localUrl}createAgent`, file);
};
export const agentLogin = async (file: unknown) => {
  return await axios.post(`${localUrl}loginAgent`, file);
};

export const getAllStudents = async () => {
  return await axios.get(`${localUrl}getStudentData`);
};
export const getAllAgents = async () => {
  return await axios.get(`${localUrl}getAgentData`);
};
export const getAgentsById = async (id:unknown) => {
  return await axios.post(`${localUrl}getSingleAgentById`,id);
};
export const getUserDetailsByAgentId = async (id:unknown) => {
  return await axios.post(`${localUrl}getUserDetailsByAgentId`,id);
};
export const updateAgentProfileImg = async (data:unknown) => {
  return await axios.post(`${localUrl}updateAgentProfileImg`,data);
};
