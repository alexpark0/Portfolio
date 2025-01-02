import './Intro.css';

function Intro() {
  return (
    <div className="Intro">
        <div className="Selfie">
            <img
                src="birthday.png"
                alt="self"
                width="400"
                height="400"
            ></img>
        </div>
        <div className="Bio">
            <h1>Hi, I'm Alex!</h1>
            <h2>Welcome to my portfolio website!</h2>
            <h3>I'm an aspiring software engineer studying Computer Science at Northeastern University. 
                My main expertise lies in frontend web development and AI/ML. Outside of coding, I love
                playing basketball, cubing, playing strategy games, playing piano, 
                and discovering new restaurants and cafes (open to recs!).
            </h3>
            <div className="Music">
              
            </div>
            <iframe src="https://open.spotify.com/embed/track/2fhOljbX79loRcdl47SFye?utm_source=generator&theme=0" 
            width="100%" height="80" frameBorder="0" allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    </div>
  );
}

export default Intro;
