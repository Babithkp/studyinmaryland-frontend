import { Button, Checkbox, FormControlLabel } from "@mui/material";import TextField from "@mui/material/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userIpAddress: string;
}

export default function AgentSigning() {
  async function componentDidMount() {
    const response = await fetch("https://geolocation-db.com/json/");
    return await response.json();
  }

  const { register, handleSubmit, watch, formState: {errors}} = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);

    console.log(await componentDidMount());
  };
  return (
    <main className=" flex justify-center items-center">
      <section className="w-[60%]  p-10  max-md:w-full max-md:p-0 flex flex-col items-center my-5 md:shadow-lg">
        <div className="p-5 m-5 border-b-[1px] w-3/4 max-md:w-[80%] text-center">
          <h1 className="text-3xl font-medium text-red-500">Sign Up</h1>
        </div>
        <form
          className="w-3/4 max-md:w-[80%] flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            id="outlined-basic 1"
            label="Full Name"
            variant="outlined"
            type="text"
            required
            {...register("name")}
          />

          <TextField
            id="outlined-basic 2"
            label="Email"
            variant="outlined"
            required
            type="email"
            {...register("email")}
          />
          <TextField
            id="outlined-basic 3"
            label="Password"
            variant="outlined"
            type="text"
            required
            {...register("email")}
          />
          <TextField
            id="outlined-basic 4"
            label="Confirm Password"
            variant="outlined"
            type="password"
            required
            {...register("confirmPassword", {
              required: true,
              validate: (val: string) => {
                if (watch("password") !== val) {
                  console.log(watch("password") , val);
                  
                  return "The Password confirmation do not match";
                }
              },
            })}
          />
          {errors.confirmPassword && <span className="font-medium text-red-500">{errors.confirmPassword.message}</span>}
          <FormControlLabel
            required
            control={<Checkbox />}
            label="I agree to the Privacy Policy, Terms of Service and IP Policy."
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            label="Send me useful emails to help me get the most out of studyinmarylang.edu"
          />
          <div className="w-full flex justify-end">
            <Button variant="contained" type="submit">
              Proceed
            </Button>
          </div>
        </form>
        <p className="my-5">
          Already have an account?{" "}
          <a href="Agent-signin" className="text-red-500 font-medium underline">
            Log in
          </a>
        </p>
      </section>
    </main>
  );
}
