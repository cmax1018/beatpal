import React from 'react'
import * as Tone from 'tone'
import {Pad} from './index'
class MyPad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keysPressed: []
    }
  }
  async componentDidMount() {
    console.log('starting Tone...')
    await Tone.start()
    await Tone.Transport.start()
    Tone.context.lookAhead = 0

    this.handleDown = this.handleDown.bind(this)
    this.handleUp = this.handleUp.bind(this)
  }
  handleDown = async e => {
    const keyPressed = e.key
    if (!this.state.keysPressed.includes(keyPressed)) {
      await this.setState(state => {
        const keysPressed = [
          ...state.keysPressed.filter(key => !state.keysPressed.includes(key)),
          keyPressed
        ]
        return {
          keysPressed
        }
      })
    }
  }
  handleUp = async e => {
    const keyPressed = e.key
    if (this.state.keysPressed.includes(keyPressed)) {
      await this.setState(state => {
        const keysPressed = state.keysPressed.filter(key => key !== keyPressed)
        return {
          keysPressed
        }
      })
    }
  }

  render() {
    return (
      <div
        onKeyDown={this.handleDown}
        onKeyUp={this.handleUp}
        tabIndex="0"
        className="focus-window"
      >
        <h1>mypad</h1>
        <div className="padContainer">
          <Pad
            url="assets/kick.mp3"
            keyCode="a"
            keysPressed={this.state.keysPressed}
          />
          <Pad
            url="assets/snare.mp3"
            keyCode="s"
            keysPressed={this.state.keysPressed}
            className="pad"
          />
          <Pad
            url="assets/crash.mp3"
            keyCode="d"
            keysPressed={this.state.keysPressed}
          />
        </div>
      </div>
    )
  }
}

export default MyPad
