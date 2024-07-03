import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdHome } from "react-icons/io";
import { GoPersonFill } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { Button } from "../../../ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import AddApplicationArtical from "../objects/AddApplicationArtical";
import { ChangeEvent, useRef, useState } from "react";
import { postFile } from "../../../../http/fetch";
import { RxCrossCircled } from "react-icons/rx";

interface FormValues {
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  town: string;
  state: string;
  country: string;
  dob: Date;
  nationality: string;
  email: string;
  phone: number;
  residence: string;
  programType: string;
  studyProgram: string;
  courseStartMonth: string;
  courseStartYear: number;
  files: FormData;
}

interface FormValuesFileType {
  identityFileName: string;
  degreeFileName: string;
  academiFileName: string;
  birthcerFileName: string;
  motivationFileName: string;
  ieltFileName: string;
  translatedFileName: string;
  recommendationFileName: string;
}

interface multiFileType {
  degreeMsg: boolean;
  academicMsg: boolean;
  englishMsg: boolean;
}

export default function AddApplication() {
  const indentityRef = useRef<HTMLInputElement | null>(null);
  const degreeRef = useRef<HTMLInputElement | null>(null);
  const academicRef = useRef<HTMLInputElement | null>(null);
  const birthRef = useRef<HTMLInputElement | null>(null);
  const motivationRef = useRef<HTMLInputElement | null>(null);
  const ieltsRef = useRef<HTMLInputElement | null>(null);
  const translatedRef = useRef<HTMLInputElement | null>(null);
  const recommendationRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<FormValuesFileType>({
    identityFileName: "",
    degreeFileName: "",
    academiFileName: "",
    birthcerFileName: "",
    motivationFileName: "",
    ieltFileName: "",
    translatedFileName: "",
    recommendationFileName: "",
  });
  const [indentityFileHolder, setIndentityFileHolder] = useState<File>();
  const [degreeFileHolder, setDegreeFileHolder] = useState<File[]>([]);
  const [academicFileHolder, setAcademicFileHolder] = useState<File[]>([]);
  const [birthFileHolder, setBirthFileHolder] = useState<File>();
  const [motivateFileHolder, setMotivateFileHolder] = useState<File>();
  const [ieltsFileHolder, setIeltsFileHolder] = useState<File>();
  const [engTransFileHolder, setEngTransFileHolder] = useState<File[]>([]);
  const [recFileHolder, setRecFileHolder] = useState<File>();
  const [overloadmsg, setOverloadmsg] = useState<multiFileType>({
    degreeMsg: false,
    academicMsg: false,
    englishMsg: false,
  });
  const formdata = new FormData();

  const handleIdentityChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      setIndentityFileHolder(file);
      setFileName((prev) => ({ ...prev, identityFileName: file.name }));
    }
  };
  const handleDegreeChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (degreeFileHolder.length >= 3) {
      setOverloadmsg((prev) => ({ ...prev, degreeMsg: true }));
      return;
    }
    const files = event.target.files;
    if (files) {
      const file = files[0];
      setDegreeFileHolder((prev) => [...prev, file]);
    }
  };

  const deleteSingleFileDeg = (index: number) => {
    const finalFile = degreeFileHolder.filter((_, i) => i !== index);
    setDegreeFileHolder(finalFile);
  };

  const handleAcademiChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (academicFileHolder.length >= 2) {
      setOverloadmsg((prev) => ({ ...prev, academicMsg: true }));
      return;
    }
    const files = event.target.files;
    if (files) {
      const file = files[0];
      setAcademicFileHolder((prev) => [...prev, file]);
    }
  };
  const deleteSingleFileAca = (index: number) => {
    const finalFile = academicFileHolder.filter((_, i) => i !== index);
    setAcademicFileHolder(finalFile);
  };

  const handleBirthcerChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      setBirthFileHolder(file);
      setFileName((prev) => ({ ...prev, birthcerFileName: file.name }));
    }
  };
  const handleMotivationChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      setMotivateFileHolder(file);
      setFileName((prev) => ({ ...prev, motivationFileName: file.name }));
    }
  };
  const handlIeltChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      setIeltsFileHolder(file);
      setFileName((prev) => ({ ...prev, ieltFileName: file.name }));
    }
  };
  const handleTranslatedChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (engTransFileHolder.length >= 2) {
      setOverloadmsg((prev) => ({ ...prev, englishMsg: true }));
      return;
    }
    const files = event.target.files;
    if (files) {
      const file = files[0];
      setEngTransFileHolder((prev) => [...prev, file]);
    }
  };
  const deleteSingleFileEng = (index: number) => {
    const finalFile = engTransFileHolder.filter((_, i) => i !== index);
    setEngTransFileHolder(finalFile);
  };

  const handleRecommendationChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      setRecFileHolder(file);
      setFileName((prev) => ({ ...prev, recommendationFileName: file.name }));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    console.log("\n");

    if (indentityFileHolder) formdata.append("identify", indentityFileHolder);
    if (birthFileHolder) formdata.append("birth", birthFileHolder);
    if (motivateFileHolder) formdata.append("motivation", motivateFileHolder);
    if (ieltsFileHolder) formdata.append("ielts", ieltsFileHolder);
    if (recFileHolder) formdata.append("recommandation", recFileHolder);
    if (degreeFileHolder) {
      for (let i = 0; i < degreeFileHolder.length; i++) {
        formdata.append("degree", degreeFileHolder[i]);
      }
    }
    if (academicFileHolder) {
      for (let i = 0; i < academicFileHolder.length; i++) {
        formdata.append("academic", academicFileHolder[i]);
      }
    }
    if (engTransFileHolder) {
      for (let i = 0; i < engTransFileHolder.length; i++) {
        formdata.append("english", engTransFileHolder[i]);
      }
    }

    formdata.append("data", JSON.stringify(data));
    await postFile(formdata);
  };
  return (
    <main className="flex items-center justify-center font-medium">
      <section className="w-[60%] border p-10 max-md:w-full max-md:p-4">
        <AddApplicationArtical />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className="my-5 border-b-[1px] border-red-500 text-lg">
            Student Details
          </h4>

          <div className="my-5">
            <label className="text-sm font-semibold">
              First Name <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <GoPersonFill className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Your First Name "
                {...register("firstName", { required: true, minLength: 3 })}
              />
            </div>
            {errors.firstName && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required with Minimum Characters
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Last Name <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <GoPersonFill className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Your Last Name "
                {...register("lastName", { required: true })}
              />
            </div>
            {errors.lastName && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required with Minimum Characters
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <TfiMenuAlt className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <select
                className="w-full px-2 text-sm focus:outline-blue-400"
                {...register("gender", { required: true })}
              >
                <option value="">--Please select option--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {errors.gender && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Address <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="First Line "
                {...register("address", { required: true, minLength: 3 })}
              />
            </div>
            {errors.address && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required with Minimum Characters
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Town/City <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Town/City "
                {...register("town", { required: true, minLength: 3 })}
              />
            </div>
            {errors.town && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required with Minimum Characters
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              State / Province / Region <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="State / Province / Region "
                {...register("state", { required: true, minLength: 3 })}
              />
            </div>
            {errors.state && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required with Minimum Characters
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Country <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Country "
                {...register("country", { required: true, minLength: 3 })}
              />
            </div>
            {errors.country && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required with Minimum Characters
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <FaCalendarAlt
                className="bg-slate-100 p-[0.4rem]"
                size={"2rem"}
              />
              <input
                type="date"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Country "
                {...register("dob", { required: true })}
              />
            </div>
            {errors.dob && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Nationality <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <GoPersonFill className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Nationality "
                {...register("nationality", { required: true, minLength: 3 })}
              />
            </div>
            {errors.nationality && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required with Minimum Characters
              </span>
            )}
          </div>
          <div className="my-5 md:w-[50%]">
            <label className="text-sm font-semibold">
              Email Address<span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <IoIosMail className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Email Address"
                {...register("email", { required: true, minLength: 3 })}
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required with Minimum Characters
              </span>
            )}
          </div>
          <div className="my-5 md:w-[50%]">
            <label className="text-sm font-semibold">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <MdLocalPhone className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Phone Number"
                {...register("phone", { required: true, minLength: 9 })}
              />
            </div>
            {errors.phone && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required with Minimum Characters
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Country of Permanent Residence{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <GoPersonFill className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Country of Permanent Residence "
                {...register("residence", { required: true, minLength: 3 })}
              />
            </div>
            {errors.residence && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required with Minimum Characters
              </span>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold">
              Programme Type <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <TfiMenuAlt className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <select
                className="w-full px-2 text-sm focus:outline-blue-400"
                {...register("programType", { required: true })}
              >
                <option value="">--Please select option--</option>
                <option value="Masters Degree">Masters Degree</option>
                <option value="PhD Degree">PhD Degree</option>
              </select>
            </div>
            {errors.programType && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required
              </span>
            )}
          </div>

          <div className="my-5">
            <label className="text-sm font-semibold">
              Study Program/Course <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Study Program/course"
                {...register("studyProgram", { required: true, minLength: 3 })}
              />
            </div>
            {errors.studyProgram && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required with Minimum Characters
              </span>
            )}
          </div>

          <div className="my-5">
            <label className="text-sm font-semibold">
              Crouse Start Month <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <TfiMenuAlt className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <select
                className="w-full px-2 text-sm focus:outline-blue-400"
                {...register("courseStartMonth", { required: true })}
              >
                <option value="">--Please select option--</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            {errors.courseStartMonth && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Course Start Year <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <IoMdHome className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder="Course Start Year"
                {...register("courseStartYear", {
                  required: true,
                  minLength: 4,
                })}
              />
            </div>
            {errors.courseStartYear && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required with Minimum Characters
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Identity Document.
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex items-center rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
                onClick={() => indentityRef.current?.click()}
              >
                Browse
              </button>
              <input
                type="file"
                className="w-full px-2 text-sm focus:outline-blue-400 hidden"
                placeholder=""
                ref={indentityRef}
                onChange={handleIdentityChange}
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              />
              {fileName.identityFileName && (
                <span className=" text-sm font-medium ml-2">
                  {fileName.identityFileName}
                </span>
              )}
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Degree Certificate and Transcript
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex items-end gap-2 rounded-sm border-[1.9px] border-slate-300 ">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
                onClick={() => degreeRef.current?.click()}
              >
                Browse
              </button>
              <input
                type="file"
                className="w-full px-2 text-sm focus:outline-blue-400 hidden"
                placeholder=""
                ref={degreeRef}
                onChange={handleDegreeChange}
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              />
              <div className="w-full  flex flex-wrap gap-1">
                {degreeFileHolder.map((doc, i) => (
                  <span
                    className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                    key={i}
                  >
                    {doc.name.substring(0, 20)}
                    <Button
                      variant={"secondary"}
                      className="p-0 rounded-full w-5 h-5"
                      onClick={() => deleteSingleFileDeg(i)}
                      type="button"
                    >
                      <RxCrossCircled className="w-full h-full" />
                    </Button>
                  </span>
                ))}
              </div>
            </div>
            {overloadmsg.degreeMsg && (
              <span className=" text-sm font-medium  text-red-500">
                Maxmium File Count Exceeded
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Academic Credential Evaluation Report
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex items-end gap-1 rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
                onClick={() => academicRef.current?.click()}
              >
                Browse
              </button>
              <input
                type="file"
                className="w-full px-2 text-sm focus:outline-blue-400 hidden"
                placeholder=""
                ref={academicRef}
                onChange={handleAcademiChange}
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              />
              <div className="w-full  flex flex-wrap gap-1">
                {academicFileHolder.map((doc, i) => (
                  <span
                    className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                    key={i}
                  >
                    {doc.name.substring(0, 20)}
                    <Button
                      variant={"secondary"}
                      className="p-0 rounded-full w-5 h-5"
                      onClick={() => deleteSingleFileAca(i)}
                      type="button"
                    >
                      <RxCrossCircled className="w-full h-full" />
                    </Button>
                  </span>
                ))}
              </div>
            </div>
            {overloadmsg.academicMsg && (
              <span className=" text-sm font-medium  text-red-500">
                Maxmium File Count Exceeded
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Birth Certificate
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex items-center rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
                onClick={() => birthRef.current?.click()}
              >
                Browse
              </button>
              <input
                type="file"
                className="w-full px-2 text-sm focus:outline-blue-400 hidden"
                placeholder=""
                ref={birthRef}
                onChange={handleBirthcerChange}
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              />
              {fileName.birthcerFileName && (
                <span className=" text-sm font-medium ml-2">
                  {fileName.birthcerFileName}
                </span>
              )}
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Motivational Letter/Statement of Purpose
            </label>
            <span className="text-red-500 ml-1">*</span>
            <div className="flex items-center rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
                onClick={() => motivationRef.current?.click()}
              >
                Browse
              </button>
              <input
                type="file"
                className="w-full px-2 text-sm focus:outline-blue-400 hidden"
                placeholder=""
                ref={motivationRef}
                onChange={handleMotivationChange}
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              />
              {fileName.motivationFileName && (
                <span className=" text-sm font-medium ml-2">
                  {fileName.motivationFileName}
                </span>
              )}
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">IELTS or TOEFL</label>
            <div className="flex items-center rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
                onClick={() => ieltsRef.current?.click()}
              >
                Browse
              </button>
              <input
                type="file"
                className="w-full px-2 text-sm focus:outline-blue-400 hidden"
                placeholder=""
                ref={ieltsRef}
                onChange={handlIeltChange}
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              />
              {fileName.ieltFileName && (
                <span className=" text-sm font-medium ml-2">
                  {fileName.ieltFileName}
                </span>
              )}
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Official Translated Copy of Your Degree Certificates and
              Transcripts in English Language.
            </label>
            <div className="flex items-end gap-1 rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
                onClick={() => translatedRef.current?.click()}
              >
                Browse
              </button>
              <input
                type="file"
                className="w-full px-2 text-sm focus:outline-blue-400 hidden"
                placeholder=""
                ref={translatedRef}
                onChange={handleTranslatedChange}
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              />
              <div className="w-full  flex flex-wrap gap-1">
                {engTransFileHolder.map((doc, i) => (
                  <span
                    className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                    key={i}
                  >
                    {doc.name.substring(0, 20)}
                    <Button
                      variant={"secondary"}
                      className="p-0 rounded-full w-5 h-5"
                      onClick={() => deleteSingleFileEng(i)}
                      type="button"
                    >
                      <RxCrossCircled className="w-full h-full" />
                    </Button>
                  </span>
                ))}
              </div>
            </div>
            {overloadmsg.englishMsg && (
              <span className=" text-sm font-medium  text-red-500">
                Maxmium File Count Exceeded
              </span>
            )}
          </div>

          <div className="my-5">
            <label className="text-sm font-semibold">
              Copy of Recommendation or Reference Letter (optional)
            </label>
            <div className="flex items-center rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
                onClick={() => recommendationRef.current?.click()}
              >
                Browse
              </button>
              <input
                type="file"
                className="w-full px-2 text-sm focus:outline-blue-400 hidden"
                placeholder=""
                ref={recommendationRef}
                onChange={handleRecommendationChange}
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              />
              {fileName.recommendationFileName && (
                <span className=" text-sm font-medium ml-2">
                  {fileName.recommendationFileName}
                </span>
              )}
            </div>
          </div>

          <p className="text-md my-5">
            By clicking submit you are agreeing that you have uploaded all the
            original documents for your scholarship application.
          </p>
          <Button className="rounded-sm bg-red-500 px-2 py-1 text-white w-[5rem]">
            Submit
          </Button>
        </form>
      </section>
    </main>
  );
}
