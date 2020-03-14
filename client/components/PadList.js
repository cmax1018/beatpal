import React from 'react'
import {Pad} from './index'

const PadList = props => {
  return props.config.map(pad => {
    return (
      <Pad
        url={pad.url}
        key={pad.id}
        id={pad.id}
        keyCode={pad.keyCode}
        keysPressed={props.keysPressed}
        selected={props.keysPressed.includes(pad.keyCode)}
        latestKey={props.latestKey}
        editing={props.editing}
        handleSubmit={props.handleSubmit}
      />
    )
  })
}
export default PadList
