import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'

const MyPost = () => {
  return (
    <div>
      <div className={s.item}>
        <div>
          My posts
        </div>
        <div>
          <textarea></textarea>
          <button>send</button>
        </div>
      </div>
      <Post name='Hello my name is Anton' like='15' see='156' />
      <Post name='I love Kira' like='29'  see='56'/>
      <Post />
      <Post />
      <Post />
    </div>
  );
}
export default MyPost;