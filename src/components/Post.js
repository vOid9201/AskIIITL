import { Avatar } from '@mui/material';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import RepeatOneOutlinedIcon from '@mui/icons-material/RepeatOneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import React from 'react'

import './css/post.css'

function Post() {
  return (
    <div  className = "post">
        <div className = "post__info">
            <Avatar />
            <h4>User Name</h4>
            <small>TimeStamp</small>
        </div>
        <div className = "post__body">
            <div className = "post__question">
                <p>This is a test question</p>
                <button className = "post__btnAnswer">Answers</button>
            </div>
        </div>
        <div className="post__footer">
            <div className = "post__footerAction">
                <ArrowUpwardOutlinedIcon/>
                <ArrowDownwardOutlinedIcon/>
            </div>
            <RepeatOneOutlinedIcon/>
            <ChatBubbleOutlineOutlinedIcon />
            <div className="post__footerLeft">
                <ShareOutlinedIcon/> 
                <MoreHorizOutlinedIcon/>
            </div>
        </div>
        <p style = {{color : "rgba(0,0,0,0.5)" , fontSize : "12px" , fontWeight : "bold" , margin : "10px 0px"}}>1 Answer</p>
        <div style = {{margin : "5px 0px 0px 0px" , padding : "5px 0px 0px 20px" , borderTop : "solid 1px lightgray"}} className = "post__answer">
            <div style = {{display : "flex" , FlexDirection : "column" , padding : "10px 5px" , borderTop : "1px solid lightgray"}} className = "post-answer-container">
                <div style = {{display : "flex" , alignItems : "center" , marginBottom : "10px" , fontSize : "12px" , fontWeight : "600" , color : "#888"}} className = "post-answered">
                    <Avatar />
                    <div style = {{margin : "0px 10px" }} className = "post-info">
                        <p>Username</p>
                        <span>TimeStamp</span>
                    </div>
                </div>
                <div className = "post-answer">This is test answer</div>
            </div>
        </div>
    </div>
  )
}

export default Post