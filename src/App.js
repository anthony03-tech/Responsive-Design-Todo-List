import { useState } from "react";
import LandingPage from "./pages/LandingPage.js";
import MyAccount from "./pages/MyAccount.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js"
import Impressum from "./pages/Impressum.js"; 
import "./App.css";

export default function App() {
  const [page, setPage] = useState("landing");

  if (page === "privacy") return <PrivacyPolicy onNavigate={setPage} />;
  if (page === "impressum") return <Impressum onNavigate={setPage} />;

   return <LandingPage onNavigate={setPage} />;
  // return <MyAccount />;
  // return <PrivacyPolicy />;
  // return <Impressum />;
}