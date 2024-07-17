import "./componentStyles/Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div>Logo</div>
      <div>
        <nav>
          <ul className="nav-links">
            <li>About</li>
            <li>Recipes</li>
            <li>Journey</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
