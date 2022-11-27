import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SearchIcon from '@mui/icons-material/Search'
import {Avatar , Button} from '@mui/material'
import './css/AskiiitHeader.css';

function AskiiitHeader() {
  return (
    <div className = "askHeader">
        <div className = "askHeader-content">
            <div className = "askHeader-logo">
                <img src = "" alt = "logo" />
            </div>
            <div className = "askHeader-icons">
                <div className = "askHeader-icon"><HomeIcon /></div>
                <div className = "askHeader-icon"><FeaturedPlayListOutlinedIcon /></div>
                <div className = "askHeader-icon"><AssignmentTurnedInOutlinedIcon /></div>
                <div className = "askHeader-icon"><PeopleAltIcon /></div>
                <div className = "askHeader-icon"><NotificationsNoneOutlinedIcon /></div>
            </div>
            <div className = "askHeader-input">
                <SearchIcon />
                <input type = "text" placeholder = "Search Questions" />
            </div>
            <div className = "askHeader-rem">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Button variant="outlined">Add Question</Button>
            </div>
        </div>
    </div>
  )
}

export default AskiiitHeader