import AgentSlide from "./com/objects/AgentSlide";import referralProImg from "/conference.jpg";
export default function ReferralProgram() {
  return (
    <main className="flex items-center justify-center ">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4 font-medium max-w-[1280px]">
        <figure>
          <img src={referralProImg} alt="Students" loading="lazy" />
        </figure>
        <article>
          <p className="my-10 text-3xl font-bold text-yellow-500 max-md:text-2xl">
            Partner With Us!
          </p>

          <p className="text-md my-5">
            Become a valued study in Maryland partner and join us in our mission
            to establish Maryland, United States as a top study destination for
            international students.
          </p>
          <p className="text-md my-5">
            Annually, over 2,000 students from eligible countries benefit from
            the Study-In-Maryland scholarship program thanks to our student
            recruitment partners who has played a significant role in helping us
            recruit international students who have a strong academic background
            to pursue an eligible masters or phd degree program on a full
            scholarship at a partner university in Maryland, USA
          </p>
          <p className="text-md my-5">
            We offer an incredible opportunity for you to earn generous
            incentives by recruiting prospective graduate students with limited
            financial resources to study an eligible masters or phd degree
            program at a partner university in Maryland, United States through
            the Study-In-Maryland scholarship program.
          </p>
          <p className="my-10 text-3xl font-bold text-yellow-500 max-md:text-3xl">
            Why Recruit Students to Study in Maryland?
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                <p className="text-lg font-bold">Top-Tier Universities:</p>
                <p>
                  Our partner universities are renowned for their academic
                  excellence, diverse programs, and vibrant campus life.
                </p>
              </li>
              <li>
                <p className="text-lg font-bold">Scholarship Opportunities:</p>
                <p>
                  Referred students can apply and receive a Study-In-Maryland
                  full scholarship to study at one of our partner universities.
                </p>
              </li>
              <li>
                <p className="text-lg font-bold">Supportive Community:</p>
                <p>
                  International students will find a welcoming community and
                  ample support to help them thrive academically and socially.
                </p>
              </li>
            </ul>
          </div>
          <p className="my-10 text-3xl font-bold text-yellow-500 max-md:text-3xl">
            Benefits of Becoming a Partner
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                <p className="text-lg font-bold">Make a Difference:</p>
                <p>
                  Help students achieve their dreams of studying in the United
                  States and be a part of their success stories.
                </p>
              </li>
              <li>
                <p className="text-lg font-bold">Easy to Participate:</p>
                <p>
                  Our program is designed to be simple and straightforward. No
                  extensive paperwork or complex procedures.
                </p>
              </li>
              <li>
                <p className="text-lg font-bold">Generous Rewards:</p>
                <p>
                  Earn a substantial financial reward for each student you
                  recruit who successfully enrolls at a partner university.
                </p>
              </li>
            </ul>
          </div>
          <p className="text-md my-10">
            By referring international students to study in Maryland, you’re not
            just earning rewards; you’re opening doors to their future. Let’s
            make a difference together!
          </p>
          <p className="my-10 text-3xl font-bold text-yellow-500 max-md:text-3xl">
            How to Get Started
          </p>
          <div className="text-md my-5">
            <p>
              To partner with us contact:
              <span className="font-bold"> partner@studyinmaryland.org</span>
            </p>
            <p className="text-md my-5">
              Join the Study in Maryland ambassador program today and start
              earning while making a positive impact on students' lives!
            </p>
          </div>

          <div className="text-white my-14">
            <AgentSlide />
          </div>
        </article>
      </section>
    </main>
  );
}
