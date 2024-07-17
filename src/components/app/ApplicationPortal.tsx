export default function ApplicationPortal() {  return (
    <main className="flex items-center justify-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4 font-medium">
        <article className="">
          <h1 className="my-10 text-5xl font-bold text-red-500 max-md:text-3xl">
            How To Apply:
          </h1>
          <p className="text-md my-5">
            These are are the guidelines to apply for the Study-In-Maryland
            scholarship to pursue an eligible masters or phd degree program at
            one of our partner universities.
          </p>
          <p className="text-md my-5">
            The Study-In-Maryland scholarship recipients are automatically
            admitted to study their chosen programs at one of our partner
            universities in the state of Maryland.
          </p>
          <p className="text-md my-5">
            International students would have to fill the online application
            form and upload the following documents on the application portal to
            successfully submit their Study-In-Maryland scholarship application.
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                Upload the original scanned copy of your bachelor or masters
                degree certificate and transcript on the application portal
                form.
              </li>
              <li>
                Upload your evaluation and verification report of degree
                certificate and transcripts from{" "}
                <a
                  href="https://maec.us"
                  target="_blank"
                  className="underline-offset-2 underline text-blue-800"
                >
                  MAEC
                </a>{" "}
                ( This is a mandatory requirement for all international
                students).
              </li>
              <li>
                Upload your IELTS or TOEFL test result from
                <a
                  href={"https://ielts.org"}
                  target="_blank"
                  className="ml-2 underline-offset-2 underline text-blue-800 mr-1"
                >
                  IELTS
                </a>
                or
                <a
                  href={"https://www.ets.org/"}
                  target="_blank"
                  className="ml-2 underline-offset-2 underline text-blue-800 mr-1"
                >
                  TOEFL
                </a>
                ( This is only required for students whose degree certificates
                and transcripts are not in English language)
              </li>
              <li>
                Upload the official English translated copy of your academic
                transcript and birth certificate from{" "}
                <a
                  href="https://maec.us"
                  target="_blank"
                  className="underline-offset-2 underline text-blue-800"
                >
                  MAEC
                </a>{" "}
                (This is only required for students whose birth certificates and
                academic transcripts are not in English language).
              </li>
              <li>
                Upload the official copy of your birth certificate from the
                relevant issuing authority in your home country.
              </li>
              <li>Upload your motivation letter or personal statement.</li>
              <li>
                Upload identification document: (Accepted means of
                identification can be a copy of your international passport,
                national identity card, or a driver’s license).
              </li>
              <li>
                Upload a recommendation or reference letter from your previous
                or current employer or an academic advisor from your academic
                institution.
              </li>
            </ul>
          </div>
        </article>
        <div className="my-10 w-full justify-center flex ">
          <a
            href={"applicationPortal/addApplication/"}
            className="h-fit w-fit rounded-md bg-red-500 hover:bg-red-600 px-3 py-2 text-lg uppercase text-white "
          >
            Application portal
          </a>
        </div>
      </section>
    </main>
  );
}
