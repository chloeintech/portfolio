import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      
        <Navbar  />
        <Routes>
          <Route path="/" exact element={<Home  />} />
          <Route path="/about" exact element={<About  />} />
          <Route path="/projects" exact element={<Projects  />} />
          <Route path="/contact" exact element={<Contact  />} />
        </Routes>
      
    </>
  );
}

export default App;
