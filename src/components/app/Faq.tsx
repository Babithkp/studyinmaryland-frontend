const FAQ = [
  {
    question: "What is the Duales Studienstipendium Scholarship?",
    answer: "The Duales Studienstipendium is a dual study scholarship that allows international students to study tuition-free in Germany while working in paid positions related to their field of study, leading to a recognized bachelor or degree qualification.."
  },
  {
    question: "Is the program really tuition-free?",
    answer: "Yes. The scholarship fully covers tuition fees, allowing students to study in Germany without paying tuition for the duration of the program."
  },
  {
    question: "Will I be paid while studying?",
    answer: "Yes. Scholarship recipients receive a monthly stipend of €1,200 throughout the entire program to support living expenses while studying and working in Germany."
  },
  {
    question: "Are the jobs ordinary student jobs?",
    answer: "No. The dual study system offers paid professional roles directly related to your academic field, not casual or unrelated student jobs. This ensures relevant work experience and career-focused training."
  },
  {
    question: "What are the career opportunities after graduation?",
    answer: "Graduates of dual study programs in Germany have strong employment prospects. Many students receive job offers from their partner companies during or immediately after graduation, providing a clear career pathway."
  },
  {
    question: "Do I need a blocked account to apply for the student visa?",
    answer: "No. Duales Studienstipendium scholarship recipients are exempt from providing a blocked account when applying for a German student visa, as financial support is covered by the scholarship stipend."
  },
  {
    question: "Can I travel to other countries while studying in Germany?",
    answer: "Yes. While living and studying in Germany, students can travel freely within the Schengen Area, allowing easy access to many European countries."
  },
  {
    question: "Do I need to speak German before applying?",
    answer: "German language skills are not always required at the time of application, depending on the program. However, German language training is included as part of the academic curriculum, helping students develop strong language skills during the program."
  },
  {
    question: "Can international students work while studying in Germany?",
    answer: "Yes. Under the dual study system, students are legally permitted to work as part of their program, with paid employment directly related to their field of study and fully integrated into their academic schedule."
  },
  {
    question: "Can I stay and work in Germany after completing the program?",
    answer: "Yes. After graduation, students can transition to a work or residence permit in Germany. Many graduates continue working with their partner companies, making long-term settlement and career growth possible."
  },
  
]

export default function Faq() {
  return (
    <main className="flex items-center justify-center ">
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4 font-medium">
        <article>
          <h1 className="my-10 text-5xl font-bold text-yellow-500 max-md:text-3xl">
            FAQ
          </h1>
          {FAQ.map((item, index) => (
            <div key={index}>
              <p className="my-10 text-3xl font-bold text-yellow-500 max-md:text-3xl">
                {item.question}
              </p>
              <p className="text-md my-5">
                {item.answer}
              </p>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}
