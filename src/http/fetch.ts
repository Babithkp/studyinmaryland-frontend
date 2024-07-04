import axios from "axios";
const vercelUrl = "https://studyinmaryland-backend.vercel.app/api/fileupload";
// const localUrl = "http://localhost:3000/api/fileupload"

export const uploadsingleFile = async (file: unknown) => {
  
  const response = await axios.post(`${vercelUrl}`, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response);
};
