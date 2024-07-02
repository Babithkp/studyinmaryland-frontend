import HomeSlider from "./com/objects/HomeSlider";
export default function Scholarships() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4 font-medium">
        <article>
          <p className="my-10 text-3xl font-bold text-red-500 max-md:text-3xl">
            Overview
          </p>
          <p className="text-md my-5">
            The state of Maryland, in collaboration with public universities,
            has invested millions of dollars in the Study in Maryland
            scholarship initiative to support international students,
            particularly those from developing countries with limited financial
            resources. This scholarship initiative aims to help these students
            achieve their dream of studying in the United States. The
            scholarship program has significantly contributed to the influx of
            international students across various U.S. cities and represents a
            long-term investment plan, as international students have played a
            major role in shaping U.S. communities and economies over the past
            decade.
          </p>

          <p className="text-md my-5">
            The Study in Maryland scholarship aids up to 2,000 international
            students annually with fully funded scholarships to study a Masters
            or PhD degree program at a public university in the state of
            Maryland.
          </p>

          <p className="text-md my-5">
            To further enhance and promote opportunities for foreign students,
            our organization has partnered with the Maryland State Department of
            Education to offer the Study in Maryland scholarship. This
            scholarship is aimed at graduate international students with strong
            academic backgrounds who wish to study in Maryland.
          </p>
          <p className="my-10 text-3xl font-bold text-red-500 max-md:text-3xl">
            Scholarship Details
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                <span className="text-lg font-bold">Scholarship Name:</span>
                <p>Study in Maryland Scholarship</p>
              </li>
              <li>
                <span className="text-lg font-bold">Host:</span>
                <p>
                  Study in Maryland and Maryland State Department of Education
                </p>
              </li>
              <li>
                <span className="text-lg font-bold">Host Country:</span>
                <p>United States</p>
              </li>
              <li>
                <span className="text-lg font-bold">Eligible Countries:</span>
                <p>Worldwide</p>
              </li>
              <li>
                <span className="text-lg font-bold">Eligible Candidates:</span>
                <p>
                  International students with bachelors or masters degree
                  certificates
                </p>
              </li>
              <li>
                <span className="text-lg font-bold">Scholarship Benefits:</span>
                <p>
                  {" "}
                  Covers full tuition and accommodation fees for the entire
                  duration of the Masters or PhD program at a partner university
                </p>
              </li>
              <li>
                <span className="text-lg font-bold">Age Limit:</span>
                <p>40 years</p>
              </li>
              <li>
                <span className="text-lg font-bold">Application Deadline:</span>
                <p>September 30th, 2024</p>
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
                <p>Bachelors degree certificate and transcript</p>
              </li>
              <li>
                <span className="text-lg font-bold">For PhD Program:</span>
                <p>Masters degree certificate and transcript</p>
              </li>
            </ul>
          </div>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                Official English translated copies of degree certificates and
                transcripts from ars.org (Only required for academic
                certificates and transcripts not in English language).
              </li>

              <li>
                Official translated copies of degree certificates and
                transcripts from academic records service ars.org
              </li>
              <li>
                Academic credentials evaluation report from the Maryland
                academic records service ars.org (This report shows that the U.S
                equivalency of your courses and gpa has been evaluated, and that
                the authenticity of your degree certificate and transcripts has
                been verified by an official academic credential evaluation
                service in the United States.).
              </li>
              <li>
                English language proficiency test result from{" "}
                <a
                  href="www.ielts.org/ www.ets.org/toefl.html"
                  className="underline text-blue-600"
                >
                  IELTS or TOEFL
                </a>
                ( This is only required for international students with degree
                certificates and transcripts that are not in English language).
              </li>
              <li>
                Birth certificate issued by relevant government authorities in
                your home country.
              </li>
              <li>Motivation letter/personal statement</li>
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
          <a
            href="applicationPortal"
            className="rounded-md bg-red-500 px-9 py-3 font-semibold text-white  hover:bg-red-600 "
          >
            Apply
          </a>
        </article>
      </section>
      <section className="w-[95%] text-white newFont my-5">
        <HomeSlider />
      </section>
    </main>
  );
}
