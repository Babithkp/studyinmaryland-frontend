import studentsImg from "/scholarshipStudents.jpg";import { useEffect } from "react";
import HomeSlider from "./com/objects/HomeSlider";
export default function Scholarships() {
  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const myParam = url.get("referral");
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
          <img src={studentsImg} alt="Students" loading="lazy" />
        </figure>
        <article>
          <p className="my-10 text-3xl font-bold text-yellow-500 max-md:text-3xl">
            Overview
          </p>
          <p className="text-md my-5">
            The Maryland state department of education in collaboration with
            prestigious public universities in Maryland has invested millions of
            dollars in the Munich-bildungsauslander scholarship initiative to support
            international students, particularly those from developing countries
            with limited financial resources. This scholarship initiative aims
            to help these students achieve their dream of studying in the United
            States. The scholarship program has significantly contributed to the
            influx of international students in Maryland and represents a
            long-term investment plan, as international students have played a
            major role in shaping the U.S economy and communities over the past
            decade.
          </p>

          <p className="text-md my-5">
            In line with our partnership with the Maryland state department of
            education to promote Maryland as a top study destination for
            international students, the Munich-bildungsauslander scholarship initiative
            aids up to 2,000 international students annually with a full
            scholarship to study an eligible masters or phd degree program at a
            partner university in Maryland, USA.
          </p>
          <p className="my-10 text-3xl font-bold text-yellow-500 max-md:text-3xl">
            Scholarship Details
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                <span className="text-lg font-bold">Scholarship Name:</span>
                <p>Munich-bildungsauslander Scholarship.</p>
              </li>
              <li>
                <span className="text-lg font-bold">Host:</span>
                <p>The Maryland state department of education.</p>
              </li>
              <li>
                <span className="text-lg font-bold">Host Country:</span>
                <p>United States.</p>
              </li>
              <li>
                <span className="text-lg font-bold">Eligible Countries:</span>
                <p>
                  Citizens of the following countries are eligible to apply:
                  Algeria, Azerbaijan, Brazil, Botswana, Burkina Faso,
                  Bangladesh, Benin, China, Cameroon, Congo, Czechia, DR Congo,
                  Dominican Republic, Egypt, Gambia, Ghana, India, Indonesia,
                  Ivory Cost, Kazakhstan, Kenya, Lebanon, Liberia, Malawi,
                  Malaysia, Morocco, Nepal, Nigeria, Pakistan, Philippines,
                  Rwanda, Sierra Leone, Sri Lanka, South Africa, Tanzania,
                  Turkey, Tunisia, Uganda, Ukraine, Uzbekistan, Vietnam, Zambia,
                  Zimbabwe.
                </p>
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
                  Admission to study an eligible masters or phd degree program
                  at a partner university.
                </p>
                <p className="mt-3">
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
                <p>November 10th, 2025.</p>
              </li>
            </ul>
          </div>
          <p className="my-10 text-3xl font-bold text-yellow-500 max-md:text-3xl">
            Application Requirements
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                <span className="text-lg  font-bold">For Masters Program:</span>
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
                <span className="">
                  Academic credentials evaluation report from Maryland academic
                  evaluation center
                  <a
                    href="https://msac.us"
                    target="_blank"
                    className="underline-offset-2 underline text-blue-600"
                  >
                    {" "}
                    MSAC{}
                  </a>
                  :{" "}
                </span>
                (This credential evaluation report shows that the U.S
                equivalency of your courses and gpa has been evaluated according
                to U.S academic standards.)
              </li>

              <li>
                Academic verification report from Maryland academic evaluation
                center.
                <a
                  href="https://msac.us"
                  target="_blank"
                  className="underline-offset-2 underline text-blue-600"
                >
                  {" "}
                  MSAC
                </a>
                . (This report confirms that the authenticity of your degree
                certificate and transcripts has been verified by an official
                academic credential evaluation service in Maryland, United
                States).
              </li>

              <li>
                English language proficiency test result from{" "}
                <a
                  href="http://www.ielts.org"
                  className="underline text-blue-600"
                  target="_blank"
                >
                  IELTS
                </a>{" "}
                or{" "}
                <a
                  href="http://www.ets.org/toefl.html"
                  className="underline text-blue-600"
                  target="_blank"
                >
                  TOEFL{" "}
                </a>
                ( This is only required for international students whose degree
                certificates and transcripts are not in English language. 
                <a
                  href="http://www.ielts.org"
                  className="underline text-blue-600"
                  target="_blank"
                >
                  IELTS
                </a>{" "}
                or{" "}
                <a
                  href="http://www.ets.org/toefl.html"
                  className="underline text-blue-600"
                  target="_blank"
                >
                  TOEFL{" "}
                </a>
                is not a mandatory requirement for international students whose
                degree certificate and transcripts are in English).
              </li>
              <li>
                Birth certificate issued by relevant government authorities in
                your home country.
              </li>
              <li>Motivation letter/personal statement.</li>
              <li>
                Identification document: (Accepted means of identification can
                be a copy of your international passport, national identity
                card, or a driver’s license).
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
              className="rounded-md bg-yellow-500 px-9 py-3 font-semibold text-white  hover:bg-red-600 "
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
