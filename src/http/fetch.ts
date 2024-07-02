import axios from "axios";
export const postFile = async (file: unknown) => {
  console.log(file);

  const response = await axios.post("http://localhost:3000/", file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response);
};
