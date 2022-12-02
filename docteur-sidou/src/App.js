import './App.css';
import {Game} from './components/Game/Game.js';
import { Error404 } from './Error404';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Game/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
