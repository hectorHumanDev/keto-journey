import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import ImageContainer from "./components/ImageContainer";
import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/journey" element={<Journey />} />
        </Routes>
        {/* <main className="hero-main">
          <Hero />
          <ImageContainer />
        </main> */}
      </div>
    </Router>
  );
}

export default App;
