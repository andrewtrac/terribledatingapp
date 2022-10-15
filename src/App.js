import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationPage from './Components/RegistrationPage.js'
import './App.css';
import FrontPage from './Components/FrontPage.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="registration" element={<RegistrationPage/>} />
      <Route path='/' element={<FrontPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
