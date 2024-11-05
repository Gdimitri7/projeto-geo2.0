import Navbar from "./src/components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SobrePinarq from "./src/components/SobrePinarq";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/SobrePinarq" element={<SobrePinarq />} />{" "}
        <Route path="/" element={<SobrePinarq />} />
      </Routes>
    </Router>
  );
}

export default App;
