import React, {useState, useEffect} from 'react';
import '../../App.css';



function Bar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <div className={scroll ? "scrolled" : "Bar"}>
      <div className="Bar-Items" id="about">About</div>
      <div className="Bar-Items" id="experience">Experience</div>
      <div className="Bar-Items" id="work">Projects</div>
      <div className="Bar-Items" id="contact">Contact</div>
      <div className="Bar-Items" id="resume">Resume</div>
    </div>
  )
}

export default Bar;