import React, {useRef} from 'react';
import '../App.css';
import Links from "./Links.js";
import photo from '../IMG_4986.jpg';
import myVideo from '../journey.mov';
import PlayButton from './PlayButton.js';

function Profile() {

  // const [isPlaying, setIsPlaying] = useState(false)

  const vidRef = useRef(null);

  let play = false;
  const handleVideo = function() {
    play = !play;
    if (play) {
      playVideo();
    } else {
      pauseVideo();
    }
  }

  const playVideo = function() {
    vidRef.current.play()
  }
  const pauseVideo = function() {
    vidRef.current.pause()
  }

  return (
    <div className="Profile">
      <div className="Profile_photo" alt="" width="280" height="380">
        <video ref={vidRef} alt="" width="280" height="380">
          <source src={myVideo} type="video/mp4"></source>
        </video>
        <PlayButton play={play} handleVideo={handleVideo}/>
      </div>

      {/* <img src={photo} className="Profile_photo" alt="" width="280" height="380" /> */}
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
