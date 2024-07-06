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
import ReferralProgram from "./components/app/ReferralProgram";
import Contact from "./components/app/Contact";
import SelectionLayout from "./components/app/com/logging/SelectionLayout";
import AgentSignUp from "./components/app/com/logging/AgentSignUp";
import AgentSignin from "./components/app/com/logging/AgentSignin";
import AdminDashboard from "./components/app/AdminDashboard";
import AgentDashboard from "./components/app/AgentDashboard";


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
        <Route path="referralProgram" element={<ReferralProgram />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Logging-selection" element={<SelectionLayout />} />
        <Route path="Agent-signup" element={<AgentSignUp />} />
        <Route path="Agent-signin" element={<AgentSignin />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="agent-dashboard/:id" element={<AgentDashboard />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
