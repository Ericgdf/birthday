import Home from './pages/home'
import EscapeMovie from './pages/EscapeMovie';
import EscapeNumber from './pages/EscapeNumber';
import './App.css'
import { Routes, Route } from "react-router-dom";
import EscapePlace from './pages/EscapePlace';
import EscapeFinal from './pages/EscapeFinal';



function App() {


  return (
    <>
    <div className="main_background">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escape-room-1" element={<EscapeMovie />} />
        <Route path="/escape-room-2" element={<EscapeNumber />} />
        <Route path="/escape-room-3" element={<EscapePlace />} />
        <Route path="/escape-room-4" element={<EscapeFinal />} />
    </Routes>
  
    </div>

    </>
  )
}

export default App
