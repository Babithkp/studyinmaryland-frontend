import { GrWorkshop } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa";
import { Button } from "../../../ui/button";
import { useState } from "react";
export default function SelectionLayout() {
  const [isAgentPressed, setIsAgentPressed] = useState(false);
  const [isStudenttPressed, setIsStudentPressed] = useState(false);

  const agentButttonHandler = () => {
    setIsAgentPressed(true);
    setIsStudentPressed(false);
  };
  const studentButttonHandler = () => {
    setIsStudentPressed(true);
    setIsAgentPressed(false);
  };

  const submitButtonhandler = () => {
    if (isStudenttPressed) {
      window.location.href = "applicationPortal";
    } else {
      window.location.href = "Agent-signup";
    }
  };

  return (
    <main className="flex items-center justify-center ">
      <section className="w-[50%] p-10 max-md:w-full gap-14 max-md:p-4 font-medium flex flex-col items-center">
        <h1 className="md:text-4xl font-semibold text-3xl text-center text-yellow-500">
          Join as an Ambassador or Student
        </h1>
        <div className="flex max-md:flex-col gap-8">
          <div
            className={`grid grid-cols-[10rem,2rem] p-5 grid-rows-[2rem,6rem] hover:bg-slate-50 rounded-lg border-[2px] gap-5 hover:border-blue-500 shadow-blue-500 hover:shadow-lg active:scale-95 duration-150 ${
              isAgentPressed ? "border-blue-500" : ""
            }`}
            onClick={agentButttonHandler}
          >
            <GrWorkshop className="w-[2rem] h-[2rem]" />
            {!isAgentPressed && (
              <FaRegCircle className="w-[2rem] h-[1.5rem] justify-self-end text-slate-400" />
            )}
            {isAgentPressed && (
              <div className="w-[1.5rem] h-[1.5rem] bg-blue-500 flex justify-center items-center rounded-full">
                <FaRegCircle className="justify-self-end text-white w-[1rem] h-[0.8rem]" />
              </div>
            )}
            <p className="text-lg ">
              I am an ambassador. (I can refer or recruit students)
            </p>
          </div>
          <div
            className={`grid grid-cols-[10rem,2rem] p-5 grid-rows-[2rem,7rem] hover:bg-slate-50 rounded-lg border-[2px] gap-5 hover:border-blue-500 shadow-blue-500 hover:shadow-lg active:scale-95 duration-150 ${
              isStudenttPressed ? "border-blue-500" : ""
            }`}
            onClick={studentButttonHandler}
          >
            <PiStudentBold className="w-[2rem] h-[2rem]" />
            {!isStudenttPressed && (
              <FaRegCircle className="w-[2rem] h-[1.5rem] justify-self-end text-slate-400" />
            )}
            {isStudenttPressed && (
              <div className="w-[1.5rem] h-[1.5rem] bg-blue-500 flex justify-center items-center rounded-full">
                <FaRegCircle className="justify-self-end text-white w-[1rem] h-[0.8rem]" />
              </div>
            )}
            <p className="text-lg ">
              I am a student. (I would like to apply for a scholarship and an
              admission)
            </p>
          </div>
        </div>
        <Button
          className={`bg-blue-500 rounded-lg `}
          disabled={!isAgentPressed && !isStudenttPressed && true}
          onClick={submitButtonhandler}
        >{` ${
          isAgentPressed
            ? "Apply as an Agent"
            : isStudenttPressed
            ? "Apply as a Student"
            : "Create an Account"
        }`}</Button>
      </section>
    </main>
  );
}
