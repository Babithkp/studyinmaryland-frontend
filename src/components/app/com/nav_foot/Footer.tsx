import iiieImg from "/iie_logo.png"; export default function Footer() {
  return (
    <footer className="flex flex-col  justify-center items-center text-sm gap-5 bg-black/80 py-10 text-white max-lg:gap-5 max-lg:p-10 max-lg:text-xs  max-md:flex-col">
      <div className="flex max-md:flex-col justify-around items-center w-full gap-5 max-md:gap-10">
        <div className="flex flex-col gap-10 max-lg:gap-5">
          <a href={"/"} className="w-[15rem] ">
            <figure className="h-20 w-[18rem] flex justify-center items-center ">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 700 91"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="300"
                  height="46"
                  x="45"
                  y="45"
                  fill="#EAD729"
                  className="scale-150"
                />

                <text
                  x="55"
                  y="75"
                  fill="white"
                  fontSize="22"
                  fontWeight="600"
                  fontFamily="Inter, Arial, sans-serif"
                  className="scale-150"
                >
                  Duales Studienstipendium
                </text>

                <path
                  d="M0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5V45H22.5C10.0736 45 0 34.9264 0 22.5Z"
                  fill="#EAD729"
                  className="scale-150"
                />

                <circle
                  cx="22.5"
                  cy="22.5"
                  r="11.25"
                  fill="white"
                  className="scale-125"
                />
              </svg>
            </figure>
          </a>
        </div>
        <div className="flex flex-col items-center gap-5">
          <span className="text-xl max-lg:hidden max-lg:text-2xl">
            General inquiries:
          </span>
          <div className="flex flex-col gap-5">
            <p className="text-base underline">Info@dualesstudienstipendium.de</p>
          </div>
        </div>
        <div>
          <p className="text-center">
          This program is funded by the Federal Institute for Vocational Education and Training (Bundesinstitut für Berufsbildung – BIBB).
          </p>
        </div>
        <div>
          <img
            src={iiieImg}
            className="w-[10rem]"
            alt="IIE the power of Intergnational Education"
          />
        </div>
        <div>
          <a href="/">Grantee Directory Press Links</a>
        </div>
        <div className="text-xs ">
          <a
            href="/"
            className="underline underline-offset-4 hover:text-blue-950"
          >
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a
            href="/"
            className="underline underline-offset-4 hover:text-blue-950"
          >
            Terms and Conditions
          </a>
          <span className="mx-2">|</span>
          <a
            href="/"
            className="underline underline-offset-4 hover:text-blue-950"
          >
            Cookie Policy
          </a>
          <br />
          <span className="">© 2023-2026 www.dualesstudienstipendium.de</span>
        </div>
      </div>
    </footer>
  );
}
