import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationPage from './Components/RegistrationPage.js'
import './App.css';
import FrontPage from './Components/FrontPage.js';
import { useState } from 'react';
import WatiningPage from './Components/WatiningPage.js';
import RegistrationPage from "./Components/RegistrationPage.js";
import BioPage from "./Components/BioPage.js";
import ProfilePage from "./Components/ProfilePage/ProfilePage.js";

function App() {
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FrontPage setUserEmail={setUserEmail} setUserName={setUserName}/>} />
      <Route path="waiting" element={<WatiningPage />} />
      <Route path="registration" element={<RegistrationPage userEmail={userEmail} userName={userName}/>} />
      <Route path='match' element={<ProfilePage userName={userName}/>} />
      <Route path="biopage" element={<BioPage userName={userName}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
