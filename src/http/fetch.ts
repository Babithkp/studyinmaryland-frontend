import axios from "axios";


const vercelUrl = "https://studyinmaryland-backend.vercel.app/api/";
// const localUrl = "http://localhost:3000/api/"

export const uploadsingleFile = async (file: unknown) => {
  await axios.post(`${vercelUrl}fileupload`, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const newUserregistration = async (file: unknown) => {
  return await axios.post(`${vercelUrl}newRegistration`, file);
};
export const newAgentCreation = async (file: unknown) => {
  return await axios.post(`${vercelUrl}createAgent`, file);
};
export const agentLogin = async (file: unknown) => {
  return await axios.post(`${vercelUrl}loginAgent`, file);
};

export const getAllStudents = async () => {
  return await axios.get(`${vercelUrl}getStudentData`);
};
export const getAllAgents = async () => {
  return await axios.get(`${vercelUrl}getAgentData`);
};
