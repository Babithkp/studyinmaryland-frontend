import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import img1 from "../../assets/duale_hochschule.jpeg";
import img2 from "../../assets/fulda.jpeg";
import img3 from "../../assets/hochschule_worms.jpeg";
import img4 from "../../assets/ludwigshafen.jpeg";
import img5 from "../../assets/rhen-waal.jpeg";
import img6 from "../../assets/technische.jpeg";

export default function PartnerUniversities() {
  const dropdownTextClass =
    "bg-slate-400 border-t-[1px] border-black py-1 text-center px-5";
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="w-[90%] p-10 max-md:w-full max-md:p-4">
        <h1 className="my-10 text-5xl font-bold text-yellow-500 max-md:text-3xl">
          Partner universities
        </h1>
        <p className="text-md my-5 font-medium">
          We have collaborated with some of the prestigious public universities in Germany to help international students globally to achieve their dreams of studying  tuition free in Germany.
        </p>
        <div className="my-10 flex w-full gap-5 text-center max-lg:flex-wrap max-sm:grid max-sm:grid-cols-2 ">
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              loading="lazy"
              src={img3}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="">Hochschule Worms</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              loading="lazy"
              src={img1}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-80 object-contain"
            />
            <p className="">Duale Hochschule Baden-Wurttemberg</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              loading="lazy"
              src={img2}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="">Hochshule Fulda</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              loading="lazy"
              src={img4}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="">Ludwigshafen University of Bussiness</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              loading="lazy"
              src={img5}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="">Hochshule Rhein-Waal</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              loading="lazy"
              src={img6}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-cover"
            />
            <p className="">Ische Hochs Ingols</p>
          </figure>
        </div>
      </section>
      <section className="mb-10 grid w-[95%] grid-cols-3 gap-8 max-md:grid-cols-1">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-slate-100">
              <span className="ml-5 mr-10">Degree Programs</span>
            </AccordionTrigger>
            <AccordionContent className=" ">
              <p className="w-full bg-slate-300 p-3 text-center font-semibold">
                International students are eligible to apply for the following dual study program at partner university.
              </p>
              <ul className="">
                <li className={dropdownTextClass}> Business Administration</li>
                <li className={dropdownTextClass}>
                  Logistics & Supply Chain Management
                </li>
                <li className={dropdownTextClass}>
                  Marketing & Digital Communication
                </li>
                <li className={dropdownTextClass}> Computer Engineering / Computer Science </li>
                <li className={dropdownTextClass}> Software Engineering</li>
                <li className={dropdownTextClass}> Business Informatics & IT</li>
                <li className={dropdownTextClass}> Cyber Security & Data Science </li>
                <li className={dropdownTextClass}> Electrical / Mechanical Engineering </li>
                <li className={dropdownTextClass}> Industrial Engineering / Engineering Management </li>
                <li className={dropdownTextClass}> Industrial Production & Manufacturing </li>
                <li className={dropdownTextClass}> Nursing/Healthcare Sciences </li>

              </ul>
              <p className="w-full bg-slate-300 p-3 text-center font-semibold">
                All bachelor and masters programs are dual study integrated programs with work placements.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-slate-100">
              <span className="ml-5 mr-10">Program Details:</span>
            </AccordionTrigger>
            <AccordionContent className=" ">
              <ul>
                <li className={dropdownTextClass}>
                  <span className="font-bold mr-2">
                    Bachelor programs duration:
                  </span>
                  <br />6 semesters
                </li>
                <li className={dropdownTextClass}>
                  <span className="font-bold mr-2">Masters programs duration:</span>
                  <br /> 3 semesters
                </li>
                <li className={dropdownTextClass}>
                  <span className="font-bold mr-2">
                    Bachelor and Masters programs start dates:
                  </span>
                  <br />
                  September 2026 (Fall Semester)
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-slate-100">
              <span className="ml-5 mr-10">Application Requirements</span>
            </AccordionTrigger>
            <AccordionContent className=" ">
              <p className="w-full bg-slate-300 p-3 font-semibold">
                International students must submit the following requirements to apply for the Duales Studienstipendium scholarship.
              </p>
              <ul>
                <li className={dropdownTextClass + "text-start"}>
                  <ul className="my-2 flex list-inside list-disc flex-col  justify-start px-5 gap-5">
                    <li>
                      High school certificate and transcript
                      <br />
                      (For Bachelor program)
                    </li>
                    <li>
                      Bachelor certificate and transcript
                      <br />
                      (For Masters programs)
                    </li>
                  </ul>
                  <li>
                  Only the German translated copies of high school or bachelor degree certificates and transcripts will be accepted.
                  </li>
                </li>

                <li className={dropdownTextClass}>
                  <span className="font-bold mr-2">Statement of Purpose:</span>
                  <br />A personal statement, that tells the scholarship committee who you are, what your academic and professional interests are, how you will add value to your chosen degree program and how the degree program aligns with your career goals.
                </li>
                <li className={dropdownTextClass + " flex flex-col gap-3"}>
                  <p>
                    <span className="font-bold mr-2">
                      Identification Documents:
                    </span>
                    <br />A copy of your ID document is required <br />(
                    International passport, Driver’s license, or National
                    identity card are accepted).
                  </p>
                  <p>
                    <span className="font-bold mr-2">Birth Certificate:</span>
                    <br />
                    International students would have to submit an original copy
                    of their birth certificate issued by the relevant authority
                    in your home country.
                  </p>
                  <p>
                    <span className="font-bold mr-2">Recommendation Letter or Reference Letter:</span>
                    <br />
                    A recommendation letter or references letter from your current or previous employer or an academic supervisor or representative at your previous or current academic institution.
                  </p>
                </li>
                <li className={dropdownTextClass + " flex flex-col gap-3"}>
                  <p>
                    <span className="font-bold mr-2">
                      Official copy of a certified translation of your Application documents:
                    </span>
                    <br />
                    This is a mandatory requirement for all scholarship applicants: All academic certificates, transcripts, birth certificates etc.. must be officially translated to German language.
                  </p>
                  <p>
                    All scholarship applicants must submit their documents at the international translation services to get their application documents officially translated to german language.
                  </p>
                  <p>
                    All scholarship applicants can get their application documents translated online at <a
                      href="https://www.ITS.de"
                      target="_blank"
                      className="underline-offset-2 underline text-blue-600"
                    >
                      ITS.de
                    </a>
                  </p>

                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-slate-100">
              <span className="ml-5 mr-10">Application Deadline</span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="w-full bg-slate-300 p-3 font-semibold text-center">
              All international students would have to submit their scholarship application before the application deadline.
              </p>
              <ul>
                <li className={dropdownTextClass + " font-bold"}>
                For the fall semester( September 2026) 
                </li>
                <li className={dropdownTextClass}>
                Application deadline: May 30, 2026.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
