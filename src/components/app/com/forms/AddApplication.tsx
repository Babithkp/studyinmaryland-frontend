import Backdrop from "@mui/material/Backdrop";import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdHome } from "react-icons/io";
import { GoPersonFill } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { Button as ButtonOld } from "../../../ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import AddApplicationArtical from "../objects/AddApplicationArtical";
import { ChangeEvent, useRef, useState } from "react";
import { newUserregistration, uploadsingleFile } from "../../../../http/fetch";
import { RxCrossCircled } from "react-icons/rx";
import { v4 } from "uuid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FaCheck } from "react-icons/fa6";

interface FormValues {
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

interface FormValuesFileType {
  identityFileName: string;
  degreeDocName: string[];
  academiFileName: string[];
  birthcerFileName: string;
  ieltFileName: string;
  motivationFileName: string;
  englishDocName: string[];
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
    degreeDocName: [],
    academiFileName: [],
    birthcerFileName: "",
    ieltFileName: "",
    motivationFileName: "",
    englishDocName: [],
    recommendationFileName: "",
  });
  const [indentityFileError, setIndentityFileError] = useState<string | null>();
  const [degreeFileError, setDegreeFileError] = useState<string | null>();
  const [academicFileError, setAcademicFileError] = useState<string | null>();
  const [birthFileError, setBirthFileError] = useState<string | null>();
  const [motivateFileError, setMotivateFileError] = useState<string | null>();
  const [ieltsFileError, setIeltsFileError] = useState<string | null>();
  const [engTransFileError, setEngTransFileError] = useState<string | null>();
  const [recFileError, setRecFileError] = useState<string | null>();
  const [overloadmsg, setOverloadmsg] = useState<multiFileType>({
    degreeMsg: false,
    academicMsg: false,
    englishMsg: false,
  });
  const [dataStorage, setDataStorage] = useState<FormValues>({
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    town: "",
    state: "",
    country: "",
    dob: "",
    nationality: "",
    email: "",
    phone: "",
    residence: "",
    programType: "",
    studyProgram: "",
    courseStartMonth: "",
    courseStartYear: "",
    identityDocName: "",
    degreeDocName: [],
    academicDocName: [],
    birthDocName: "",
    motivationDocName: "",
    ieltsDocName: "",
    englishDocName: [],
    recommendationDocName: "",
  });
  const [isLoading, setIsloading] = useState(false);
  const [open, setOpen] = useState(false);
  const [responseStatus, setResponseStatus] = useState(false);
  const formdata = new FormData();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };
  const handleRedirect = () => {
    if (!responseStatus) {
      window.location.href = "/";
    } else {
      handleClose();
    }
  };

  // functions for handling Indentity Document
  const handleIdentityChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      if (files[0].size > 5000000) {
        setIndentityFileError("File size is too large, (minimum sixe is 5Mb)");
        return;
      } else {
        setIndentityFileError(null);
      }
      formdata.delete("files");
      const newId = v4() + files[0].name;
      setIsloading(true);
      setDataStorage((prev) => ({ ...prev, identityDocName: newId }));
      formdata.append("files", files[0], newId);
      await uploadsingleFile(formdata);
      setIsloading(false);
      setFileName((prev) => ({ ...prev, identityFileName: files[0].name }));
    }
  };

  // functions for handling Degree Document
  const handleDegreeChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (dataStorage.degreeDocName.length >= 3) {
      setOverloadmsg((prev) => ({ ...prev, degreeMsg: true }));
      return;
    }
    const files = event.target.files;
    if (files) {
      const file = files[0];
      if (file.size > 5000000) {
        setDegreeFileError("File size is too large, (minimum sixe is 5Mb)");
        return;
      } else {
        setDegreeFileError(null);
      }
      formdata.delete("files");
      const newId = v4() + file.name;
      setDataStorage((prev) => ({
        ...prev,
        degreeDocName: [...prev.degreeDocName, newId],
      }));
      setIsloading(true);
      formdata.append("files", file, newId);
      await uploadsingleFile(formdata);
      setIsloading(false);
      setFileName((prev) => ({
        ...prev,
        degreeDocName: [...prev.degreeDocName, file.name],
      }));
    }
  };

  const deleteSingleFileDeg = (index: number) => {
    const filteredOut = dataStorage.degreeDocName.filter((_, i) => i != index);
    const filteredName = fileName.degreeDocName.filter((_, i) => i != index);
    setFileName((prev) => ({ ...prev, degreeDocName: filteredName }));
    setDataStorage((prev) => ({ ...prev, degreeDocName: filteredOut }));
  };

  // functions for handling Academic Document
  const handleAcademiChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (dataStorage.academicDocName.length >= 2) {
      setOverloadmsg((prev) => ({ ...prev, academicMsg: true }));
      return;
    }
    const files = event.target.files;
    if (files) {
      const file = files[0];
      if (file.size > 5000000) {
        setAcademicFileError("File size is too large, (minimum sixe is 5Mb)");
        return;
      } else {
        setAcademicFileError(null);
      }
      formdata.delete("files");
      const newId = v4() + file.name;
      setDataStorage((prev) => ({
        ...prev,
        academicDocName: [...prev.academicDocName, newId],
      }));
      setIsloading(true);
      formdata.append("files", file, newId);
      await uploadsingleFile(formdata);
      setIsloading(false);
      setFileName((prev) => ({
        ...prev,
        academiFileName: [...prev.academiFileName, file.name],
      }));
    }
  };
  const deleteSingleFileAca = (index: number) => {
    const filteredOut = dataStorage.academicDocName.filter(
      (_, i) => i != index
    );
    const filteredName = fileName.academiFileName.filter((_, i) => i != index);
    setFileName((prev) => ({ ...prev, academiFileName: filteredName }));
    setDataStorage((prev) => ({ ...prev, academicDocName: filteredOut }));
  };

  // functions for handling Birth certificate Document
  const handleBirthcerChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      if (files[0].size > 5000000) {
        setBirthFileError("File size is too large, (minimum sixe is 5Mb)");
        return;
      } else {
        setBirthFileError(null);
      }
      formdata.delete("files");
      const newId = v4() + files[0].name;
      setDataStorage((prev) => ({ ...prev, birthDocName: newId }));
      setIsloading(true);
      formdata.append("files", files[0], newId);
      await uploadsingleFile(formdata);
      setIsloading(false);
      setFileName((prev) => ({ ...prev, birthcerFileName: files[0].name }));
    }
  };

  // functions for handling motivation certificate Document
  const handleMotivationChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      if (files[0].size > 5000000) {
        setMotivateFileError("File size is too large, (minimum sixe is 5Mb)");
        return;
      } else {
        setMotivateFileError(null);
      }
      formdata.delete("files");
      const newId = v4() + files[0].name;
      setDataStorage((prev) => ({ ...prev, motivationDocName: newId }));
      setIsloading(true);
      formdata.append("files", files[0], newId);
      await uploadsingleFile(formdata);
      setIsloading(false);
      setFileName((prev) => ({ ...prev, motivationFileName: files[0].name }));
    }
  };
  const handlIeltChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      if (files[0].size > 5000000) {
        setIeltsFileError("File size is too large, (minimum sixe is 5Mb)");
        return;
      } else {
        setIeltsFileError(null);
      }
      formdata.delete("files");
      const newId = v4() + files[0].name;
      setDataStorage((prev) => ({ ...prev, ieltsDocName: newId }));
      setIsloading(true);
      formdata.append("files", files[0], newId);
      await uploadsingleFile(formdata);
      setIsloading(false);
      setFileName((prev) => ({ ...prev, ieltFileName: files[0].name }));
    }
  };

  // functions for handling English Translated certificate Document
  const handleTranslatedChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (dataStorage.englishDocName.length >= 2) {
      setOverloadmsg((prev) => ({ ...prev, englishMsg: true }));
      return;
    }
    const files = event.target.files;
    if (files) {
      const file = files[0];
      if (file.size > 5000000) {
        setEngTransFileError("File size is too large, (minimum sixe is 5Mb)");
        return;
      } else {
        setEngTransFileError(null);
      }
      formdata.delete("files");
      const newId = v4() + file.name;
      setDataStorage((prev) => ({
        ...prev,
        englishDocName: [...prev.englishDocName, newId],
      }));
      setIsloading(true);
      formdata.append("files", file, newId);
      await uploadsingleFile(formdata);
      setIsloading(false);
      setFileName((prev) => ({
        ...prev,
        englishDocName: [...prev.englishDocName, file.name],
      }));
    }
  };
  const deleteSingleFileEng = (index: number) => {
    const filteredOut = dataStorage.englishDocName.filter((_, i) => i != index);
    const filteredName = fileName.englishDocName.filter((_, i) => i != index);
    setFileName((prev) => ({ ...prev, englishDocName: filteredName }));
    setDataStorage((prev) => ({ ...prev, englishDocName: filteredOut }));
  };

  const handleRecommendationChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      if (files[0].size > 5000000) {
        setRecFileError("File size is too large, (minimum sixe is 5Mb)");
        return;
      } else {
        setRecFileError(null);
      }
      formdata.delete("files");
      const newId = v4() + files[0].name;
      setDataStorage((prev) => ({ ...prev, recommendationDocName: newId }));
      setIsloading(true);
      formdata.append("files", files[0], newId);
      await uploadsingleFile(formdata);
      setIsloading(false);
      setFileName((prev) => ({
        ...prev,
        recommendationFileName: files[0].name,
      }));
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (dataStorage.identityDocName.length <= 0) {
      indentityRef.current?.classList.remove("hidden");
      indentityRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      indentityRef.current?.classList.add("hidden");

      setIndentityFileError("This Field is Required To Register");
      return;
    }
    if (dataStorage.degreeDocName.length <= 0) {
      degreeRef.current?.classList.remove("hidden");
      degreeRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      degreeRef.current?.classList.add("hidden");
      setDegreeFileError("This Field is Required To Register");
      return;
    }
    if (dataStorage.academicDocName.length <= 0) {
      academicRef.current?.classList.remove("hidden");
      academicRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      academicRef.current?.classList.add("hidden");
      setAcademicFileError("This Field is Required To Register");
      return;
    }
    if (dataStorage.birthDocName.length <= 0) {
      birthRef.current?.classList.remove("hidden");
      birthRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      birthRef.current?.classList.add("hidden");
      setBirthFileError("This Field is Required To Register");
      return;
    }
    if (dataStorage.motivationDocName.length <= 0) {
      motivationRef.current?.classList.remove("hidden");
      motivationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      motivationRef.current?.classList.add("hidden");
      setMotivateFileError("This Field is Required To Register");
      return;
    }
    const formSubmittiedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      address: data.address,
      town: data.town,
      state: data.state,
      country: data.country,
      dob: data.dob,
      nationality: data.nationality,
      email: data.email,
      phone: data.phone,
      residence: data.residence,
      programType: data.programType,
      studyProgram: data.studyProgram,
      courseStartMonth: data.courseStartMonth,
      courseStartYear: data.courseStartYear,
      identityDocName: dataStorage.identityDocName,
      degreeDocName: dataStorage.degreeDocName,
      academicDocName: dataStorage.academicDocName,
      birthDocName: dataStorage.birthDocName,
      motivationDocName: dataStorage.motivationDocName,
      ieltsDocName: dataStorage.ieltsDocName,
      englishDocName: dataStorage.englishDocName,
      recommendationDocName: dataStorage.recommendationDocName,
    };
    try {
      setIsloading(true);
      const response = await newUserregistration(formSubmittiedData);
      console.log(response);
      if (response.data.error) {
        setResponseStatus(true);
        setOpen(true);
        setIsloading(false);
      } else {
        setResponseStatus(false);
        setOpen(true);
        setIsloading(false);
        reset();
        setFileName({
          identityFileName: "",
          degreeDocName: [],
          academiFileName: [],
          birthcerFileName: "",
          ieltFileName: "",
          motivationFileName: "",
          englishDocName: [],
          recommendationFileName: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
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
            {indentityFileError && (
              <span className="text-red-500 text-sm font-medium mt-2">
                {indentityFileError}
              </span>
            )}
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
                {fileName.degreeDocName.map((doc, i) => (
                  <span
                    className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                    key={i}
                  >
                    {doc.substring(0, 20)}
                    <ButtonOld
                      variant={"secondary"}
                      className="p-0 rounded-full w-5 h-5"
                      onClick={() => deleteSingleFileDeg(i)}
                      type="button"
                    >
                      <RxCrossCircled className="w-full h-full" />
                    </ButtonOld>
                  </span>
                ))}
              </div>
            </div>
            {overloadmsg.degreeMsg && (
              <span className=" text-sm font-medium  text-red-500">
                Maxmium File Count Exceeded
              </span>
            )}
            {degreeFileError && (
              <span className="text-red-500 text-sm font-medium mt-2">
                {degreeFileError}
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
                {fileName.academiFileName.map((doc, i) => (
                  <span
                    className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                    key={i}
                  >
                    {doc.substring(0, 20)}
                    <ButtonOld
                      variant={"secondary"}
                      className="p-0 rounded-full w-5 h-5"
                      onClick={() => deleteSingleFileAca(i)}
                      type="button"
                    >
                      <RxCrossCircled className="w-full h-full" />
                    </ButtonOld>
                  </span>
                ))}
              </div>
            </div>
            {overloadmsg.academicMsg && (
              <span className=" text-sm font-medium  text-red-500">
                Maxmium File Count Exceeded
              </span>
            )}
            {academicFileError && (
              <span className="text-red-500 text-sm font-medium mt-2">
                {academicFileError}
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
            {birthFileError && (
              <span className="text-red-500 text-sm font-medium mt-2">
                {birthFileError}
              </span>
            )}
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
            {motivateFileError && (
              <span className="text-red-500 text-sm font-medium mt-2">
                {motivateFileError}
              </span>
            )}
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
            {ieltsFileError && (
              <span className="text-red-500 text-sm font-medium mt-2">
                {ieltsFileError}
              </span>
            )}
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
                {fileName.englishDocName.map((doc, i) => (
                  <span
                    className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                    key={i}
                  >
                    {doc.substring(0, 20)}
                    <ButtonOld
                      variant={"secondary"}
                      className="p-0 rounded-full w-5 h-5"
                      onClick={() => deleteSingleFileEng(i)}
                      type="button"
                    >
                      <RxCrossCircled className="w-full h-full" />
                    </ButtonOld>
                  </span>
                ))}
              </div>
            </div>
            {overloadmsg.englishMsg && (
              <span className=" text-sm font-medium  text-red-500">
                Maxmium File Count Exceeded
              </span>
            )}
            {engTransFileError && (
              <span className="text-red-500 text-sm font-medium mt-2">
                {engTransFileError}
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
            {recFileError && (
              <span className="text-red-500 text-sm font-medium mt-2">
                {recFileError}
              </span>
            )}
          </div>

          <p className="text-md my-5">
            By clicking submit you are agreeing that you have uploaded all the
            original documents for your scholarship application.
          </p>
          <Button
            variant="contained"
            color="error"
            className="rounded-sm bg-red-500 px-2 py-1 text-white w-[5rem] "
            type="submit"
          >
            Submit
          </Button>
        </form>
      </section>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
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
            {!responseStatus && (
              <div className="w-[5rem] h-[5rem] bg-green-500 rounded-full flex justify-center items-center ">
                <FaCheck className="w-full h-[3rem] text-white" />
              </div>
            )}
            {responseStatus && (
              <div className="w-[5rem] h-[5rem] bg-red-500 rounded-full flex justify-center items-center ">
                <RxCrossCircled className="w-full h-[3rem] text-white" />
              </div>
            )}
          </DialogTitle>
          <DialogContent className="w-full text-center ">
            {!responseStatus && (
              <span className="text-lg font-semibold ">
                Registration Successfull
              </span>
            )}
            {responseStatus && (
              <span className="text-lg font-semibold ">
                Failed Registration
              </span>
            )}
            {!responseStatus && <DialogContentText>ThankYou</DialogContentText>}
            {responseStatus && (
              <DialogContentText>
                User Already exist,Try using Different email
              </DialogContentText>
            )}
          </DialogContent>
          <DialogActions disableSpacing={false}>
            <Button onClick={handleRedirect} autoFocus variant="contained" >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </main>
  );
}
