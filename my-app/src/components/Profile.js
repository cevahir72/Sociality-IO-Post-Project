import React from 'react';
import photo from  "../helpers/cv.png"

const Profile = () => {
  return (
    <div 
    style={{
        position:"absolute",
        top:"2rem",
        right:"4rem"
        
    }}>
        <img src={photo} alt="profile-photo" style={{
            width:"63px",
            height:"63px",
            borderRadius:"50%"
        }}/>
    </div>
  )
}

export default Profile