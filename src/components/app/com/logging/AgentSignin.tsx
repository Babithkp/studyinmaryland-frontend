import { Button, Checkbox, FormControlLabel } from "@mui/material";import TextField from "@mui/material/TextField";

export default function AgentLogin() {
  return (
    <main className=" flex justify-center items-center">
      <section className="w-[60%]  p-10  max-md:w-full max-md:p-0 flex flex-col items-center my-5 md:shadow-lg">
        <div className="p-5 m-5 border-b-[1px] w-3/4 max-md:w-[80%] text-center">
          <h1 className="text-3xl font-medium text-red-500">Sign In</h1>
        </div>
        <form className="w-3/4 max-md:w-[80%] flex flex-col gap-5" >
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
            label="Remember me"
            
          />
          
          <div className="w-full flex justify-end">
            <Button variant="contained"  type="submit">Proceed</Button>
          </div>
        </form>
        <p className="my-5">Don't have an account? <a href="Agent-signup" className="text-red-500 font-medium underline">Sign Up</a></p>
      </section>
    </main>
  )
}
