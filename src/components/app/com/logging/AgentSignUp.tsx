import { Button, Checkbox, FormControlLabel } from "@mui/material";import TextField from "@mui/material/TextField";
export default function AgentSigning() {
  return (
    <main className=" flex justify-center items-center">
      <section className="w-[60%]  p-10  max-md:w-full max-md:p-0 flex flex-col items-center my-5 md:shadow-lg">
        <div className="p-5 m-5 border-b-[1px] w-3/4 max-md:w-[80%] text-center">
          <h1 className="text-3xl font-medium text-red-500">Sign Up</h1>
        </div>
        <form className="w-3/4 max-md:w-[80%] flex flex-col gap-5" >
          <TextField id="outlined-basic" label="Full Name" variant="outlined" required/>
          <TextField id="outlined-basic" label="Email" variant="outlined" required/>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            required
          />
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
            <Button variant="contained"  type="submit">Proceed</Button>
          </div>
        </form>
        <p className="my-5">Already have an account? <a href="Agent-signin" className="text-red-500 font-medium underline">Log in</a></p>
      </section>
    </main>
  );
}
