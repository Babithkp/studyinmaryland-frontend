import { useParams } from "react-router-dom";
import defaultImage from "/deafultProfile.jpg";
import { SyntheticEvent, useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Backdrop,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Button } from "../ui/button";
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { getAgentsById, getUserDetailsByAgentId } from "../../http/fetch";
import { RiArrowUpSLine } from "react-icons/ri";

interface AgentType {
  name: string;
  email: string;
  referralCode: string;
  referredStudent: string;
  profileImageUrl: string;
}
interface Students {
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
  birthDocName: string;
  motivationDocName: string;
  ieltsDocName: string;
  englishDocName: string[];
  recommendationDocName: string;
  referralCode: string;
}

export default function AgentDashboard() {
  const [agentDetails, setAgentDeatils] = useState<AgentType>();
  const [studentDetails, setStudentDeatils] = useState<Students[]>();
  const [isUploading, setIsUploading] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [expanded, setExpanded] = useState<string | false>(false);
  const params = useParams();

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault();
      setExpanded(isExpanded ? panel : false);
    };

  const copyClipHandler = () => {
    const text = `https://studyinmaryland.vercel.app/Scholarships?referral=${agentDetails?.referralCode}`;
    setIsCopying(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setIsCopying(false);
    }, 2000);
  };

  useEffect(() => {
    setIsUploading(false);
    const fetch = async () => {
      if (params.id) {
        const agentResponse = await getAgentsById({ id: params.id });
        const studentResponse = await getUserDetailsByAgentId({
          id: params.id,
        });
        if (agentResponse) {
          if (agentResponse.data.error) {
            window.location.href = "/";
          } else {
            setAgentDeatils(agentResponse.data.agent);
          }
        }
        if (studentResponse) {
          setStudentDeatils(studentResponse.data);
        }
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="w-[90%] gap-16 flex max-md:flex-col justify-center items-center p-10 max-md:w-full max-md:p-4">
        <div className="relative h-[12rem] w-[12rem] md:mb-16">
          {/* {Error && <p className="text-sm text-red-500 ">{Error}</p>} */}
          <img
            src={defaultImage}
            alt="profile Image "
            className="h-full w-full rounded-full  drop-shadow-lg "
            width={300}
            height={300}
          />

          <div className="flex flex-col items-center">
            <input
              type="file"
              className="hidden"
              accept="image/png, image/gif, image/jpeg"
            />
            <p className="cursor-pointer text-white hover:text-blue-500 bg-blue-400 m-2 p-2 rounded-xl">
              Change Photo
            </p>
          </div>
        </div>
        <div className="w-fit max-md:w-full border  border-blue-400 bg-white p-4 text-lg mb-10 rounded-xl drop-shadow-lg">
          <h3 className="text-lg font-semibold uppercase text-slate-400">
            User Info
          </h3>
          <div className="flex flex-col gap-3 ">
            <p className="font-semibold">
              Name: <span className="font-medium">{agentDetails?.name}</span>
            </p>
            <p className="font-semibold">
              Email: <span className="font-medium">{agentDetails?.email}</span>
            </p>
            <h3 className="text-lg font-semibold uppercase text-slate-400">
              Referral url
            </h3>
            <div className="flex w-full  h-full border-[2px] rounded-md gap-3    bg-slate-50">
              <p className="ml-1  overflow-scroll">
                https://studyinmaryland.vercel.app/Scholarships?referral=
                {agentDetails?.referralCode}
              </p>
              <Button
                variant={"ghost"}
                className="border-[2px] active:scale-95"
              >
                {!isCopying && (
                  <FaRegCopy size={24} onClick={copyClipHandler} />
                )}
                {isCopying && <FaCheck size={24} className="text-green-500" />}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <h2 className="text-lg font-semibold mb-3">Student List</h2>
        {studentDetails?.map((stud, i) => (
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

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isUploading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </main>
  );
}
