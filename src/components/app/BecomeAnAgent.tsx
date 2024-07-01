import AgentSlide from "./com/objects/AgentSlide";
export default function BecomeAnAgent() {
  return (
    <main className="flex items-center flex-col justify-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="my-10 text-5xl font-bold text-red-500 max-md:text-3xl">
            Become an agent
          </h1>
          <p className="text-md my-5">
            Join the Study in Maryland Agent Partnership Program and recruit
            International Students to study at one of our prestigious partner
            universities on a full scholarship!
          </p>
          <p className="my-10 text-3xl font-bold text-red-500 max-md:text-3xl">
            Benefits of the Partnership
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc">
              <li>
                <p className="text-lg font-bold">Fully Funded Scholarships:</p>
                <p>
                  Recruit international students to pursue master's or PhD
                  degrees at one of our partner universities in Maryland, USA,
                  with scholarships covering full tuition and accommodation
                  fees.
                </p>
              </li>
              <li>
                <p className="text-lg font-bold">Generous Remuneration:</p>
                <p>
                  Our partner agents receive substantial payments for each
                  student they successfully recruit who enrolls at one of our
                  partner universities.
                </p>
              </li>
              <li>
                <p className="text-lg font-bold">Impactful Contribution:</p>
                <p>
                  Help students achieve their dreams of studying in the United
                  States by providing them with life-changing opportunities
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="w-[95%] text-white newFont ">
        <AgentSlide />
      </section>
    </main>
  );
}
