import React, {useState} from 'react';
import '../../App.css';
import Links from "./Links.js";
import photo from '../../IMG_4986.jpg';
import Video from './Video.js';
import Select from './Select.js';



function Profile() {

  const [video, setIsVideo] = useState(false)

  const selectPhoto = function() {
    setIsVideo(false)
  }

  const selectVideo = function() {
    setIsVideo(true)
  }


  if (video) {
    return (
      <div className="Profile">
        <div className="imagesContainer">
          <Video/>
          <Select selectVideo={selectVideo} selectPhoto={selectPhoto}/>
        </div>

        <div className="Basic-Info">
          <h1 className="Info" id="name">Lily Kong-Taylor</h1>
          <h3 className="Info"  id="title">Full Stack Software Engineer</h3>
          <h3 className="Info"  id="location">LOCATION: San Francisco, CA</h3>
          <Links/>
        </div>
      </div>
    )
  } else {
    return (
      <div className="Profile">
        <div className="imagesContainer">
          <img src={photo} className="Profile_photo" alt="" width="280" height="380" />
          <Select selectVideo={selectVideo} selectPhoto={selectPhoto}/>
        </div>

        <div className="Basic-Info">
          <h1 className="Info" id="name">Lily Kong-Taylor</h1>
          <h3 className="Info"  id="title">Full Stack Software Engineer</h3>
          <h3 className="Info"  id="location">LOCATION: San Francisco, CA</h3>
          <Links/>
        </div>
      </div>
    )
  }

}

export default Profile;
