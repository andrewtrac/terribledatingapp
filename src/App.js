import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationPage from './Components/RegistrationPage.js'
import ProfilePage from './Components/ProfilePage/ProfilePage.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="registration" element={<RegistrationPage/>} />
      <Route path='profile' element={<ProfilePage/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
