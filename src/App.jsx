// App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import FAQ from "./pages/FAQ"
import HearingAidSection from "./pages/HearingAidData";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>} />
       <Route path="/contact" element={<Footer/>}/>
       <Route path="/faq" element={<FAQ/>}/>
       <Route path="/hearing-Aid" element={<HearingAidSection/>}/>
       <Route path="/contact" element={<Footer/>}/>
    </Routes>
  );
}

export default App;