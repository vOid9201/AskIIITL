import React from 'react';
import AskiiitHeader from './AskiiitHeader';
import Feed from './Feed.js';
import Sidebar from './Sidebar.js';
import Widget from './Widget.js';
import './css/Askiiit.css';

function Askiiit() {
  return (
    <div className = "askiiit">
      <AskiiitHeader />
      <div className ="askiiit__contents">
        <div className = "askiiit__content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>

  )
}

export default Askiiit;