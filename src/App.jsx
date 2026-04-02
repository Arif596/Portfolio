import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects ";
import Contact from "./Pages/Contact";
import Footer from "./Component/Footer";
import Resume from "./Pages/Resume";
import ScrollToTop from "./Pages/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/"element={<Home/>} />
        <Route path="/about"element={<About/>} />
        <Route path="/contact"element={<Contact/>} />
        <Route path="/project"element={<Projects/>} />
        <Route path="/resume"element={<Resume/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
