import { SyntheticEvent, useEffect, useState } from "react";
import { GrWorkshop } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { getAllAgents, getAllStudents } from "../../http/fetch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { RiArrowUpSLine } from "react-icons/ri";
import { AccordionDetails } from "@mui/material";

interface Student {
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  town: string;
  state: string;
  country: string;
  dob: string;
  nationality: string;
  email: string;
  phone: string;
  residence: string;
  programType: string;
  studyProgram: string;
  courseStartMonth: string;
  courseStartYear: string;
  identityDocName: string;
  degreeDocName: string[];
  academicDocName: string[];
  credentailsDocName: string[];
  birthDocName: string;
  motivationDocName: string;
  ieltsDocName: string;
  englishDocName: string[];
  recommendationDocName: string;
}

interface Agent {
  name: string;
  email: string;
  agentIpAddress: string;
  agentCountry: string;
  password: string;
}

export default function AdminDashboard() {
  const [totalUserCount, setTotalUsercount] = useState({
    student: "0",
    agent: "0",
  });
  const [student, setstudent] = useState<Student[]>();
  const [agent, setAgent] = useState<Agent[]>();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault();
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    async function fetch() {
      try {
        const agentResponse = await getAllAgents();
        const studentResponse = await getAllStudents();

        if (agentResponse && studentResponse) {
          setAgent(agentResponse.data.agent);
          setstudent(studentResponse.data.student);
          setTotalUsercount({
            student: studentResponse.data.student.length,
            agent: agentResponse.data.agent.length,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);

  return (
    <main className="flex items-center justify-center gap-5 flex-col">
      <section className="w-[50%] p-10 max-md:w-full gap-14 max-md:p-4 font-medium flex flex-col items-center">
        <h1 className="md:text-4xl font-semibold text-3xl text-center text-yellow-500">
          Admin Dashboard
        </h1>
        <div className="flex max-md:flex-col gap-8">
          <div
            className={`flex flex-col w-[18rem] h-[10rem] p-5 hover:bg-slate-50 rounded-lg border-[2px] gap-5 hover:border-blue-500 shadow-blue-500 hover:shadow-lg active:scale-95 duration-150 `}
          >
            <p className="text-lg text-center">Total Agent Count</p>
            <div className="flex h-full w-full justify-evenly">
              <GrWorkshop className="w-[3rem] h-[3rem]" />
              <p className="text-4xl ">{totalUserCount.agent}</p>
            </div>
          </div>
          <div
            className=" flex flex-col w-[18rem] h-[10rem] p-5  hover:bg-slate-50 rounded-lg border-[2px] gap-5 hover:border-blue-500 shadow-blue-500 hover:shadow-lg active:scale-95 duration-150 ${
                "
          >
            <p className="text-lg text-center">Total Student Count</p>
            <div className="flex h-full w-full justify-evenly">
              <PiStudentBold className="w-[3rem] h-[3rem]" />
              <p className="text-4xl ">{totalUserCount.student}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <h2 className="text-lg font-semibold mb-3">Agent List</h2>
        {agent?.map((agent, i) => (
          <Accordion
            key={i}
            expanded={expanded === `agent${i}`}
            onChange={handleChange(`agent${i}`)}
          >
            <AccordionSummary
              expandIcon={<RiArrowUpSLine />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              className="max-md:w-[20rem]"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {agent.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="md:w-[70rem]">
                Name: {agent.name}
              </Typography>
              <Typography className="md:w-[70rem]">
                Email: {agent.email}
              </Typography>
              <Typography className="md:w-[70rem]">
                IPv4: {agent.agentIpAddress}
              </Typography>
              <Typography className="md:w-[70rem]">
                Country: {agent.agentCountry}
              </Typography>
              <Typography className="md:w-[70rem]">
                Password: {agent.password}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </section>
      <section className="my-5">
        <h2 className="text-lg font-semibold mb-3">Student List</h2>
        {student?.map((stud, i) => (
          <Accordion
            key={i}
            expanded={expanded === `student${i}`}
            onChange={handleChange(`student${i}`)}
          >
            <AccordionSummary
              expandIcon={<RiArrowUpSLine />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              className="max-md:w-[20rem]"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {stud.firstName}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="md:w-[70rem]">
                Name: {stud.firstName} {stud.lastName}
              </Typography>
              <Typography className="md:w-[70rem]">
                Email: {stud.email}
              </Typography>
              <Typography className="md:w-[70rem]">
                Address: {stud.address}
              </Typography>
              <Typography className="md:w-[70rem]">
                Country: {stud.country}
              </Typography>
              <Typography className="md:w-[70rem]">
                Birth date: {stud.dob}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </section>
    </main>
  );
}
