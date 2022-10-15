import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationPage from './Components/RegistrationPage.js'
import './App.css';
import FrontPage from './Components/FrontPage.js';
import { useState } from 'react';
import WatiningPage from './Components/WatiningPage.js';

function App() {
  const [userEmail, setUserEmail] = useState("")
  return (
    <BrowserRouter>
    <Routes>
      <Route path="registration" element={<RegistrationPage userEmail={userEmail} />} />
      <Route path='/' element={<FrontPage setUserEmail={setUserEmail}/>} />
      <Route path="waiting" element={<WatiningPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
