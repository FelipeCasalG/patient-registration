import "./App.css";
import "tailwindcss/tailwind.css";
import PatientList from "./components/PatientList";
import { NavBar } from "./components/NavBar";
import HomePage from "./components/Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/Pages/NotFoundPage";
import AboutUs from "./components/Pages/AboutUs";
import Contact from "./components/Pages/Contact";
import Products from "./components/Pages/Products";
import OurWork from "./components/Pages/OurWork";
import { PatientForm } from "./components/PatientForm";

function App() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='pt-4'>
        <NavBar />
      </div>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/patients' element={<PatientList />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/products' element={<Products />} />
          <Route path='/our-work' element={<OurWork />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register-patient' element={<PatientForm />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
