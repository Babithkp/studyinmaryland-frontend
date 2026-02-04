import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from 'antd';


export default function Navbar() {
  const [menuState, setMenustate] = useState(false);
  const [agentId, setAgentId] = useState<string | null>(null);
  const location = useLocation();

  const showDrawer = () => {
    setMenustate(true);
  };

  const onClose = () => {
    setMenustate(false);
  };

  // Keep auth UI in sync with sessionStorage, and close drawer on navigation.
  useEffect(() => {
    setAgentId(sessionStorage.getItem("agentid"));
    setMenustate(false);
  }, [location.pathname]);

  const handleNavClick = () => {
    setMenustate(false);
  };



  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("agentid");
    setAgentId(null);
    setMenustate(false);
    window.location.href = "/";
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
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
          <Link
            to={"/aboutus"}
            className={`px-3 py-2 rounded ${isActive("/aboutus") ? "bg-yellow-500 text-white" : ""}`}
          >
            About Us
          </Link>
        </li>
        {agentId && (
          <li>
            <Link
              to={`/agent-dashboard/${agentId}`}
              className={`px-3 py-2 rounded ${isActive("/agent-dashboard") ? "bg-yellow-500 text-white" : ""}`}
            >
              Dashboard
            </Link>
          </li>
        )}

        <li>
          <Link
            to={"/partner-universities"}
            className={`px-3 py-2 rounded ${isActive("/partner-universities") ? "bg-yellow-500 text-white" : ""}`}
          >
            Partner Universities
          </Link>
        </li>
        <li>
          <Link
            to={"/Scholarships"}
            className={`px-3 py-2 rounded ${isActive("/Scholarships") ? "bg-yellow-500 text-white" : ""}`}
          >
            Scholarships
          </Link>
        </li>
        <li>
          <Link
            to={"/student-life"}
            className={`px-3 py-2 rounded ${isActive("/student-life") ? "bg-yellow-500 text-white" : ""}`}
          >
            Student Life
          </Link>
        </li>
        <li>
          <Link
            to={"/visa"}
            className={`px-3 py-2 rounded ${isActive("/visa") ? "bg-yellow-500 text-white" : ""}`}
          >
            Visa
          </Link>
        </li>
        <li>
          <Link
            to={"/faq"}
            className={`px-3 py-2 rounded ${isActive("/faq") ? "bg-yellow-500 text-white" : ""}`}
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to={"/applicationPortal"}
            className={`px-3 py-2 rounded ${isActive("/applicationPortal") ? "bg-yellow-500 text-white" : ""}`}
          >
            Application Portal
          </Link>
        </li>
        {!agentId && (
          <li>
            <Link
              to={"/signup"}
              className={`px-3 py-2 rounded ${isActive("/signup") ? "bg-yellow-500 text-white" : ""}`}
            >
              Sign up
            </Link>
          </li>
        )}
        <li>
          <Link
            to={"/contact"}
            className={`px-3 py-2 rounded ${isActive("/contact") ? "bg-yellow-500 text-white" : ""}`}
          >
            Contact
          </Link>
        </li>
        {agentId && (
          <li onClick={logoutHandler}>
            <button>Logout</button>
          </li>
        )}
      </ul>
      <button
        className="flex items-center justify-center gap-2  md:hidden"
        onClick={showDrawer}
      >
        <GiHamburgerMenu size={"1.7rem"} />
      </button>
      <Drawer
        title="Duales Studienstipendium"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={menuState}
        size={"300px"}
        styles={{ body: { padding: 0 } }}
      >

        <section className="w-full h-full ">

          <ul className="h-full flex-wrap gap-10 bg-white text-black ">
            <Link
              to={"/"}
              onClick={handleNavClick}
              className={`block w-full border-b-[1px] px-5 py-4 text-base font-medium ${isActive("/") ? "bg-yellow-500 text-white" : "text-black hover:bg-yellow-500 hover:text-white"}`}
            >
              <p>Home</p>
            </Link>
            <Link
              to={"/aboutus"}
              onClick={handleNavClick}
              className={`block w-full border-b-[1px] px-5 py-4 text-base font-medium ${isActive("/aboutus") ? "bg-yellow-500 text-white" : "text-black hover:bg-yellow-500 hover:text-white"}`}
            >
              About Us
            </Link>
            {agentId && (
              <Link
                to={`/agent-dashboard/${agentId}`}
                onClick={handleNavClick}
                className={`block w-full border-b-[1px] px-5 py-4 text-base font-medium ${isActive("/agent-dashboard") ? "bg-yellow-500 text-white" : "text-black hover:bg-yellow-500 hover:text-white"}`}
              >
                Dashboard
              </Link>
            )}
            <Link
              to={"/partner-universities"}
              onClick={handleNavClick}
              className={`block w-full border-b-[1px] px-5 py-4 text-base font-medium ${isActive("/partner-universities") ? "bg-yellow-500 text-white" : "text-black hover:bg-yellow-500 hover:text-white"}`}
            >
              Partner Universities
            </Link>
            <Link
              to={"/Scholarships"}
              onClick={handleNavClick}
              className={`block w-full border-b-[1px] px-5 py-4 text-base font-medium ${isActive("/Scholarships") ? "bg-yellow-500 text-white" : "text-black hover:bg-yellow-500 hover:text-white"}`}
            >
              Scholarships
            </Link>
            <Link
              to={"/student-life"}
              onClick={handleNavClick}
              className={`block w-full border-b-[1px] px-5 py-4 text-base font-medium ${isActive("/student-life") ? "bg-yellow-500 text-white" : "text-black hover:bg-yellow-500 hover:text-white"}`}
            >
              Student Life
            </Link>
            <Link
              to={"/visa"}
              onClick={handleNavClick}
              className={`block w-full border-b-[1px] px-5 py-4 text-base font-medium ${isActive("/visa") ? "bg-yellow-500 text-white" : "text-black hover:bg-yellow-500 hover:text-white"}`}
            >
              Visa
            </Link>
            <Link
              to={"/faq"}
              onClick={handleNavClick}
              className={`flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium ${isActive("/faq") ? "bg-yellow-500 text-white" : "text-black hover:bg-yellow-500 hover:text-white"}`}
            >
              FAQ
            </Link>

            <Link
              to={"/applicationPortal"}
              onClick={handleNavClick}
              className={`flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium ${isActive("/applicationPortal") ? "bg-yellow-500 text-white" : "text-black hover:bg-yellow-500 hover:text-white"}`}
            >
              Application Portal
            </Link>

            {!agentId && (
              <Link
                to={"/signup"}
                onClick={handleNavClick}
                className={`block w-full border-b-[1px] px-5 py-4 text-base font-medium ${isActive("/signup") ? "bg-yellow-500 text-white" : "text-black hover:bg-yellow-500 hover:text-white"}`}
              >
                Sign Up
              </Link>
            )}
            {agentId && (
              <button
                onClick={logoutHandler}
                className="flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium text-black hover:bg-yellow-500 hover:text-white"
              >
                Logout
              </button>
            )}
            <Link
              to="/contact"
              onClick={handleNavClick}
              className={`flex w-full items-center border-b-[1px] px-5 py-4 text-base font-medium ${isActive("/contact") ? "bg-yellow-500 text-white" : "text-black hover:bg-yellow-500 hover:text-white"}`}
            >
              Contact
            </Link>
          </ul>
        </section>
      </Drawer>
    </nav>
  );
}
