import React, {useState} from 'react';
import '../../App.css';
import photo from '../../IMG_4986.jpg';
import myVideo from '../../journey.mov';


function Select(props) {


  return (
    <div className="selectorBar">
      <div className="iconContainer" onClick={()=>props.selectPhoto()}>
        <img src={photo} className="icon"/>
      </div>
      <div className="iconContainer" onClick={()=>props.selectVideo()}>
        <video className="icon">
          <source src={myVideo} className="icon" type="video/mp4"></source>
        </video>
      </div>


    </div>
  )
}

export default Select;