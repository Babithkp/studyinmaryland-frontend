import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

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
    <nav className="flex justify-between border-b-[1px] max-md:px-4 md:p-4  text-lg font-medium sticky top-0 z-50 bg-white">
      <a href={"/"} >
      <figure className="w-[28rem] h-[6rem] flex justify-center items-center max-md:w-[20rem] ">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 700 91"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            className="max-md:pb-8"
          >
            <rect
              width="300"
              height="46"
              x="45"
              y="45"
              fill="#EAD729"
              className="scale-125"
            />

            <text
              x="55"
              y="75"
              fill="white"
              fontSize="22"
              fontWeight="600"
              fontFamily="Inter, Arial, sans-serif"
              className="scale-125 "
            >
              Duales Studienstipendium
            </text>

            <path
              d="M0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5V45H22.5C10.0736 45 0 34.9264 0 22.5Z"
              fill="#EAD729"
              className="scale-125"
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
      <ul className="relative flex justify-end flex-wrap gap-7 max-lg:w-[80%] max-lg:gap-5 max-md:hidden">
        <li>
          <Link to={"/aboutus"}>About Us</Link>
        </li>
        {agentId && (
          <li>
            <Link to={`/agent-dashboard/${agentId}`}>Dashboard</Link>
          </li>
        )}

        <li>
          <Link to={"/partner-universities"}>Partner Universities</Link>
        </li>
        <li>
          <Link to={"/Scholarships"}>Scholarships</Link>
        </li>
        <li>
          <Link to={"/student-life"}>Student Life</Link>
        </li>
        <li>
          <Link to={"/visa"}>Visa</Link>
        </li>
        <li>
          <Link to={"/faq"}>FAQ</Link>
        </li>
        <li>
          <Link to={"/applicationPortal"}>Application Portal</Link>
        </li>

        <li>
          <Link to={"/ambassadorProgram"}>Become a Partner</Link>
        </li>
        {!agentId && (
          <li>
            <Link to={"/signup"}>Sign up</Link>
          </li>
        )}
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        {agentId && (
          <li onClick={logoutHandler}>
            <button>Logout</button>
          </li>
        )}
      </ul>

      <AlertDialog>
        <AlertDialogTrigger className="z-100  w-10 flex items-center justify-center ">
          <button
            className="flex items-center justify-center gap-2  md:hidden"
            onClick={() => setMenustate(!menuState)}
          >
            <GiHamburgerMenu size={"1.7rem"} />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent
          className="h-[100vh] w-full overflow-scroll bg-transparent md:hidden"
          onClick={() => handleFirstButtonClick()}
        >
          <section className="grid h-full grid-cols-[40%,1fr] bg-transparent">
            <div className="bg-transparent"></div>

            <ul className="h-full flex-wrap gap-10 bg-white text-black">
              <Link
                to={"/"}
                className="block w-full border-b-[1px] bg-red-500 px-5 py-4 text-base font-medium text-white"
              >
                <p>Home</p>
              </Link>
              <Link
                to={"/aboutus"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                About Us
              </Link>
              {agentId && (
                <Link
                  to={`/agent-dashboard/${agentId}`}
                  className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
                >
                  Dashboard
                </Link>
              )}
              <Link
                to={"/partner-universities"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Partner Universities
              </Link>
              <Link
                to={"/Scholarships"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Scholarships
              </Link>
              <Link
                to={"/student-life"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Student Life
              </Link>
              <Link
                to={"/visa"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Visa
              </Link>
              <Link
                to={"/faq"}
                className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                FAQ
              </Link>

              <Link
                to={"/applicationPortal"}
                className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Application Portal
              </Link>

              <Link
                to={"/ambassadorProgram"}
                className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Become a Partner
              </Link>
              {!agentId && (
                <Link
                  to={"/signup"}
                  className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
                >
                  Sign Up
                </Link>
              )}
              {agentId && (
                <button
                  onClick={logoutHandler}
                  className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
                >
                  Logout
                </button>
              )}
              <Link
                to="/contact"
                className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Contact
              </Link>
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
