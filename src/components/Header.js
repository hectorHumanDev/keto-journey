import "./componentStyles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header">
      <div>
        <Link to="/">logo</Link>
      </div>
      <div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/mealplans">Meal plans</Link>
            </li>
            <li>
              <Link to="/journey">Journey</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
