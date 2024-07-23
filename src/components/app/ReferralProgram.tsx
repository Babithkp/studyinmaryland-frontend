import AgentSlide from "./com/objects/AgentSlide";
import referralProImg from "/conference.jpg";
export default function ReferralProgram() {
  return (
    <main className="flex items-center justify-center ">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4 font-medium max-w-[1280px]">
        <figure>
          <img src={referralProImg} alt="Students" loading="lazy" />
        </figure>
        <article>
          <p className="my-10 text-3xl font-bold text-red-500 max-md:text-2xl">
            Ambassador Program
          </p>

          <p className="text-md my-5">
            Become a valued study in Maryland ambassador and join us in our
            mission to establish Maryland, United States as a top study
            destination for international students.
          </p>
          <p className="text-md my-5">
            Annually, over 2,000 students from eligible countries benefit from
            the Study-In-Maryland scholarship program thanks to our ambassadors
            such as, study abroad consultants, education consultants,
            International student recruiters,scholarship recipients, and the
            individuals who has played a significant role in helping us recruit
            international students who have a strong academic background to
            pursue an eligible masters or phd degree program on a full
            scholarship at a partner university in Maryland, USA.
          </p>
          <p className="text-md my-5">
            We offer an incredible opportunity for you to earn generous
            incentives by referring international students to apply for a
            scholarship to study an eligible masters or phd degree program at a
            partner university through the Study-In-Maryland scholarship.
          </p>
          <p className="my-10 text-3xl font-bold text-red-500 max-md:text-3xl">
            How It Works
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                <p>
                  Join our ambassador referral program by signing up on our
                  website. It's quick and easy!
                </p>
              </li>
              <li>
                <p className="text-lg font-bold">Refer Students:</p>
                <p>
                  Share the opportunity to study in Maryland at one of our
                  prestigious partner universities with international students
                  who are looking to pursue a masters or phd degree program on a
                  fully funded scholarship in the United States. You can refer
                  students by sharing your unique referral link to our
                  scholarship application portal with your friends, colleagues
                  or on your social media platforms.
                </p>
              </li>
              <li>
                <p className="text-lg font-bold">Students Apply:</p>
                <p>
                  Once referred,ً students can apply for a scholarship to study
                  at one of our partner universities in Maryland on our
                  application portal for free. We offer a streamlined
                  application process to make it as simple as possible.
                </p>
              </li>
              <li>
                <p className="text-lg font-bold">Earn Rewards:</p>
                <p>
                  Earn substantial rewards for each student who enrolls at a
                  partner university.
                </p>
              </li>
            </ul>
          </div>
          <p className="my-10 text-3xl font-bold text-red-500 max-md:text-3xl">
            Why Refer Students to Study in Maryland?
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
          <p className="my-10 text-3xl font-bold text-red-500 max-md:text-3xl">
            Benefits of Joining the Ambassador Program
          </p>
          <div className="text-md my-5">
            <ul className="ml-5 list-disc flex flex-col gap-3">
              <li>
                <p className="text-lg font-bold">Generous Referral Payments:</p>
                <p>
                  For each student you refer who successfully enrolls at a
                  partner university, you will receive a referral payment of
                  $700. As our ambassador, the more students you refer, the more
                  you earn!
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
                <p className="text-lg font-bold">Make a Difference:</p>
                <p>
                  Help students achieve their dreams of studying in the United
                  States and be a part of their success stories.
                </p>
              </li>
            </ul>
          </div>
          <p className="text-md my-10">
            By referring international students to study in Maryland, you’re not
            just earning rewards; you’re opening doors to their future. Let’s
            make a difference together!
          </p>
          <p className="my-10 text-3xl font-bold text-red-500 max-md:text-3xl">
            How to Get Started
          </p>
          <div className="text-md my-5">
            <p>
              To join our ambassador program, contact us:
              <span className="font-bold">ambassador@studyinmaryland.org </span>
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
