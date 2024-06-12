import './Nav.css';

function Nav() {
  return (
      <nav className="Nav">
        <button className="Nav-button"> Home </button>
          <div className="Right-buttons">
            <button className="Nav-button"> Resume </button>
            <button className="Nav-button"> Contact </button>
      </div>
      </nav>
  );
}

export default Nav;
