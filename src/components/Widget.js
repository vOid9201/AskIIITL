import WidgetContent  from './WidgetContent.js';
import React from 'react'

import './css/widget.css'

function Widget() {
  return (
    <div className = "widget">
      <div className="widget__header">
        <h5>Space To Follow</h5>
      </div>
      <div className="widget__contents">
        <WidgetContent/>
      </div>
    </div>
  )
}

export default Widget