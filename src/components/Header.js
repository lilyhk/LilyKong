import '../App.css';
import Links from './Links.js';
import photo from '../IMG_4986.jpg';

function Header() {
  return (
    <div className="Header">
    <div className="Bar">
      <div className="Bar-Items" id="about">About</div>
      <div className="Bar-Items" id="experience">Experience</div>
      <div className="Bar-Items" id="work">Projects</div>
      <div className="Bar-Items" id="contact">Contact</div>
      <div className="Bar-Items" id="resume">Resume</div>
    </div>
    <div className="Profile">
      <img src={photo} className="Profile_photo" alt="" width="280" height="380" />
      <div className="Basic-Info">
        <h1 className="Info" id="name">
          Lily Kong
        </h1>
        <h3 className="Info"  id="title">Full Stack Software Engineer</h3>
        <h3 className="Info"  id="location">LOCATION: San Francisco, CA</h3>
        <Links/>
      </div>
    </div>
    </div>
  );
}

export default Header;