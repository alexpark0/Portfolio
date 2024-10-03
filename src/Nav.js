import './Nav.css';

function Nav() {
  return (
      <nav className="Nav">
        <button className="Nav-button"> Home </button>
          <div className="Right-buttons">
            <button className="Nav-button"> Resume </button>
            <button className="Nav-button"> Contact </button>
            <a className="Nav-icon" href="https://linkedin.com/in/alex-park-"> 
              <img src="linkedin.png"></img>
            </a>
            <a className="Nav-icon" href="https://github.com/alexpark0"> 
              <img src="github.png"></img>
            </a>
          </div>
      </nav>
  );
}

export default Nav;
