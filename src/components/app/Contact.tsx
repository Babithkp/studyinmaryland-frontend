export default function Contact() {
  return (
    <main className=" flex justify-center items-center">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4">
        <article>
          <h1 className="text-red-500 text-5xl font-bold my-10 max-md:text-3xl">
            Contact
          </h1>
          <p className="text-md my-5 flex items-center gap-3 ">
            Fell free to contact us with any questions you could have.
          </p>
          <p className="text-md my-5 max-md:flex-col flex items-center gap-3 ">
            <p className=" font-bold ">General inquiries :</p>
            info@studyinmaryland.com
          </p>
          <p className="text-md my-5 max-md:flex-col flex items-center gap-3 ">
            <p className=" font-bold ">Referral program inquires :</p>
            referrals@studyinmaryland.com
          </p>
          <p className="text-md my-5 max-md:flex-col flex items-center gap-3 ">
            <p className=" font-bold ">Become an agent inquires: </p>
            partner@studyinmaryland.com
          </p>
          <p className="text-md my-5 max-md:flex-col flex items-center gap-3 ">
            <p className=" font-bold ">Phone: </p>
            987654321
          </p>
        </article>
      </section>
    </main>
  );
}
