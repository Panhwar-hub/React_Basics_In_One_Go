import React, { useState } from 'react'
import UpdatedComponent from './WithCounter'
function HoverCounter(props) {
    return (
    <div>
        <h4 onMouseOver={props.incrementCount}>{props.name} have hoverd {props.count} times</h4>
    </div>
  )
}

export default UpdatedComponent(HoverCounter, 5)