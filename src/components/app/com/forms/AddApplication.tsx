import { TfiMenuAlt } from "react-icons/tfi";import { IoMdHome } from "react-icons/io";
import { GoPersonFill } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { Button } from "../../../ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import AddApplicationArtical from "../objects/AddApplicationArtical";
import { useRef } from "react";

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
  indentityFile: FileList;
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    
    console.log(data)
  };
  return (
    <main className="flex items-center justify-center">
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
              Phone number<span className="text-red-500">*</span>
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
              Study Program/course <span className="text-red-500">*</span>
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
              Upload Identity document.
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
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
                {...register("indentityFile", { required: "File is required" })}
                ref={indentityRef}
              />
            </div>
            {errors.indentityFile && (
              <span className="text-red-500 text-sm font-medium mt-2">
                This Field is Required
              </span>
            )}
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Degree certificate and transcript
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
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
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Academic Credential Report
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
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
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Birth Certificate
              <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
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
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Upload motivational letter/statement of purpose
            </label>
            <span className="text-red-500 ml-1">*</span>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
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
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">IELTS or TOEFL</label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
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
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Official Translated Copy of Your Degree Certificates and
              Transcripts in English Language.
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
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
              />
            </div>
          </div>

          <div className="my-5">
            <label className="text-sm font-semibold">
              Upload copy of recommendation or reference letter (optional)
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
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
              />
            </div>
          </div>

          <p className="text-md my-5">
            By clicking submit you are agreeing that you have uploaded all the
            original documents for your scholarship application
          </p>
          <Button className="rounded-sm bg-red-500 px-2 py-1 text-white w-[5rem]">
            Submit
          </Button>
        </form>
      </section>
    </main>
  );
}
