import React from 'react'
import {Pad} from './index'

const PadList = props => {
  const {config, keysPressed, latestKey, editing, handleSubmit} = props
  return (
    <div className="pads">
      {config.map(pad => {
        return (
          <Pad
            url={pad.url}
            key={pad.id}
            id={pad.id}
            keyCode={pad.keyCode}
            keysPressed={keysPressed}
            selected={keysPressed.includes(pad.keyCode)}
            latestKey={latestKey}
            editing={editing}
            handleSubmit={handleSubmit}
          />
        )
      })}
    </div>
  )
}
export default PadList
