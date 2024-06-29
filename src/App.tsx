import { Route, Routes } from "react-router-dom";
import Home from "./components/app/Home";
import Navbar from "./components/app/com/nav_foot/Navbar";
import Aboutus from "./components/app/Aboutus";
import PartnerUniversities from "./components/app/PartnerUniversities";
import Footer from "./components/app/com/nav_foot/Footer";
import Scholarships from "./components/app/Scholarships";
import StudentLife from "./components/app/StudentLife";
import Visa from "./components/app/Visa";
import Faq from "./components/app/Faq";
import ApplicationPortal from "./components/app/ApplicationPortal";
import AddApplication from "./components/app/com/forms/AddApplication";
import BecomeAnAgent from "./components/app/BecomeAnAgent";
import ReferralProgram from "./components/app/ReferralProgram";
import Contact from "./components/app/Contact";


function App() {
  return (
    <>
    <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="partner-universities" element={<PartnerUniversities />} />
        <Route path="Scholarships" element={<Scholarships />} />
        <Route path="student-life" element={<StudentLife />} />
        <Route path="visa" element={<Visa />} />
        <Route path="faq" element={<Faq />} />
        <Route path="applicationPortal" element={<ApplicationPortal />} />
        <Route path="applicationPortal/addApplication" element={<AddApplication />} />
        <Route path="becomeAnAgent" element={<BecomeAnAgent />} />
        <Route path="referralProgram" element={<ReferralProgram />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
