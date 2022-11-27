import React from 'react'
import './css/SidebarOptions.css'
import AIIMG from '../images/AI.jpg';
import APPIMG from '../images/APP.jpg';
import DESIGNIMG from '../images/Design.jpg';
import GAMEDEVIMG from '../images/GameDev.jpg';
import WEBDEVIMG from '../images/WebDev.jpg';
import BLCKIMG from '../images/blockchain.jpg';
import CYBERIMG from '../images/cybersecurity.jpg';
import AddIcon from '@mui/icons-material/Add';

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
    <div className="sidebarOption">
      <img src = {AIIMG} alt = "CP images"/>
      <p>Competetive Programming</p>
    </div>
    <div className="sidebarOption">
      <img src = {WEBDEVIMG} alt = "WEBD images"/>
      <p>Web Development</p>
    </div>
    <div className="sidebarOption">
      <img src = {APPIMG} alt = "APPD images"/>
      <p>App Development</p>
    </div>
    <div className="sidebarOption">
      <img src = {GAMEDEVIMG} alt = "GAMED images"/>
      <p>Game Development</p>
    </div>
    <div className="sidebarOption">
      <img src = {AIIMG} alt = "AI images"/>
      <p>AI / ML</p>
    </div>
    <div className="sidebarOption">
      <img src = {DESIGNIMG} alt = "DESIGN images"/>
      <p>Designing</p>
    </div>
    <div className="sidebarOption">
      <img src = {BLCKIMG} alt = "AI images"/>
      <p>Block Chain Devlopment</p>
    </div>
    <div className="sidebarOption">
      <img src = {CYBERIMG} alt = "AI images"/>
      <p>cybersecurity</p>
    </div>
    <div className="sidebarOption">
        <AddIcon />
        <p>Others</p>
    </div>
  </div>
  )
}

export default SidebarOptions