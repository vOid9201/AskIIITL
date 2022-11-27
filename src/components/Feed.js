import React from 'react'
import QuoraBox from "./QuoraBox.js";
import "./css/Feed.css";
import Post from "./Post.js"

function Feed() {
  return (
    <div className='feed'>
      <QuoraBox />
      <Post />
    </div>
  );
}

export default Feed