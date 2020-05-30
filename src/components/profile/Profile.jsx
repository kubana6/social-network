import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPosts';



const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.longImage}>
        <img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' />
      </div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTS7LFEGuHZFKOc_AtQudyknAdpG1PtpKDX-81XeaB_6xJstKD&usqp=CAU' />
      </div>
      <MyPost />

    </div>
  );
}
export default Profile;