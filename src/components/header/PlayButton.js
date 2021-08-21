import React, {useState}from 'react';

function PlayButton(props) {

const [isPlaying, setIsPlaying] = useState(false)

const changeButton = function() {
  setIsPlaying(!isPlaying)
}

  if (isPlaying) {
    return (
      <button className="videoButton" onClick={() => {props.handleVideo(); changeButton();}}>
        <i class="fa fa-pause-circle" aria-hidden="true"></i>
      </button>
    )
  } else {
    return (
      <button className="videoButton" onClick={() => {props.handleVideo(); changeButton();}}>
        <i class="fa fa-play-circle" aria-hidden="true"></i>
      </button>
    )
  }


}

export default PlayButton