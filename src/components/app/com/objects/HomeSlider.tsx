import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";import { BiSolidQuoteAltRight } from "react-icons/bi";
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
        <SwiperSlide className="bg-[#004890] rounded-2xl p-5 h-[35rem] flex flex-col justify-evenly max-md:h-[40rem]">
          <span>
            <BiSolidQuoteAltRight className="-scale-x-100 mb-5" size={"3rem"} />
          </span>
          <p>
            The Study in Maryland scholarship has not only opened the door to a
            world-class education but also provided the chance to live and study
            in the beautiful state of Maryland. The picturesque campuses and
            vibrant local culture have enriched my overall experience.
            Career-wise, being in Maryland has given me access to numerous
            internships and job opportunities, many of which I wouldn’t have
            encountered elsewhere. Without this scholarship, studying in the USA
            would have been a distant dream due to financial constraints. This
            program has made the impossible possible, allowing me to pursue my
            academic and career aspirations in one of the most dynamic states in
            the country.
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
        <SwiperSlide className="bg-[#004890] rounded-2xl p-5 h-[35rem] flex flex-col justify-evenly max-md:h-[40rem]">
          <span>
            <BiSolidQuoteAltRight className="-scale-x-100 mb-5" size={"3rem"} />
          </span>
          Receiving the Study in Maryland scholarship has been a monumental
          relief for both me and my family. The scholarship has completely
          lifted the financial burden off us, granting me a golden opportunity
          to complete my master’s program for free. The financial support has
          meant that my family doesn’t have to worry about covering my
          educational expenses, which has significantly reduced their stress.
          Additionally, studying in Maryland has been a dream come true, with
          its beautiful landscapes and rich history enhancing my academic
          journey. The professional connections and career opportunities I’ve
          gained here have been invaluable, setting me on a path to a successful
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
        <SwiperSlide className="bg-[#004890] rounded-2xl p-5 h-[35rem] flex flex-col justify-evenly max-md:h-[40rem]">
          <span>
            <BiSolidQuoteAltRight className="-scale-x-100 mb-5" size={"3rem"} />
          </span>
          The Study in Maryland scholarship has been a pivotal moment in my
          life. Academically, I have benefited from unparalleled access to
          resources, cutting-edge technology, and a collaborative learning
          environment. The scholarship has enabled me to pursue my passion for
          research without any financial constraints, which has been incredibly
          liberating. Financially, it has provided stability and allowed me to
          focus on my education and personal growth rather than worrying about
          finances. This opportunity has significantly broadened my horizons and
          prepared me for a successful career ahead.
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
        <SwiperSlide className="bg-[#004890] rounded-2xl p-5 h-[35rem] flex flex-col justify-evenly max-md:h-[40rem]">
          <span>
            <BiSolidQuoteAltRight className="-scale-x-100 mb-5" size={"3rem"} />
          </span>
          The Study in Maryland scholarship has truly been a transformative
          experience for me. Academically, I’ve had the chance to work with
          world-renowned professors and researchers, pushing the boundaries of
          my field. The access to state-of-the-art facilities and resources has
          significantly advanced my research capabilities. Financially, the
          scholarship has alleviated the burden of tuition and living expenses,
          allowing me to focus entirely on my studies without the constant worry
          of debt. This opportunity has opened doors to networking and
          professional growth that I could never have imagined.
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
