import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdHome } from "react-icons/io";
import { GoPersonFill } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

export default function AddApplication() {
  return (
    <main className="flex items-center justify-center">
      <section className="w-[60%] border p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="my-10 text-5xl font-bold text-red-500 max-md:text-3xl">
            Application portal
          </h1>
          <p className="text-md my-5">
            International students can use our online application portal to
            apply for the study in Maryland scholarship to study a masters or
            PhD degree program.
          </p>
          <p className="text-md my-5">
            All applicants should enter their details correctly and upload all
            the required application documents to submit their study in Maryland
            scholarship application.
          </p>
          <p className="text-md my-5">
            Successful study in Maryland scholarship recipients will receive an
            admission to study at one of our partner universities.
          </p>
          <p className="text-md my-5">
            International students are not required to pay any
            application/admission fees to study at one of our partner
            university.
          </p>
          <p className="text-md my-5">
            Fill out the online application form and submit your application.
          </p>
          <h2 className="my-10 text-5xl font-bold text-red-500 max-md:text-3xl">
            Pre-Application Form
          </h2>
          <p className="my-10 text-center text-2xl font-bold max-md:text-xl">
            All fields with a <span className="text-red-500">*</span> are
            required
          </p>
        </article>
        <form>
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
              />
            </div>
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
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <TfiMenuAlt className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <select className="w-full px-2 text-sm focus:outline-blue-400">
                <option value="">--Please select option--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
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
              />
            </div>
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
              />
            </div>
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
              />
            </div>
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
              />
            </div>
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
              />
            </div>
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
              />
            </div>
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
              />
            </div>
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
              />
            </div>
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
              />
            </div>
          </div>
          
          
          <div>
            <label className="text-sm font-semibold">
              Programme Type <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <TfiMenuAlt className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <select className="w-full px-2 text-sm focus:outline-blue-400">
                <option value="">--Please select option--</option>
                <option value="Masters Degree">Masters Degree</option>
                <option value="PhD Degree">PhD Degree</option>
              </select>
            </div>
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
              />
            </div>
          </div>
          
          <div className="my-5">
            <label className="text-sm font-semibold">
              Crouse Start Month <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300 md:w-[50%]">
              <TfiMenuAlt className="bg-slate-100 p-[0.4rem]" size={"2rem"} />
              <select className="w-full px-2 text-sm focus:outline-blue-400">
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
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Upload copy of Identification
              <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
              >
                Browse
              </button>
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder=""
                disabled
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
              Upload scanned copies of Educational Certificates and Transcripts{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
              >
                Browse
              </button>
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder=""
                disabled
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
            Upload copy of your academic credential evaluation report{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
              >
                Browse
              </button>
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder=""
                disabled
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
            Upload copy of birth certificate
              <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
              >
                Browse
              </button>
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder=""
                disabled
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
            Upload copy of IELTS/TOEFL
              <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
              >
                Browse
              </button>
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder=""
                disabled
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
            Upload official translated copy of your degree certificates and transcripts in English language.
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
              >
                Browse
              </button>
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder=""
                disabled
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-sm font-semibold">
            Upload motivational letter/statement of purpose 
            </label>
            <div className="flex rounded-sm border-[1.9px] border-slate-300">
              <button
                type="button"
                className="bg-blue-500 px-2 py-1 text-white"
              >
                Browse
              </button>
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder=""
                disabled
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
              >
                Browse
              </button>
              <input
                type="text"
                className="w-full px-2 text-sm focus:outline-blue-400"
                placeholder=""
                disabled
              />
            </div>
          </div>

          <p className="text-md my-5">
            By clicking submit you are agreeing to our terms and conditions and
            privacy policy
          </p>
          <button className="rounded-sm bg-red-500 px-2 py-1 text-white">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
