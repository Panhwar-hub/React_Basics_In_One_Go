import React, { useState } from 'react'
import UpdatedComponent from './WithCounter'
function ClickCounter(props) {
   
    return (
    <div>
        <button onClick={props.incrementCount}>{props.name} has Clicked {props.count} times</button>
    </div>

  )
}

export default UpdatedComponent(ClickCounter, 2)