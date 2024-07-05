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
