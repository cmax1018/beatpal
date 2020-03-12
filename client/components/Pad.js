import React from 'react'
import * as Tone from 'tone'

class Pad extends React.Component {
  constructor(props) {
    super(props)
    this.player = new Tone.Player(props.url).toMaster()
    this.handleDown = this.handleDown.bind(this)
  }
  handleDown(e) {
    console.log('down press registered')
    if (e.key === this.props.keyCode) {
      console.log('key pressed')
      this.player.start(null, null, 1)
    }
  }
  handleUp(e) {}
  render() {
    return (
      <div onKeyDown={this.handleDown} tabIndex="-1">
        <h2>click me </h2>
      </div>
    )
  }
}

export default Pad
