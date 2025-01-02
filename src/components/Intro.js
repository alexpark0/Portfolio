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
            <h1>Hi, I'm Alex Park!</h1>
            <h2>Welcome to my portfolio website!</h2>
            <h3>I'm an aspiring software engineer pursuing a Bachelor of Science in 
                Computer Science at Northeastern University. I'm currently in my second year
                at Northeastern, interning for Revvity during the summer. </h3>
        </div>
    </div>
  );
}

export default Intro;
