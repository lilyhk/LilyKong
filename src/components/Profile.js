import '../App.css';
import Links from "./Links.js";
import photo from '../IMG_4986.jpg';

function Profile() {
  return (
    <div className="Profile">
      <img src={photo} className="Profile_photo" alt="" width="280" height="380" />
      <div className="Basic-Info">
        <h1 className="Info" id="name">Lily Kong-Taylor</h1>
        <h3 className="Info"  id="title">Full Stack Software Engineer</h3>
        <h3 className="Info"  id="location">LOCATION: San Francisco, CA</h3>
        <Links/>
      </div>
    </div>
  )
}

export default Profile;
