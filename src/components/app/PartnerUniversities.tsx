
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import img1 from "../../../public/universitiesLogo/bccc.png";
import img2 from "../../../public/universitiesLogo/marylandpng.png";
import img3 from "../../../public/universitiesLogo/universityOfBaltimorejpg.jpg";
import img4 from "../../../public/universitiesLogo/coppin.svg";
import img5 from "../../../public/universitiesLogo/morgan.png";
import img6 from "../../../public/universitiesLogo/frostburg.png";

export default function PartnerUniversities() {
  const dropdownTextClass =
    "bg-slate-400 border-t-[1px] border-black py-1 text-center px-5";
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="w-[90%] p-10 max-md:w-full max-md:p-4">
        <h1 className="my-10 text-5xl font-bold text-red-500 max-md:text-3xl">
          Partner universities
        </h1>
        <div className="my-10 flex w-full gap-5 text-center max-lg:flex-wrap max-sm:grid max-sm:grid-cols-2">
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              src={img3}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="">The University of Maryland</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              src={img1}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-80 object-contain"
            />
            <p className="">Maryland City Community College</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              src={img2}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="">University Of Maryland</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              src={img4}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="">Coppin State University</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              src={img5}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="">Morgan State University</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              src={img6}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-cover"
            />
            <p className="">Frostburg State University</p>
          </figure>
        </div>
      </section>
      <section className="mb-10 grid w-[90%] grid-cols-3 gap-5 max-md:grid-cols-1">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-slate-100">
              <span className="ml-5 mr-10">Degree programs</span>
            </AccordionTrigger>
            <AccordionContent className=" ">
              <p className="w-full bg-slate-300 p-3 text-center font-semibold">
                International students are eligible to study any of the
                following masters and phd programs at one of our
                partners universities.
              </p>
              <ul>
                <li className={dropdownTextClass}> Accounting</li>
                <li className={dropdownTextClass}>
                  {" "}
                  Artificial Intelligence for Business.
                </li>
                <li className={dropdownTextClass}>
                  {" "}
                  Applied Molecular Biology and Biochemistry
                </li>
                <li className={dropdownTextClass}> Architecture </li>
                <li className={dropdownTextClass}> Business Administration</li>
                <li className={dropdownTextClass}> Business-Finance</li>
                <li className={dropdownTextClass}> Construction management </li>
                <li className={dropdownTextClass}> Cybersecurity </li>
                <li className={dropdownTextClass}> Civil engineering </li>
                <li className={dropdownTextClass}> Chemical Engineering </li>
                <li className={dropdownTextClass}> Computer engineering </li>
                <li className={dropdownTextClass}>
                  {" "}
                  Data analytics and visualization{" "}
                </li>
                <li className={dropdownTextClass}> Electrical engineering </li>
                <li className={dropdownTextClass}> Environmental science </li>
                <li className={dropdownTextClass}>
                  {" "}
                  Global journalism and communications{" "}
                </li>
                <li className={dropdownTextClass}>
                  {" "}
                  Global Affairs and Human Security
                </li>
                <li className={dropdownTextClass}> Health Administration</li>
                <li className={dropdownTextClass}> Hospitality management </li>
                <li className={dropdownTextClass}>
                  {" "}
                  Information systems/Technology{" "}
                </li>
                <li className={dropdownTextClass}> International business </li>
                <li className={dropdownTextClass}> Management </li>
                <li className={dropdownTextClass}> Marketing </li>
                <li className={dropdownTextClass}> Mechanical Engineering</li>
                <li className={dropdownTextClass}> Nursing </li>
                <li className={dropdownTextClass}> Project management </li>
                <li className={dropdownTextClass}> Public health </li>
                <li className={dropdownTextClass}> Social work </li>
                <li className={dropdownTextClass}> Urban transportation</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-slate-100">
              <span className="ml-5 mr-10">Admission requirements</span>
            </AccordionTrigger>
            <AccordionContent className=" ">
              <p className="w-full bg-slate-300 p-3 font-semibold">
                International students must meet the following
                admission requirements.
              </p>
              <ul>
                <li className={dropdownTextClass + "text-start"}>
                  {" "}
                  <ul className="my-2 flex list-inside list-disc flex-col items-start justify-start px-5">
                    <li>
                      Bachelor degree certificate and transcript (For Masters
                      programs)
                    </li>
                    <li>
                      Masters degree certificate and transcript(For PhD
                      programs)
                    </li>
                  </ul>
                  <li>
                    Only original scanned copies of bachelor or masters degree
                    certificates and transcripts are accepted.
                  </li>
                </li>
                <li className={dropdownTextClass}>
                  <span className="font-bold mr-2">
                  IELTS/TOEFL: 
                  </span>
                  To be eligible for a bachelors or a masters
                  degree program at one of our partner universities on a
                  state-funded scholarship, international students with degree
                  certificates and transcripts in English language are not
                  required to submit an English language proficiency
                  certificate, such as IELTS or TOEFL. However, international
                  students with degree certificates and transcripts in a foreign
                  language (Not in English language) must submit an IELTS or
                  TOEFL certificate.
                  <ul className="my-3 w-full text-center">
                    <li>
                      - IELTS:
                      <a
                        href={"https://ielts.org"}
                        target="_blank"
                        className="ml-2 text-blue-800"
                      >
                        https://ielts.org
                      </a>
                    </li>
                    <li>
                      - TOEFL:
                      <a
                        href={"https://www.ets.org/toefl.html"}
                        target="_blank"
                        className="ml-2 text-blue-800"
                      >
                        https://www.ets.org/toefl.html
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={dropdownTextClass + " flex flex-col gap-5"}>
                  {" "}
                  <span>
                  <span className="font-bold mr-2">
                  Credential Evaluation:
                  </span>
                    It is mandatory for all international
                    students to submit an evaluation report of their academic
                    credentials in other to be eligible for admission and a
                    scholarship to study at one of our partner universities.
                  </span>
                  <span>
                    An academic credential evaluation in the United States is a
                    process where an academic evaluation agency in the United
                    States compares your academic records from your home country
                    to the U.S. academic equivalents. This evaluation confirms
                    the authenticity of your academic transcripts, certificates,
                    recognizes the status of the academic document issuing
                    institution, and determines the U.S equivalency of your
                    program of study. It provides detailed information on
                    individual course credits, including the U.S. equivalent of
                    course titles, grade points average (GPA). These evaluations
                    help universities in the U.S understand and assess your
                    educational background on par with U.S. academic standards.
                  </span>
                  <span>
                    International students can get their academic documents
                    evaluated and verified by an academic evaluation
                    service in Maryland
                  </span>
                </li>

                <li className={dropdownTextClass}>
                  {" "}
                  Statement of purpose: A personal statement, that tells the
                  admissions committee who you are, what your academic and
                  professional interests are, how you will add value to your
                  chosen degree program and how the degree program aligns with
                  your career goals.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-slate-100">
              <span className="ml-5 mr-10">Admission deadline</span>
            </AccordionTrigger>
            <AccordionContent className="text-lg">content</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
