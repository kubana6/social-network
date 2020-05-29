import React from 'react';
import profile from './Profile.module.css';
import MyPost from './MyPost/MyPosts';



const Profile = () => {
  return (
    <div className={profile.content}>
      <div className={profile.longImage}>
        <img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' />
      </div>
      <div>
        avatar
          <img src='https://lh3.googleusercontent.com/proxy/lr7GeAS0hhUL41cT7b3-5ZCjnJuTXLQTg7sUytKkCO9xUvUOfm8NIM7owugvlMLKG3g3qajx8LU-2LFVjRJrFUqZcPjxxEbCwxs' />
      </div>
      <MyPost />

    </div>
  );
}
export default Profile;