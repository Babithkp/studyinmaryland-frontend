import studentsImg from "/scholarshipStudents.jpg"
import { useEffect } from "react";import HomeSlider from "./com/objects/HomeSlider";
export default function Scholarships() {
  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const myParam = url.get("referral");
    console.log(myParam);
    if (myParam) {
      if (
        !localStorage.getItem("referral") ||
        localStorage.getItem("referral") !== myParam
      ) {
        localStorage.setItem("referral", JSON.stringify(myParam));
      }
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4 font-medium">
      <figure>
          <img src={studentsImg} alt="Students" loading="lazy"/>
        </figure>
        <article>
          <p className="my-10 text-3xl font-bold text-red-500 max-md:text-3xl">
            Overview
          </p>
          <p className="text-md my-5">
            The state of Maryland, in collaboration with public universities,
            has invested millions of dollars in the Study-In-Maryland
            scholarship initiative to support international students,
            particularly those from developing countries with limited financial
            resources. This scholarship initiative aims to help these students
            achieve their dream of studying in the United States. The
            scholarship program has significantly contributed to the influx of
            international students in Maryland and represents a
            long-term investment plan, as international students have played a
            major role in shaping the U.S economy and Communities over the past
            decade.
          </p>

          <p className="text-md my-5">
            In line with our partnership with the Maryland state department of
            education to promote Maryland as a top study destination for
            international students, the Study-In-Maryland scholarship initiative
            aids up to 2,000 international students annually with a full
            scholarship to study an eligible masters or phd degree program at a
            partner university in Maryland, USA.
          </p>
          <p className="my-10 text-3xl font-bold text-red-500 max-md:text-3xl">
            Scholarship Details
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                <span className="text-lg font-bold">Scholarship Name:</span>
                <p>Study-In-Maryland Scholarship.</p>
              </li>
              <li>
                <span className="text-lg font-bold">Host:</span>
                <p>Maryland state department of education.</p>
              </li>
              <li>
                <span className="text-lg font-bold">Host Country:</span>
                <p>United States.</p>
              </li>
              <li>
                <span className="text-lg font-bold">Eligible Countries:</span>
                <p>Worldwide.</p>
              </li>
              <li>
                <span className="text-lg font-bold">Eligible Candidates:</span>
                <p>
                  International students with bachelors or masters degree
                  certificates.
                </p>
              </li>
              <li>
                <span className="text-lg font-bold">Scholarship Benefits:</span>
                <p>
                  Direct admission to study an eligible masters or phd degree
                  program at a partner university.
                  <br />
                  Covers full tuition and accommodation fees for the entire
                  duration of the Masters or PhD program at a partner
                  university.
                </p>
              </li>
              <li>
                <span className="text-lg font-bold">Age Limit:</span>
                <p>40 years.</p>
              </li>
              <li>
                <span className="text-lg font-bold">Application Deadline:</span>
                <p>September 30th, 2024.</p>
              </li>
            </ul>
          </div>
          <p className="my-10 text-3xl font-bold text-red-500 max-md:text-3xl">
            Application Requirements
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc">
              <li>
                <span className="text-lg font-bold">For Masters Program:</span>
                <p>Bachelors degree certificate and transcript.</p>
              </li>
              <li>
                <span className="text-lg font-bold">For PhD Program:</span>
                <p>Masters degree certificate and transcript.</p>
              </li>
            </ul>
          </div>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                Official English translated copy of acdemic transcripts from the
                Maryland academic evaluation center. MAEC (Only required for
                academic transcripts that are not in English).
              </li>

              <li>
                Official translated copy of birth certificate from Maryland
                academic evaluation center MAEC. (Only required for birth
                certificates that are not in English.).
              </li>
              <li>
                <span className="text-lg font-bold">
                  Academic credentials evaluation report from the Maryland
                  academic evaluation center MAEC:{" "}
                </span>
                (This credential evaluation report shows that the U.S
                equivalency of your courses and gpa has been evaluated, and that
                the authenticity of your degree certificate and transcripts has
                been verified by an official academic credential evaluation
                service in Maryland, United States.).
              </li>
              <li>
                English language proficiency test result from{" "}
                <a
                  href="http://www.ielts.org"
                  className="underline text-blue-600"
                  target="_blank"
                >
                  IELTS
                </a>
                 _ or _ 
                <a
                  href="http://www.ets.org/toefl.html"
                  className="underline text-blue-600"
                  target="_blank"
                >
                  TOEFL
                </a>
                ( This is only required for international students whose degree
                certificates and transcripts are not in English language. The
                IELTS or TOEFL is not a mandatory requirement for international
                students whose degree certificate and transcripts are in
                English.).
              </li>
              <li>
                Birth certificate issued by relevant government authorities in
                your home country.
              </li>
              <li>Motivation letter/personal statement.</li>
              <li>
                Identification document: (Accepted means of identification can
                be a copy of your international passport, national identity
                card, or a driver’s license.).
              </li>
              <li>
                Recommendations or Reference letter from your previous or
                current employer or an advisor, representative of your academic
                institution.
              </li>
            </ul>
          </div>
          <div className="my-10 mt-11">
            <a
              href="applicationPortal"
              className="rounded-md bg-red-500 px-9 py-3 font-semibold text-white  hover:bg-red-600 "
            >
              Apply
            </a>
          </div>
        </article>
      </section>
      <section className="w-[95%] text-white newFont my-5">
        <HomeSlider />
      </section>
    </main>
  );
}
