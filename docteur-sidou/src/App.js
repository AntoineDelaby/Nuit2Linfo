import './App.css';
import {Game} from './components/Game/Game.js';
import { Error404 } from './Error404';
import { Routes, Route } from "react-router-dom";
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Contact } from './components/Contact/Contact';
import { Sidada } from './components/Sidada/Sidada';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Game/>} />
        <Route path="/index" element={<Game/>} />
        <Route path="/about-sida" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/sidada" element={<Sidada/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
