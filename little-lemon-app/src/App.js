import React from 'react' ;
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useFormContext } from "./context/FormContext";
import Home from "./pages/Home";
import Reservation from './pages/Reservation';
import Confirmation from './pages/Confirmation';

function App() {
  const { form } = useFormContext();

  const formProps = {
    name: form.name,
    date: form.date,
    time: form.time,
    guests: form.numberOfGuests,
    occasion: form.occasion,
    table: form.tablePreference,
    request: form.message,
  };
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Reservation />} />
        <Route path='/booking-confirmation' element={<Confirmation {...formProps} />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  );
}

export default App;