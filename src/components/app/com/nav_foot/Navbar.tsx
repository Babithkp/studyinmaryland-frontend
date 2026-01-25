import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { RiCloseCircleFill } from "react-icons/ri";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../../../ui/alert-dialog";

export default function Navbar() {
  const newRef = useRef<HTMLButtonElement>(null);
  const [menuState, setMenustate] = useState(false);
  const [agentId, setAgentId] = useState<string | null>();

  if (
    sessionStorage.getItem("agentid") &&
    sessionStorage.getItem("agentid") != agentId
  ) {
    setAgentId(sessionStorage.getItem("agentid"));
  }

  const handleFirstButtonClick = () => {
    // Programmatically click the second button
    if (newRef.current) {
      newRef.current.click();
    }
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("agentid");
    setAgentId(null);
    window.location.href = "/";
  };

  return (
    <nav className="flex justify-between border-b-[1px] p-4 text-lg font-medium ">
      <figure className=" h-14  pl-14">
        <a href={"/"}>
          <svg
            className="h-full w-full scale-125 max-md:scale-150"
            width="700"
            height="91"
            viewBox="0 0 700 91"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="360"
              height="46"
              x="45"
              y="45"
              fill="#EAD729"
            />

            <text
              x="55"
              y="75"
              fill="white"
              fontSize="18"
              fontWeight="600"
              fontFamily="Inter, Arial, sans-serif"
            >
              Munich Bildungsausländer Scholarship
            </text>

            <path
              d="M0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5V45H22.5C10.0736 45 0 34.9264 0 22.5Z"
              fill="#EAD729"
            />
            <circle cx="22.5" cy="22.5" r="11.25" fill="white" />
          </svg>
        </a>
      </figure>
      <ul className="relative flex justify-end flex-wrap gap-7 max-lg:w-[80%] max-lg:gap-5 max-md:hidden">
        <li>
          <a href={"/aboutus"}>About Us</a>
        </li>
        {agentId && (
          <li>
            <a href={`/agent-dashboard/${agentId}`}>Dashboard</a>
          </li>
        )}

        <li>
          <a href={"/partner-universities"}>Partner Universities</a>
        </li>
        <li>
          <a href={"/Scholarships"}>Scholarships</a>
        </li>
        <li>
          <a href={"/student-life"}>Student Life</a>
        </li>
        <li>
          <a href={"/visa"}>Visa</a>
        </li>
        <li>
          <a href={"/faq"}>FAQ</a>
        </li>
        <li>
          <a href={"/applicationPortal"}>Application Portal</a>
        </li>

        <li>
          <a href={"/ambassadorProgram"}>Become a Partner</a>
        </li>
        {!agentId && (
          <li>
            <a href={"/signup"}>Sign up</a>
          </li>
        )}
        <li>
          <a href={"/contact"}>Contact</a>
        </li>
        {agentId && (
          <li onClick={logoutHandler}>
            <button>Logout</button>
          </li>
        )}
      </ul>

      <AlertDialog>
        <AlertDialogTrigger>
          <div
            className="flex items-center justify-center gap-2 text-red-500 md:hidden"
            onClick={() => setMenustate(!menuState)}
          >
            <GiHamburgerMenu size={"1.7rem"} />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent
          className="h-[100vh] w-full overflow-scroll bg-transparent md:hidden"
          onClick={() => handleFirstButtonClick()}
        >
          <section className="grid h-full grid-cols-[40%,1fr] bg-transparent">
            <div className="bg-transparent"></div>

            <ul className="h-full flex-wrap gap-10 bg-white text-black">
              <a
                href={"/"}
                className="block w-full border-b-[1px] bg-red-500 px-5 py-4 text-base font-medium text-white"
              >
                <p>Home</p>
              </a>
              <a
                href={"/aboutus"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                About Us
              </a>
              {agentId && (
                <a
                  href={`/agent-dashboard/${agentId}`}
                  className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
                >
                  Dashboard
                </a>
              )}
              <a
                href={"/partner-universities"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Partner Universities
              </a>
              <a
                href={"/Scholarships"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Scholarships
              </a>
              <a
                href={"/student-life"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Student Life
              </a>
              <a
                href={"/visa"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Visa
              </a>
              <a
                href={"/faq"}
                className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                FAQ
              </a>

              <a
                href={"/applicationPortal"}
                className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Application Portal
              </a>

              <a
                href={"/ambassadorProgram"}
                className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Become a Partner
              </a>
              {!agentId && (
                <a
                  href={"/signup"}
                  className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
                >
                  Sign Up
                </a>
              )}
              {agentId && (
                <button
                  onClick={logoutHandler}
                  className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
                >
                  Logout
                </button>
              )}
              <a
                href="/contact"
                className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Contact
              </a>
            </ul>
          </section>
          <AlertDialogCancel
            ref={newRef}
            className="absolute -top-[48rem] right-[5rem] z-[-1] h-[200%] w-full border-none bg-transparent hover:bg-transparent"
          ></AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
}
