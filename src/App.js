import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import FrontPage from './Components/FrontPage.js';
import { useState } from 'react';
import WaitingPage from './Components/WaitingPage.js';
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
      <Route path="waiting" element={<WaitingPage />} />
      <Route path="registration" element={<RegistrationPage userEmail={userEmail} userName={userName}/>} />
      <Route path='match' element={<ProfilePage userName={userName}/>} />
      <Route path="biopage" element={<BioPage userName={userName}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
