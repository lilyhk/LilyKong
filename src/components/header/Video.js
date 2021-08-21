import React, {useRef} from 'react';
import '../../App.css';
import myVideo from '../../journey.mov';
import PlayButton from './PlayButton.js';

function Video() {

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
      <div className="Profile_photo" alt="" width="280" height="380">
        <video ref={vidRef} alt="" width="280" height="380">
          <source src={myVideo} type="video/mp4"></source>
        </video>
        <PlayButton play={play} handleVideo={handleVideo}/>
      </div>
  )
}

export default Video;