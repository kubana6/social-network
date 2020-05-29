import React from 'react';
import post from './Post.module.css';
const Post = (props) => {
  return (
    <div>
      <div className={post.item}>
        <img src='https://lh3.googleusercontent.com/proxy/lr7GeAS0hhUL41cT7b3-5ZCjnJuTXLQTg7sUytKkCO9xUvUOfm8NIM7owugvlMLKG3g3qajx8LU-2LFVjRJrFUqZcPjxxEbCwxs' />
        {props.name}
        <div className={post.footer}>
          <div >
            <span>Like {props.like}</span>
          </div>
          <div>
            <span>просмотров{props.see}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;