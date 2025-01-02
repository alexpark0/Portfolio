import './Nav.css';

function Nav() {
  return (
      <nav className="Nav">
        <a className="Nav-button"> Home </a>
          <div className="Right-divs">
            <a className="Nav-button" href="Alexander Park Resume.pdf" download="Alexander Park Resume.pdf"> Resume </a>
            <a className="Nav-button"> Experience </a>
            <a className="Nav-button"> Projects </a>

            <a className="Nav-icon" href="https://linkedin.com/in/alex-park-"> 
              <img src="linkedin.png"
                  width="35"
                  height="35"></img>
            </a>
            <a className="Nav-icon" href="https://github.com/alexpark0"> 
              <img src="github.png"
                  width="35"
                  height="35"></img>
            </a>
          </div>
      </nav>
  );
}

export default Nav;
