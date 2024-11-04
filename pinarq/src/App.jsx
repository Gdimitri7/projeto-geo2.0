import Navbar from "./components/Navbar/Navbar"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SobrePinarq from "./components/SobrePinarq";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/SobrePinarq" element={<SobrePinarq />} /> <Route path="/" element={<SobrePinarq />} />
      </Routes>
    </Router>
  );
}


export default App