import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import './App.css';


function App() {
  return <BrowserRouter>
  
  <ul>
    <li><Link to="/game1">Крестики нолики</Link></li>
    <li><Link to="/game2">Судоку</Link></li>
    <li><Link to="/game3">Крестики нолики</Link></li>
  </ul>
    <Routes>
      <Route path="/game1" element={<Game1/>}/>
      <Route path="/game2" element={<Game2/>}/>
      <Route path="/game3" element={<Game3/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
