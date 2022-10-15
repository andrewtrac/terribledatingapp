import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationPage from './Components/RegistrationPage.js'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="registration" element={<RegistrationPage/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
