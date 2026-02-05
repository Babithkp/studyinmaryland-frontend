export default function ApplicationPortal() {
  return (
    <main className="flex items-center justify-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4 font-medium">
        <article className="">
          <h1 className="my-10 text-5xl font-bold text-yellow-500 max-md:text-3xl">
            How To Apply:
          </h1>
          <p className="text-md my-5">
            These are are the guidelines on how to apply for the duales studienstipendium scholarship to pursue an eligible bachelor or masters degree dual study program at one of our partner universities.
          </p>
          <p className="text-md my-5">
            The Duales Studienstipendium scholarship recipients are automatically admitted to study their chosen dual study programs at one of our partner universities in Germany.
          </p>
          <p className="text-md my-5">
            Applicants would have to fill the online application form and upload the following documents on the application portal to successfully submit their scholarship application.
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                Upload the official German translated copy of your high school certificate or bachelor degree certificate from ITS.
              </li>
              <li>
                Upload the official German translated copy of your high school transcript or bachelor degree transcript from ITS
              </li>
              <li>
                Upload the official translated copy of your birth certificate from ITS
              </li>
              <li>
                Upload the official german translated copy of your statement of purpose from 
                ITS
              </li>
              <li>
                Upload a the official german translated copy of your recommendation or reference letter from ITS
              </li>
              <li>
              Upload identification document: (Accepted means of identification can be a copy of your international passport, national identity card, or a driver’s license).
              </li>
            </ul>
          </div>
        </article>
        <div className="my-10 w-full justify-center flex ">
          <a
            href={"applicationPortal/addApplication/"}
            className="h-fit w-fit rounded-md bg-yellow-500 hover:bg-yellow-600 px-3 py-2 text-lg uppercase text-white "
          >
            Application portal
          </a>
        </div>
      </section>
    </main>
  );
}
