import studentsImg from "../../assets/studentsLife.jpeg";
export default function Aboutus() {  return (
    <main className="flex flex-col items-center justify-center">
      <figure className="w-[50%]">
          <img src={studentsImg} alt="Students" loading="lazy"/>
        </figure>
      <section className="w-[60%] p-10 max-md:w-full max-md:p-4 font-medium max-md:text-center">
        <article>
          <h1 className="my-10 text-5xl font-bold text-yellow-500 max-md:text-3xl text-start max-md:text-center">
            About us
          </h1>
          <p className="text-md my-5">
          The Duales Studienstipendium Scholarship is a forward-thinking international education initiative funded by the Federal Institute for Vocational Education and Training (Bundesinstitut für Berufsbildung – BIBB). It was created to promote Germany’s globally respected dual study system, which uniquely integrates academic learning with hands-on, paid workplace training. Since its inception in 2023, the scholarship has supported over 4,500 international students from across the world, opening structured and reliable pathways into Germany’s education and employment ecosystem.
          </p>
          <p className="text-md my-5">
          At the heart of the program is a clear mission: not only to enable students to study in Germany, but to prepare them for rapid and sustainable entry into the German job market. By combining classroom instruction with real-world professional experience, scholars graduate with practical skills that are immediately relevant to employers. In parallel, students gain a strong command of the German language while studying and working, giving them a critical advantage for long-term career growth and social integration in Germany.
          </p>
          <p className="text-md my-5">
          Beyond funding, the Duales Studienstipendium represents opportunity, stability, and future readiness. It bridges the gap between education and employment, reduces the risks often associated with international study, and aligns global talent with Germany’s workforce needs. Through strong institutional partnerships and a structured support framework, the scholarship empowers students to build meaningful careers, contribute to the German economy, and become globally competitive professionals in an increasingly interconnected world.
          </p>
          
        </article>
      </section>
    </main>
  );
}
