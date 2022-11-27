import { Avatar } from '@mui/material'
import React from 'react'
import "./css/QuoraBox.css";

function QuoraBox() {
  return (
    <div className="quoraBox">
        <div classNam="quoraBox.info">
            <Avatar />
        </div>
        <div className="quoraBox__quora">
            <h5>Type a question or share a link...</h5>
        </div>

    </div>
  )
}

export default QuoraBox