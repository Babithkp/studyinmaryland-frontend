import studentsImg from "../../assets/scholarshipStudents.jpeg";
import { useEffect } from "react";
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
        <figure className="w-full h-full flex justify-center ">
          <img src={studentsImg} alt="Students" loading="lazy" />
        </figure>
        <article>
          <p className="my-10 text-3xl font-bold text-yellow-500 max-md:text-3xl">
            Overview
          </p>
          <p className="text-md my-5">
            The Duales Studienstipendium Scholarship is a forward-thinking international education initiative funded by the Federal Institute for Vocational Education and Training (Bundesinstitut für Berufsbildung – BIBB). It was created to promote Germany’s globally respected dual study system, which uniquely integrates academic learning with hands-on, paid workplace training. Since its inception in 2023, the scholarship has supported over 4,500 international students from across the world, opening structured and reliable pathways into Germany’s education and employment ecosystem.
          </p>

          <p className="text-md my-5">
            At the heart of the program is a clear mission: not only to enable students to study in Germany, but to prepare them for rapid and sustainable entry into the German job market. By combining classroom instruction with real-world professional experience, scholars graduate with practical skills that are immediately relevant to employers. In parallel, students gain a strong command of the German language while studying and working, giving them a critical advantage for long-term career growth and social integration in Germany.

          </p>
          <p className="text-md my-5">
            Beyond funding, the Duales Studienstipendium represents opportunity, stability, and future readiness. It bridges the gap between education and employment, reduces the risks often associated with international study, and aligns global talent with Germany’s workforce needs. Through strong institutional partnerships and a structured support framework, the scholarship empowers students to build meaningful careers, contribute to the German economy, and become globally competitive professionals in an increasingly interconnected world.

          </p>
          <p className="my-10 text-3xl font-bold text-yellow-500 max-md:text-3xl">
            Scholarship Details
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                <span className="text-lg font-bold">Scholarship Name:</span>
                <p>Duales Studienstipendium Scholarship.</p>
              </li>
              <li>
                <span className="text-lg font-bold">Host:</span>
                <p>Federal Institute for Vocational Education and Training (Bundesinstitut für Berufsbildung – BIBB).</p>
              </li>
              <li>
                <span className="text-lg font-bold">Host Country:</span>
                <p>Germany.</p>
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
                  International students with a high school certificate or International students with bachelor degree certificate.
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
                <p>May 30th, 2026.</p>
              </li>
            </ul>
          </div>
          <p className="my-10 text-3xl font-bold text-yellow-500 max-md:text-3xl">
            Benefits of the Duales Studienstipendium.
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                <span className="text-lg  font-bold">Tuition-Free Study in Germany:</span>
                <p>Complete your bachelor or degree program in Germany with no tuition fees.</p>
              </li>
              <li>
                <p>Guaranteed monthly stipend of €1,200 to support your living expenses throughout the program.</p>
              </li>
              <li>
                <span className="text-lg  font-bold">Paid Work Directly Related to Your Field:</span>
                <p>Gain professional work experience through paid employment aligned with your academic field, not casual student jobs.</p>
              </li>
              <li>
                <span className="text-lg  font-bold">Guaranteed Career & Employment Pathway:</span>
                <p>Job placement with university partner companies during  graduation.</p>
              </li>
              <li>
                <p>Practical Industry Experience in Germany
                  Graduate with valuable hands-on experience in Germany’s world-class work environment.</p>
              </li>
              <li>
                <p>German Language Training Included
                Learn German as part of your academic curriculum for better integration and career growth.</p>
              </li>
              <li>
                <span className="text-lg  font-bold">No blocked account requirement:</span>
                <p>Duales studienstipendium recipients are exempted from providing a blocked account in Germany when applying for their student visas.</p>
              </li>
            </ul>
          </div>
          <p className="my-10 text-3xl font-bold text-yellow-500 max-md:text-3xl">
            Application Requirements
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                <span className="text-lg  font-bold">Bachelor’s degree programs:</span>
                <p>High school certificate and transcript.(Must be officially translated to German by the German international translation service..ITS)</p>
              </li>
              <li>
                <span className="text-lg font-bold">Master’s degree programs:</span>
                <p>Bachelor’s degree certificate and transcript. (Must be officially translated to German language by the German international translation service. ITS)</p>
              </li>
              <li>
                <p>Copy of birth certificate issued by the relevant authority in your home country. (Must be officially translated to German language by the German international translation services.)</p>
              </li>
              <li>
                <p>A Statement of Purpose explaining your motivation for applying and why you wish to be considered for the Duales Studienstipendium scholarship.( Must be officially translated by German international translation services.)</p>
              </li>
              <li>
                <p>A recommendation letter or references letter from your current or previous employer or an academic supervisor or representative at your current or previous academic institution. (Must be officially by the German international translation services.)</p>
              </li>
              <li>
                <p>A copy of your ID document is required ( International passport, Driver’s license, or National identity card are accepted).</p>
              </li>
              <li>
                <p>All scholarship application documents except the copy of your Identity documents must be translated to German language by the German international translation service. ITS</p>
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
                    MSAC{ }
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
