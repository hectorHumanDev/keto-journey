import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Recipes from "./pages/Recipes";
import Plans from "./pages/Plans";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/mealPlans" element={<Plans />} />
          <Route path="/journey" element={<Journey />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
