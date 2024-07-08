import { useParams } from "react-router-dom";
import defaultImage from "/deafultProfile.jpg";
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
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
import {
  getAgentsById,
  getUserDetailsByAgentId,
  updateAgentProfileImg,
  uploadsingleFile,
} from "../../http/fetch";
import { RiArrowUpSLine } from "react-icons/ri";
import { v4 } from "uuid";

interface AgentType {
  id: string;
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
}

export default function AgentDashboard() {
  const [agentDetails, setAgentDeatils] = useState<AgentType>();
  const [studentDetails, setStudentDeatils] = useState<Students[]>();
  const [isUploading, setIsUploading] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [expanded, setExpanded] = useState<string | false>(false);
  const [imageError, setImageError] = useState<string | null>();
  const [profileImageUrl, setProfileImageUrl] = useState<string>();
  const profileRef = useRef<HTMLInputElement>(null);
  const params = useParams();
  const formdata = new FormData();

  if (!sessionStorage.getItem("token")) {
    window.location.href = "/";
  }

  const originalUrl = `https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/${profileImageUrl}`;

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault();
      setExpanded(isExpanded ? panel : false);
    };

  const onChangeProfileCick = () => {
    profileRef.current?.click();
  };

  const onchangePic = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true);
    const files = event.target.files;
    if (files) {
      const file = files[0];

      const newId = v4() + file.name;
      formdata.append("files", file, newId);
      if (file.size > 5000000) {
        setImageError("File size is too large, (minimum sixe is 5Mb)");
        setIsUploading(false);
        return;
      } else {
        setImageError(null);
      }

      try {
        await uploadsingleFile(formdata);
        const updateResponse = await updateAgentProfileImg({
          id: agentDetails?.id,
          imageUrl: newId,
        });
        if (updateResponse) {
          setProfileImageUrl(newId);
          setIsUploading(false);
        }
      } catch (err) {
        setImageError("something went wrong,try again");
      }
    }
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
    const fetch = async () => {
      if (params.id) {
        const agentResponse = await getAgentsById({ id: params.id });
        const studentResponse = await getUserDetailsByAgentId({
          id: params.id,
        });
        if (agentResponse) {
          console.log(agentResponse);

          if (agentResponse.data.error) {
            window.location.href = "/";
          } else {
            setAgentDeatils(agentResponse.data.agent);
            setProfileImageUrl(agentResponse.data.agent.profileImageUrl);
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
          <img
            src={profileImageUrl ? originalUrl : defaultImage}
            alt="profile Image "
            className="h-full w-full rounded-full  drop-shadow-lg "
            width={300}
            height={300}
            loading="lazy"
          />
          {imageError && (
            <p className="text-sm font-medium text-red-500 text-center">
              {imageError}
            </p>
          )}

          <div className="flex flex-col items-center">
            <input
              onChange={onchangePic}
              ref={profileRef}
              type="file"
              className="hidden"
              accept="image/png, image/gif, image/jpeg"
            />
            {studentDetails && (
              <p
                className="cursor-pointer text-white hover:text-blue-500 bg-blue-400 m-2 p-2 rounded-xl"
                onClick={onChangeProfileCick}
              >
                Upload Photo
              </p>
            )}
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
            <div className="flex w-full  h-full border-[2px] rounded-md gap-3  items-start  bg-slate-50">
              <p className="ml-1  overflow-x-auto">
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
      <section className="my-5 w-[90%]">
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
              className=""
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
                Gender: {stud.gender}
              </Typography>
              <Typography className="md:w-[70rem]">
                Birth date: {stud.dob}
              </Typography>
              <Typography className="md:w-[70rem]">
                Phone: {stud.phone}
              </Typography>
              <Typography className="md:w-[70rem]">
                Town: {stud.town}
              </Typography>
              <Typography className="md:w-[70rem]">
                State: {stud.state}
              </Typography>
              <Typography className="md:w-[70rem]">
                Address: {stud.address}
              </Typography>
              <Typography className="md:w-[70rem]">
                Country: {stud.country}
              </Typography>
              <Typography className="md:w-[70rem]">
                Course Start Month: {stud.courseStartMonth}
              </Typography>

              <Typography className="md:w-[70rem]">
                Course Start Year: {stud.courseStartYear}
              </Typography>
              <p className="font-medium">
                {stud.identityDocName && "Identity Document."}
              </p>
              {stud.identityDocName && (
                <Typography className="md:w-[70rem] pl-4" key={i}>
                  {stud.identityDocName.substring(36)}{" "}
                  <a
                    target="_blank"
                    href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/${stud.identityDocName}`}
                    className=" border p-2 bg-slate-50 hover:bg-slate-100"
                  >
                    Download
                  </a>
                </Typography>
              )}
              <p className="font-medium">Degree Documents:</p>
              {stud.degreeDocName.map((doc, i) => (
                <Typography className="md:w-[70rem] pl-4 pt-4" key={i}>
                  {doc.substring(36)}{" "}
                  <a
                    target="_blank"
                    href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/${doc}`}
                    className=" border p-2 bg-slate-50 hover:bg-slate-100"
                  >
                    Download
                  </a>
                </Typography>
              ))}
              <p className="font-medium">Academic Documents:</p>
              {stud.academicDocName.map((doc, i) => (
                <Typography className="md:w-[70rem] pl-4 pt-4" key={i}>
                  {doc.substring(36)}{" "}
                  <a
                    target="_blank"
                    href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/${doc}`}
                    className=" border p-2 bg-slate-50 hover:bg-slate-100"
                  >
                    Download
                  </a>
                </Typography>
              ))}
              <p className="font-medium">
                {stud.birthDocName && "Birth Certificate"}
              </p>
              {stud.birthDocName && (
                <Typography className="md:w-[70rem] pl-4" key={i}>
                  {stud.birthDocName.substring(36)}{" "}
                  <a
                    target="_blank"
                    href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/${stud.birthDocName}`}
                    className=" border p-2 bg-slate-50 hover:bg-slate-100"
                  >
                    Download
                  </a>
                </Typography>
              )}
              <p className="font-medium">
                {stud.motivationDocName && "Motivational Letter"}
              </p>
              {stud.motivationDocName && (
                <Typography className="md:w-[70rem] pl-4" key={i}>
                  {stud.motivationDocName.substring(36)}{" "}
                  <a
                    target="_blank"
                    href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/${stud.motivationDocName}`}
                    className=" border p-2 bg-slate-50 hover:bg-slate-100"
                  >
                    Download
                  </a>
                </Typography>
              )}
              <p className="font-medium">
                {stud.ieltsDocName && "IELTS or TOEFL"}
              </p>
              {stud.ieltsDocName && (
                <Typography className="md:w-[70rem] pl-4" key={i}>
                  {stud.ieltsDocName.substring(36)}{" "}
                  <a
                    target="_blank"
                    href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/${stud.ieltsDocName}`}
                    className=" border p-2 bg-slate-50 hover:bg-slate-100"
                  >
                    Download
                  </a>
                </Typography>
              )}
              {stud.englishDocName.length > 0 && (
                <p className="font-medium">
                  Official Translated Copy of Your Degree Certificates:
                </p>
              )}
              {stud.englishDocName.map((doc, i) => (
                <Typography className="md:w-[70rem] pl-4 pt-4" key={i}>
                  {doc.substring(36)}{" "}
                  <a
                    target="_blank"
                    href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/${doc}`}
                    className=" border p-2 bg-slate-50 hover:bg-slate-100"
                  >
                    Download
                  </a>
                </Typography>
              ))}
              {stud.recommendationDocName && (
                <p className="font-medium">
                  Recommendation or Reference Letter
                </p>
              )}
              {stud.recommendationDocName && (
                <Typography className="md:w-[70rem] pl-4 pt-4" key={i}>
                  {stud.recommendationDocName.substring(36)}
                  <a
                    target="_blank"
                    href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/${stud.recommendationDocName}`}
                    className=" border p-2 bg-slate-50 hover:bg-slate-100"
                  >
                    Download
                  </a>
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </section>
      {!studentDetails && (
        <span className="w-full mb-2 font-medium text-center">
          No Students Found
        </span>
      )}

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isUploading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </main>
  );
}
