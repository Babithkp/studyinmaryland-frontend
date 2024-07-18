import {
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  useMediaQuery,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { newAgentCreation } from "../../../../http/fetch";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";

interface FormValues {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: number;
  confirmPassword: string;
  agentIpAddress: string;
  agentCountry: string;
}

export default function AgentSigning() {
  const [formState, setFormState] = useState({
    isLoading: false,
    isError: false,
    isSubmitted: false,
  });
  const [open, setOpen] = useState(false);
  const [checkboxStatus, setCheckboxStatus] = useState({
    firstCheckbox: false,
    secCheckbox: false,
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  async function componentDidMount() {
    const response = await fetch("https://geolocation-db.com/json/");
    return await response.json();
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleRedirect = () => {
    if (formState.isSubmitted) {
      window.location.href = "Agent-signin";
    } else {
      handleClose();
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setFormState((prev) => ({ ...prev, isLoading: true }));
    const ip = await componentDidMount();

    data.agentCountry = ip.country_name;
    data.agentIpAddress = ip.IPv4;

    try {
      const response = await newAgentCreation(data);

      if (!response.data.error) {
        setFormState((prev) => ({ ...prev, isLoading: false }));
        setFormState((prev) => ({ ...prev, isSubmitted: true }));
        setFormState((prev) => ({ ...prev, isError: false }));
        setOpen(true);
        reset();
        setCheckboxStatus({
          firstCheckbox: false,
          secCheckbox: false,
        });
      } else {
        setFormState((prev) => ({ ...prev, isLoading: false }));
        setFormState((prev) => ({ ...prev, isSubmitted: false }));
        setFormState((prev) => ({ ...prev, isError: true }));
        setOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className=" flex justify-center items-center">
      <section className="w-[60%]  p-10  max-md:w-full max-md:p-0 flex flex-col items-center my-5 md:shadow-lg">
        <div className="p-5 m-5 border-b-[1px] w-3/4 max-md:w-[80%] text-center">
          <h1 className="text-3xl font-medium text-red-500">Sign Up</h1>
        </div>
        <form
          className="w-3/4 max-md:w-[70%] flex flex-col gap-5"
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
            id="outlined-basic 1"
            label="Your Address"
            variant="outlined"
            type="text"
            required
            {...register("address")}
          />
          <TextField
            id="outlined-basic 1"
            label="Phone Number"
            variant="outlined"
            type="text"
            required
            {...register("phone")}
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
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && (
            <span className="font-medium text-sm text-red-500">
              This Field is Required with Minimum 8 Characters
            </span>
          )}
          <TextField
            id="outlined-basic 4"
            label="Confirm Password"
            variant="outlined"
            type="password"
            required
            {...register("confirmPassword", {
              required: true,
              validate: (val) =>
                val === watch("password") ||
                "The Password confirmation do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="font-medium text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
          <FormControlLabel
            onClick={() =>
              setCheckboxStatus((prev) => ({
                ...prev,
                firstCheckbox: !checkboxStatus.firstCheckbox,
              }))
            }
            required
            control={
              <Checkbox
                checked={checkboxStatus.firstCheckbox}
                className="absolute max-md:-top-3"
              />
            }
            label="I agree to the Privacy Policy, Terms of Service and IP Policy."
          />
          <FormControlLabel
            onClick={() =>
              setCheckboxStatus((prev) => ({
                ...prev,
                secCheckbox: !checkboxStatus.secCheckbox,
              }))
            }
            required
            control={
              <Checkbox
                checked={checkboxStatus.secCheckbox}
                className="absolute -top-3"
              />
            }
            label="Send me useful emails to help me get the most out of study in Maryland."
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
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={formState.isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle
            id="responsive-dialog-title"
            className="flex justify-center"
          >
            {formState.isSubmitted && (
              <div className="w-[5rem] h-[5rem] bg-green-500 rounded-full flex justify-center items-center ">
                <FaCheck className="w-full h-[3rem] text-white" />
              </div>
            )}
            {formState.isError && (
              <div className="w-[5rem] h-[5rem] bg-red-500 rounded-full flex justify-center items-center ">
                <RxCrossCircled className="w-full h-[3rem] text-white" />
              </div>
            )}
          </DialogTitle>
          <DialogContent className="w-full text-center ">
            {formState.isSubmitted && (
              <span className="text-lg font-semibold ">
                Signup successfully
              </span>
            )}
            {formState.isError && (
              <span className="text-lg font-semibold ">
                Registration Failed,try again
              </span>
            )}
            {formState.isSubmitted && (
              <DialogContentText>
                Now you can Sign in, Page will be redirect to sign In, click OK
              </DialogContentText>
            )}
            {formState.isError && (
              <DialogContentText>
                User Already exist,Try using Different email
              </DialogContentText>
            )}
          </DialogContent>
          <DialogActions disableSpacing={false}>
            <Button onClick={handleRedirect} autoFocus variant="contained">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </main>
  );
}
