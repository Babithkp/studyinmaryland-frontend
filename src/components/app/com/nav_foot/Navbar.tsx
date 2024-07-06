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
      <figure className="mr-16 h-14 max-md:w-[10rem]">
        <a href={"/"}>
          <svg
            className="h-full w-full"
            width="306"
            height="91"
            viewBox="0 0 306 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="260"
              height="46"
              transform="translate(45 45)"
              fill="#EA2933"
            />
            <path
              d="M62.296 76.168C61.176 76.168 60.168 75.976 59.272 75.592C58.376 75.192 57.672 74.632 57.16 73.912C56.648 73.192 56.392 72.352 56.392 71.392H59.32C59.384 72.112 59.664 72.704 60.16 73.168C60.672 73.632 61.384 73.864 62.296 73.864C63.24 73.864 63.976 73.64 64.504 73.192C65.032 72.728 65.296 72.136 65.296 71.416C65.296 70.856 65.128 70.4 64.792 70.048C64.472 69.696 64.064 69.424 63.568 69.232C63.088 69.04 62.416 68.832 61.552 68.608C60.464 68.32 59.576 68.032 58.888 67.744C58.216 67.44 57.64 66.976 57.16 66.352C56.68 65.728 56.44 64.896 56.44 63.856C56.44 62.896 56.68 62.056 57.16 61.336C57.64 60.616 58.312 60.064 59.176 59.68C60.04 59.296 61.04 59.104 62.176 59.104C63.792 59.104 65.112 59.512 66.136 60.328C67.176 61.128 67.752 62.232 67.864 63.64H64.84C64.792 63.032 64.504 62.512 63.976 62.08C63.448 61.648 62.752 61.432 61.888 61.432C61.104 61.432 60.464 61.632 59.968 62.032C59.472 62.432 59.224 63.008 59.224 63.76C59.224 64.272 59.376 64.696 59.68 65.032C60 65.352 60.4 65.608 60.88 65.8C61.36 65.992 62.016 66.2 62.848 66.424C63.952 66.728 64.848 67.032 65.536 67.336C66.24 67.64 66.832 68.112 67.312 68.752C67.808 69.376 68.056 70.216 68.056 71.272C68.056 72.12 67.824 72.92 67.36 73.672C66.912 74.424 66.248 75.032 65.368 75.496C64.504 75.944 63.48 76.168 62.296 76.168ZM82.0604 59.32V61.552H77.6204V76H74.8844V61.552H70.4204V59.32H82.0604ZM87.5433 59.32V69.952C87.5433 71.216 87.8713 72.168 88.5273 72.808C89.1993 73.448 90.1273 73.768 91.3113 73.768C92.5113 73.768 93.4393 73.448 94.0953 72.808C94.7673 72.168 95.1033 71.216 95.1033 69.952V59.32H97.8393V69.904C97.8393 71.264 97.5433 72.416 96.9513 73.36C96.3593 74.304 95.5673 75.008 94.5753 75.472C93.5833 75.936 92.4873 76.168 91.2873 76.168C90.0873 76.168 88.9913 75.936 87.9993 75.472C87.0233 75.008 86.2473 74.304 85.6713 73.36C85.0953 72.416 84.8073 71.264 84.8073 69.904V59.32H87.5433ZM106.85 59.32C108.626 59.32 110.178 59.664 111.506 60.352C112.85 61.024 113.882 62 114.602 63.28C115.338 64.544 115.706 66.024 115.706 67.72C115.706 69.416 115.338 70.888 114.602 72.136C113.882 73.384 112.85 74.344 111.506 75.016C110.178 75.672 108.626 76 106.85 76H101.402V59.32H106.85ZM106.85 73.768C108.802 73.768 110.298 73.24 111.338 72.184C112.378 71.128 112.898 69.64 112.898 67.72C112.898 65.784 112.378 64.272 111.338 63.184C110.298 62.096 108.802 61.552 106.85 61.552H104.138V73.768H106.85ZM130.777 59.32L125.257 69.952V76H122.521V69.952L116.977 59.32H120.025L123.889 67.504L127.753 59.32H130.777ZM140.059 61.024C139.563 61.024 139.147 60.856 138.811 60.52C138.475 60.184 138.307 59.768 138.307 59.272C138.307 58.776 138.475 58.36 138.811 58.024C139.147 57.688 139.563 57.52 140.059 57.52C140.539 57.52 140.947 57.688 141.283 58.024C141.619 58.36 141.787 58.776 141.787 59.272C141.787 59.768 141.619 60.184 141.283 60.52C140.947 60.856 140.539 61.024 140.059 61.024ZM141.403 62.776V76H138.667V62.776H141.403ZM151.667 62.56C152.707 62.56 153.635 62.776 154.451 63.208C155.283 63.64 155.931 64.28 156.395 65.128C156.859 65.976 157.091 67 157.091 68.2V76H154.379V68.608C154.379 67.424 154.083 66.52 153.491 65.896C152.899 65.256 152.091 64.936 151.067 64.936C150.043 64.936 149.227 65.256 148.619 65.896C148.027 66.52 147.731 67.424 147.731 68.608V76H144.995V62.776H147.731V64.288C148.179 63.744 148.747 63.32 149.435 63.016C150.139 62.712 150.883 62.56 151.667 62.56ZM184.548 59.32V76H181.812V64.576L176.724 76H174.828L169.716 64.576V76H166.98V59.32H169.932L175.788 72.4L181.62 59.32H184.548ZM198.2 72.592H191.216L190.016 76H187.16L193.136 59.296H196.304L202.28 76H199.4L198.2 72.592ZM197.432 70.36L194.72 62.608L191.984 70.36H197.432ZM213.542 76L209.702 69.328H207.614V76H204.878V59.32H210.638C211.918 59.32 212.998 59.544 213.878 59.992C214.774 60.44 215.438 61.04 215.87 61.792C216.318 62.544 216.542 63.384 216.542 64.312C216.542 65.4 216.222 66.392 215.582 67.288C214.958 68.168 213.99 68.768 212.678 69.088L216.806 76H213.542ZM207.614 67.144H210.638C211.662 67.144 212.43 66.888 212.942 66.376C213.47 65.864 213.734 65.176 213.734 64.312C213.734 63.448 213.478 62.776 212.966 62.296C212.454 61.8 211.678 61.552 210.638 61.552H207.614V67.144ZM232.402 59.32L226.882 69.952V76H224.146V69.952L218.602 59.32H221.65L225.514 67.504L229.378 59.32H232.402ZM237.309 73.792H242.949V76H234.573V59.32H237.309V73.792ZM255.294 72.592H248.31L247.11 76H244.254L250.23 59.296H253.398L259.374 76H256.494L255.294 72.592ZM254.526 70.36L251.814 62.608L249.078 70.36H254.526ZM275.676 76H272.94L264.708 63.544V76H261.972V59.296H264.708L272.94 71.728V59.296H275.676V76ZM284.717 59.32C286.493 59.32 288.045 59.664 289.373 60.352C290.717 61.024 291.749 62 292.469 63.28C293.205 64.544 293.573 66.024 293.573 67.72C293.573 69.416 293.205 70.888 292.469 72.136C291.749 73.384 290.717 74.344 289.373 75.016C288.045 75.672 286.493 76 284.717 76H279.269V59.32H284.717ZM284.717 73.768C286.669 73.768 288.165 73.24 289.205 72.184C290.245 71.128 290.765 69.64 290.765 67.72C290.765 65.784 290.245 64.272 289.205 63.184C288.165 62.096 286.669 61.552 284.717 61.552H282.005V73.768H284.717Z"
              fill="white"
            />
            <path
              d="M0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5V45H22.5C10.0736 45 0 34.9264 0 22.5Z"
              fill="#EA2933"
            />
            <circle cx="22.5" cy="22.5" r="11.25" fill="white" />
          </svg>
        </a>
      </figure>
      <ul className="relative flex justify-end flex-wrap gap-8 max-lg:w-[80%] max-lg:gap-5 max-md:hidden">
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
          <a href={"/referralProgram"}>Referral Program</a>
        </li>
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
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black"
              >
                About Us
              </a>
              <a
                href={"/partner-universities"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black"
              >
                Partner Universities
              </a>
              <a
                href={"/Scholarships"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black"
              >
                Scholarships
              </a>
              <a
                href={"/student-life"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black"
              >
                Student Life
              </a>
              <a
                href={"/visa"}
                className="block w-full border-b-[1px] px-5 py-4 text-base font-medium text-black"
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
                href={"/referralProgram"}
                className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Referral Program
              </a>

              <button
                onClick={logoutHandler}
                className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-red-500 hover:text-white"
              >
                Contact
              </button>
            </ul>
          </section>
          <AlertDialogCancel
            ref={newRef}
            className="absolute -top-[48rem] right-[5rem] z-[-1] h-[200%] w-full border-none bg-transparent hover:bg-transparent"
          >
            {/* <RiCloseCircleFill
              size={"2.5rem"}
              color="white"
              className="z-[100]"
            /> */}
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
}
