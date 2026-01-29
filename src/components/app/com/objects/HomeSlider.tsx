import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import stud1Img from "/reviewImage/student1.jpg";
import stud2Img from "/reviewImage/student2.jpg";
import stud3Img from "/reviewImage/student3.jpg";
import stud4Img from "/reviewImage/student4.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";


export default function HomeSlider() {
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
        effect="fade"
        className="relative"
      >
        <SwiperSlide className="bg-[#004890] rounded-2xl p-5 h-[35rem] flex flex-col justify-between max-md:h-[40rem]">
          <span>
            <BiSolidQuoteAltRight className="-scale-x-100 mb-5" size={"3rem"} />
          </span>
          <p>
            Receiving the Duales Studienstipendium completely changed my career path. I was able to study engineering at a German university while working with a partner company from my first year. The combination of theory and real work experience gave me confidence, financial stability, and practical skills that I would never get from a normal study program. Today, I’m already employed full-time in Germany, and the transition was seamless.
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
        <SwiperSlide className="bg-[#004890] rounded-2xl p-5 h-[35rem] flex flex-col justify-between max-md:h-[40rem]">
          <span>
            <BiSolidQuoteAltRight className="-scale-x-100 mb-5" size={"3rem"} />
          </span>
          As an international student, the biggest challenge was funding and long-term security. This scholarship solved both. I didn’t need a blocked account, I earned a salary during my studies, and I gained German work experience while studying. The program made it easy to integrate into German life, and it clearly set me on a path toward permanent residency.
          future.
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
        <SwiperSlide className="bg-[#004890] rounded-2xl p-5 h-[35rem] flex flex-col justify-between max-md:h-[40rem]">
          <span>
            <BiSolidQuoteAltRight className="-scale-x-100 mb-5" size={"3rem"} />
          </span>
          The dual study scholarship gave me the opportunity to study a healthcare-related degree while gaining hands-on experience in Germany.
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
        <SwiperSlide className="bg-[#004890] rounded-2xl p-5 h-[35rem] flex flex-col justify-between max-md:h-[40rem]">
          <span>
            <BiSolidQuoteAltRight className="-scale-x-100 mb-5" size={"3rem"} />
          </span>
          This scholarship didn’t just give me education — it gave me a future. Studying and working at the same time helped me grow professionally and personally. I improved my German, built a strong professional network, and gained valuable work experience. Knowing I had guaranteed employment after graduation removed so much uncertainty and stress.
          <div className="flex my-4 justify-around items-center gap-3">
            <div className="w-[5rem] h-[4rem] ">
              <img
                src={stud4Img}
                alt={"student Image"}
                className="object-cover w-[5rem] h-[5rem] rounded-2xl"
              />
            </div>
            <div>
              <p className="font-medium text-lg">Omolara Adeoye</p>
              <p className="font-extralight">
                Student at Frostburg state university
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center mt-4 gap-3">
        <div className="button-prev-slide   hover:bg-slate-400 active:scale-95 active:bg-white text-black border-black border-[2px] rounded-2xl">
          <IoMdArrowRoundBack size={60} />
        </div>
        <div className="button-next-slide hover:bg-slate-400 active:scale-95 active:bg-white  text-black border-black border-[2px] rounded-2xl">
          <IoMdArrowRoundForward size={60} />
        </div>
      </div>
    </>
  );
}
