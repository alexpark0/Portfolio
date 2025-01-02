import './Nav.css';

function Nav() {
  return (
      <nav className="Nav">
        <a className="Nav-div"> Home </a>
          <div className="Right-divs">
            <a className="Nav-div"> Resume </a>
            <a className="Nav-div"> Contact </a>
            <a className="Nav-div"> Experience </a>
            <a className="Nav-div"> Projects </a>

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
