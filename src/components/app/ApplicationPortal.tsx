export default function ApplicationPortal() {  return (
    <main className="flex items-center justify-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4 font-medium">
        <article>
          <h1 className="my-10 text-5xl font-bold text-red-500 max-md:text-3xl">
            How To Apply:
          </h1>
          <p className="text-md my-5">
            The following guide are the requirements to apply for the study in
            Maryland scholarship to study a masters or PhD degree program at one
            of our partner universities.
          </p>
          <p className="text-md my-5">
            The study in Maryland scholarship recipients are automatically
            admitted to study their chosen programs at one of our partner
            universities in the state of Maryland.
          </p>
          <p className="text-md my-5">
            International students would have to fill the online application
            form and upload the following documents on the application portal to
            successfully submit their study in Maryland scholarship and
            admission application.
          </p>
          <div className="text-md my-5">
            Scholarship Details
            <ul className="ml-5 list-disc">
              <li>
                The original scanned copy of your bachelor or masters degree
                certificate and transcript on the application portal.
              </li>
              <li>
                Academic credentials evaluation and verification report of
                degree certificate and transcripts from ars.org
              </li>
              <li>
                IELTS or TOEFL result ( This is only required for students with
                a degree certificates and transcripts that are not in English
                language.)
              </li>
              <li>
                Official English translated copy of your degree certificates and
                transcripts from ars.org (This is only required for students
                with a degree certificates that are not in English language).
              </li>
              <li>
                Official copy of your birth certificate from the relevant
                issuing authority in your home country.
              </li>
              <li>A motivation letter or statement of purpose.</li>
              <li>
                Identification document: (Accepted means of identification can
                be a copy of your international passport, national identity
                card, or a driver’s license.)
              </li>
              <li>
                Recommendations or Reference letter from your previous or
                current employer or an advisor, representative of your academic
                institution.
              </li>
            </ul>
          </div>
        </article>
        <a
          href={"applicationPortal/addApplication/"}
          className="h-fit w-fit rounded-md bg-red-500 hover:bg-red-600 px-3 py-2 text-lg uppercase text-white"
        >
          Application portal
        </a>
      </section>
    </main>
  );
}
