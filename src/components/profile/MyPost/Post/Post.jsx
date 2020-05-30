import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTS7LFEGuHZFKOc_AtQudyknAdpG1PtpKDX-81XeaB_6xJstKD&usqp=CAU' />
        {props.name}
        <div className={s.footer}>
          <div >
            <span>Like </span> {props.like}
          </div>
          <div>
            <span>просмотров</span> {props.see}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;