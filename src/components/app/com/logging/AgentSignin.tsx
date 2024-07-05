import {  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { agentLogin } from "../../../../http/fetch";
import { useState } from "react";
interface FormValues {
  email: string;
  password: string;
}

export default function AgentLogin() {
  const [wrongPass, setWrongPass] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setWrongPass(false);
    setError(false);
    setLoading(true);
    try {
      const response = await agentLogin(data);
      if (response.data.wrongPassword) {
        setLoading(false);
        setWrongPass(true);
      } else if (response.data.admin) {
        setLoading(false);
        window.location.href = "admin-dashboard";
      } else if (response.data.message) {
        window.location.href = "agent-dashboard";
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className=" flex justify-center items-center">
      <section className="w-[60%]  p-10  max-md:w-full max-md:p-0 flex flex-col items-center my-5 md:shadow-lg">
        <div className="p-5 m-5 border-b-[1px] w-3/4 max-md:w-[80%] text-center">
          <h1 className="text-3xl font-medium text-red-500">Sign In</h1>
        </div>
        <form
          className="w-3/4 max-md:w-[80%] flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            id="outlined-basic 1"
            label="Email"
            type="email"
            variant="outlined"
            required
            {...register("email")}
          />
          <TextField
            id="outlined-basic 2"
            label="Password"
            variant="outlined"
            type="password"
            required
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && (
            <span className="font-medium text-red-500">
              This Field is Required with Minimum 8 Characters
            </span>
          )}
          {wrongPass && (
            <span className="font-medium text-red-500">
              Wrong password, try again
            </span>
          )}
          {isError && (
            <span className="font-medium text-red-500">
              Something went wrong, try again
            </span>
          )}
          <FormControlLabel control={<Checkbox />} label="Remember me" />

          <div className="w-full flex justify-end">
            <Button variant="contained" type="submit">
              Proceed
            </Button>
          </div>
        </form>
        <p className="my-5">
          Don't have an account?{" "}
          <a href="Agent-signup" className="text-red-500 font-medium underline">
            Sign Up
          </a>
        </p>
      </section>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </main>
  );
}
