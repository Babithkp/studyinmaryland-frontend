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
            Join our vision in making the state of Maryland one of the top study
            destination for international students in the world.
          </p>

          <p className="text-md my-5">
            Become a study in Maryland partner agent and recruit international
            students to study a postgraduate or doctoral degree program on a
            fully funded scholarship at one of our partner universities in
            Maryland, United States.
          </p>

          <p className="text-md my-5">
            Our partner agents are remunerated generously for each student that
            has been recruited to by them to study a masters or PhD degree
            program on a fully funded scholarship at one of our partner
            universities.
          </p>

          <p className="text-md my-5">
            To become an international student recruitment agent for study in
            Maryland
          </p>

          <p className="text-md my-5">
            Download and review the recruitment agent partnership terms and
            agreement conditions.
          </p>

          <p className="text-md my-5">
            Recruitment Agents who has understood the terms of our partnership
            agreement can on board as a study in Maryland agent by filling the
            online partnership form and click submit to proceed.
          </p>

          <p className="text-md my-5">
            Our representative will be in touch with you once your registration
            form is received.
          </p>
        </article>
      </section>
      <section className="w-[95%] text-white newFont ">
      <AgentSlide/>
      </section>
    </main>
  );
}
