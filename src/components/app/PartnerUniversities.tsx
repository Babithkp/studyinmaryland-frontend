import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import img1 from "/universitiesLogo/bccc.png";
import img2 from "/universitiesLogo/marylandpng.png";
import img3 from "/universitiesLogo/universityOfBaltimorejpg.jpg";
import img4 from "/universitiesLogo/coppin.svg";
import img5 from "/universitiesLogo/morgan.png";
import img6 from "/universitiesLogo/frostburg.png";

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
          We have collaborated with some of the prestigious public universities
          in Maryland to help international students globally to achieve their
          dreams of studying in United States.
        </p>
        <div className="my-10 flex w-full gap-5 text-center max-lg:flex-wrap max-sm:grid max-sm:grid-cols-2 ">
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              loading="lazy"
              src={img3}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="">The University of Baltimore</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              loading="lazy"
              src={img1}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-80 object-contain"
            />
            <p className="">Maryland City Community College</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              loading="lazy"
              src={img2}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="">University Of Maryland</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              loading="lazy"
              src={img4}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="">Coppin State University</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              loading="lazy"
              src={img5}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-contain"
            />
            <p className="">Morgan State University</p>
          </figure>
          <figure className="flex flex-col items-center justify-center max-sm:w-full">
            <img
              loading="lazy"
              src={img6}
              alt="college"
              className="max-md:w-26 max-md:h-26 h-40 w-40 object-cover"
            />
            <p className="">Frostburg State University</p>
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
                International students can apply for a scholarship to study any
                of the following eligible masters and phd degree programs at one
                of our partner universities.
              </p>
              <ul className="">
                <li className={dropdownTextClass}> Accounting</li>
                <li className={dropdownTextClass}>
                  Artificial Intelligence for Business.
                </li>
                <li className={dropdownTextClass}>
                  Applied Molecular Biology and Biochemistry
                </li>
                <li className={dropdownTextClass}> Architecture </li>
                <li className={dropdownTextClass}> Business Administration</li>
                <li className={dropdownTextClass}> Business-Finance</li>
                <li className={dropdownTextClass}> Construction Management </li>
                <li className={dropdownTextClass}> Cybersecurity </li>
                <li className={dropdownTextClass}> Civil Engineering </li>
                <li className={dropdownTextClass}> Chemical Engineering </li>
                <li className={dropdownTextClass}> Computer Engineering </li>
                <li className={dropdownTextClass}>
                  Data Analytics And Visualization
                </li>
                <li className={dropdownTextClass}> Electrical Angineering </li>
                <li className={dropdownTextClass}> Environmental Science </li>
                <li className={dropdownTextClass}>
                  Global Journalism And Communications
                </li>
                <li className={dropdownTextClass}>
                  Global Affairs and Human Security
                </li>
                <li className={dropdownTextClass}> Health Administration</li>
                <li className={dropdownTextClass}> Hospitality Management </li>
                <li className={dropdownTextClass}>
                  Information Systems/Technology
                </li>
                <li className={dropdownTextClass}> International Business </li>
                <li className={dropdownTextClass}> Management </li>
                <li className={dropdownTextClass}> Marketing </li>
                <li className={dropdownTextClass}> Mechanical Engineering</li>
                <li className={dropdownTextClass}> Nursing </li>
                <li className={dropdownTextClass}> Project Management </li>
                <li className={dropdownTextClass}> Public Health </li>
                <li className={dropdownTextClass}> Social Work </li>
                <li className={dropdownTextClass}> Urban Transportation</li>
              </ul>
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
                    Masters programs duration:
                  </span>
                  <br />2 Years full-time.
                </li>
                <li className={dropdownTextClass}>
                  <span className="font-bold mr-2">PhD programs duration:</span>
                  <br />5 Years full-time. (Includes preparation and
                  presentation of a dissertation proposal, dissertation
                  research, and defense of final dissertation).
                </li>
                <li className={dropdownTextClass}>
                  <span className="font-bold mr-2">
                    Masters and PhD programs start dates:
                  </span>
                  <br />
                  January 2026 (Spring Semester) <br />
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
                International students must submit the following requirements to
                apply for a scholarship to study at a partner university.
              </p>
              <ul>
                <li className={dropdownTextClass + "text-start"}>
                  <ul className="my-2 flex list-inside list-disc flex-col  justify-start px-5 gap-5">
                    <li>
                      Bachelor degree certificate and transcript
                      <br />
                      (For Masters programs)
                    </li>
                    <li>
                      Masters degree certificate and transcript
                      <br />
                      (For PhD programs)
                    </li>
                  </ul>
                  <li>
                    Only the original scanned copies of bachelors or masters
                    degree certificates and transcripts are accepted.
                  </li>
                </li>
                <li className={dropdownTextClass}>
                  <span className="font-bold mr-2">IELTS/TOEFL:</span>
                  <br />
                  To be eligible for a scholarship to study a bachelors or a
                  masters degree program at one of our partner universities on a
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
                        className="ml-2 text-blue-600"
                      >
                        www.ielts.org 
                      </a>
                    </li>
                    <li>
                      - TOEFL:
                      <a
                        href={"https://www.ets.org/toefl.html"}
                        target="_blank"
                        className="ml-2 text-blue-600"
                      >
                        www.ets.org
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={dropdownTextClass + " flex flex-col gap-5"}>
                  <span>
                    <span className="font-bold mr-2">
                      Credential Evaluation:
                    </span>
                    <br />
                    It is mandatory for all international students to submit an
                    evaluation report of their academic credentials to
                    be eligible for admission and a scholarship to study at one
                    of our partner universities.
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
                    International students would have to get their academic
                    certificates and transcripts evaluated and verified online by the
                    Maryland academic evaluation center.
                  </span>
                  <span className="mb-2">
                    - MSAC:
                    <a
                      href="https://msac.us"
                      target="_blank"
                      className="underline-offset-2 underline text-blue-600"
                    >
                      {" "}
                      www.msac.us
                    </a>
                  </span>
                </li>

                <li className={dropdownTextClass}>
                  <span className="font-bold mr-2">Statement of Purpose:</span>
                  <br />A personal statement, that tells the admissions
                  committee who you are, what your academic and professional
                  interests are, how you will add value to your chosen degree
                  program and how the degree program aligns with your career
                  goals.
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
                </li>
                <li className={dropdownTextClass + " flex flex-col gap-3"}>
                  <p>
                    <span className="font-bold mr-2">
                      Official copy of a certified translation of your academic
                      documents and birth certificate:
                    </span>
                    <br />
                    This is a mandatory requirement only for international
                    students from non English speaking countries.
                  </p>
                  <p>
                    To apply for the Munich-bildungsauslander scholarship to study at a
                    partner university, international students from
                    non-English-speaking countries must have their academic
                    transcripts and birth certificates translated into English
                    by an official translator in Maryland, United States, if
                    these documents are not already in English. However,
                    international students whose academic transcripts and birth
                    certificates are in English are exempt from this
                    requirement.
                  </p>
                  <p>
                    International students can get their documents translated
                    online at the Maryland academic evaluation center.
                  </p>
                  <p>
                    - MSAC:
                    <a
                      href="https://msac.us"
                      target="_blank"
                      className="underline-offset-2 underline text-blue-600"
                    >
                      {" "}
                      www.msac.us
                    </a>
                  </p>
                </li>
                <li className={dropdownTextClass}>
                  <p>
                    <span className="font-bold mr-2">
                      Recommendation Letter or Reference Letter:
                    </span>
                    <br />A recommendation letter or references letter from your
                    current or previous employer or an academic supervisor or
                    representative at your previous academic institution can
                    help boost your application chances of securing a full
                    scholarship to study a masters or phd program at a partner
                    university.
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
                All international students would have to submit their
                scholarship application to study at one of our partner
                universities in Maryland before the application deadline.
              </p>
              <ul>
                <li className={dropdownTextClass + " font-bold"}>
                For the spring semester(January 2026)
                </li>
                <li className={dropdownTextClass}>
                  Application deadline: November 10th, 2025.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
