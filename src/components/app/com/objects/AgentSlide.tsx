import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";import { BiSolidQuoteAltRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import stud1Img from "../../../../../public/reviewImage/student1.jpg";
import stud2Img from "../../../../../public/reviewImage/student2.jpg";
import stud3Img from "../../../../../public/reviewImage/student3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

export default function AgentSlide() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        effect="fade"
        className="relative"
      >
        <SwiperSlide className="bg-[#004890] rounded-2xl p-5 h-[50rem] flex flex-col justify-evenly max-md:h-[60rem]">
          <span>
            <BiSolidQuoteAltRight className="-scale-x-100 mb-5" size={"3rem"} />
          </span>
          <p>
            As an agent partner with Study in Maryland, my experience has been
            incredibly rewarding on multiple levels. The organization has
            consistently provided comprehensive support, making the recruitment
            process smooth and efficient. Over the past two years, numerous
            students I’ve referred have successfully secured fully funded
            scholarships to pursue their master's and PhD programs at
            prestigious universities in Maryland. This initiative has been a
            game-changer for my study abroad agency, allowing us to offer
            unparalleled opportunities to our clients.
          </p>
          <p >
            The financial benefits have been substantial as well. The commission
            payments from Study in Maryland are generous, reflecting their
            commitment to supporting their agents. This has not only boosted my
            agency's revenue but also motivated us to continue finding
            high-quality candidates. The scholarship initiative has helped
            countless students from diverse backgrounds achieve their dream of
            studying in the USA, enhancing their academic and professional
            prospects. Overall, partnering with Study in Maryland has been a
            mutually beneficial and highly rewarding experience.
          </p>

          <div className="flex my-4 justify-around items-center gap-3">
            <div className="w-[5rem] h-[4rem] ">
              <img
                src={stud1Img}
                alt={"student Image"}
                className="object-cover w-[5rem] h-[5rem] rounded-2xl"
              />
            </div>
            <div>
              <p className="font-medium text-lg">Inaaya Singh</p>
              <p className="font-extralight">
                Student at University of Baltimore
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#004890] rounded-2xl p-5 h-[50rem] flex flex-col justify-evenly max-md:h-[60rem]">
          <span>
            <BiSolidQuoteAltRight className="-scale-x-100 mb-5" size={"3rem"} />
          </span>
          <p>
            Partnering with Study in Maryland has transformed my agency's
            operations and significantly enhanced our service offerings. The
            experience of working with them has been incredibly positive, as
            they provide thorough guidance and support throughout the
            recruitment process. Many of our students have received fully funded
            scholarships, enabling them to pursue advanced degrees at top
            universities in Maryland. This has greatly elevated our agency's
            reputation, attracting more clients seeking similar opportunities.
          </p>
          <p  >
            Financially, the collaboration has been highly rewarding. Study in
            Maryland offers attractive commission payments to their partner
            agents, which has considerably increased our earnings. The
            initiative has been a tremendous asset for our clients, many of whom
            had dreamed of studying in the USA but lacked the necessary funding.
            Thanks to Study in Maryland, these students are now thriving in
            their academic pursuits. The scholarship program is not only a
            beacon of hope for aspiring scholars but also a lucrative venture
            for recruitment agencies.
          </p>

          <div className="flex my-4 justify-around items-center gap-3">
            <div className="w-[5rem] h-[4rem] ">
              <img
                src={stud2Img}
                alt={"student Image"}
                className="object-cover w-[5rem] h-[5rem] rounded-2xl"
              />
            </div>
            <div>
              <p className="font-medium text-lg">Rajesh Atwal</p>
              <p className="font-extralight">
                Student at Morgan State University
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#004890] rounded-2xl p-5 h-[50rem] flex flex-col justify-evenly max-md:h-[60rem]">
          <span>
            <BiSolidQuoteAltRight className="-scale-x-100 mb-5" size={"3rem"} />
          </span>
          <p>
            The decision to become an agent partner with Study in Maryland has
            been one of the best strategic moves for my study abroad agency. The
            organization’s dedication to helping international students secure
            fully funded scholarships for master's and PhD programs at esteemed
            universities in Maryland is remarkable. The support they provide to
            both agents and students is top-notch, ensuring a seamless process
            from application to acceptance.
          </p>
          <p  >
            Our agency has seen a significant increase in successful placements,
            with many students benefitting from the scholarships offered through
            this initiative. This success has translated into substantial
            financial gains for our agency, thanks to the generous commission
            payments from Study in Maryland. Their compensation structure is
            very agent-friendly, making the partnership even more appealing.
          </p>
          <p>
            Additionally, this collaboration has enhanced our agency's
            credibility and appeal, drawing more clients eager to explore such
            opportunities. It’s gratifying to see our clients achieve their
            dreams of studying in the USA, and the financial rewards have
            allowed us to expand our services and support even more students.
            Working with Study in Maryland has been an enriching and profitable
            experience for us.
          </p>
          <div className="flex my-4 justify-around items-center gap-3">
            <div className="w-[5rem] h-[4rem] ">
              <img
                src={stud3Img}
                alt={"student Image"}
                className="object-cover w-[5rem] h-[5rem] rounded-2xl"
              />
            </div>
            <div>
              <p className="font-medium text-lg">Sunil Samad</p>
              <p className="font-extralight">
                Student at University of Maryland
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center my-4 gap-3">
        <div className="button-prev-slide   hover:bg-slate-400 text-black border-black border-[2px] rounded-2xl">
          <IoMdArrowRoundBack size={60} />
        </div>
        <div className="button-next-slide hover:bg-slate-400  text-black border-black border-[2px] rounded-2xl">
          <IoMdArrowRoundForward size={60} />
        </div>
      </div>
    </>
  );
}
