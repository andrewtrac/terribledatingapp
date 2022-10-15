import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./Components/RegistrationPage.js";
import BioPage from "./Components/BioPage.js";
import ProfilePage from "./Components/ProfilePage/ProfilePage.js";
import "./App.css";
import FrontPage from "./Components/FrontPage.js";
import { useState } from "react";

function App() {
  const [userEmail, setUserEmail] = useState("");
  return (
    <BrowserRouter>
    <Routes>
      <Route path="registration" element={<RegistrationPage userEmail={userEmail} />} />
      <Route path='match' element={<ProfilePage/>} />
      <Route path='/' element={<FrontPage setUserEmail={setUserEmail}/>} />
      <Route path="biopage" element={<BioPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
