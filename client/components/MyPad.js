import React from 'react'
import * as Tone from 'tone'
import {Pad} from './index'
class MyPad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keysPressed: [],
      latestKey: ''
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
        const keysPressed = [...state.keysPressed, keyPressed]
        return {
          keysPressed,
          latestKey: keyPressed
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
    console.log('this.state', this.state)
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
            selected={this.state.keysPressed.includes('a')}
            latestKey={this.state.latestKey}
          />
          <Pad
            url="assets/snare.mp3"
            keyCode="s"
            keysPressed={this.state.keysPressed}
            className="pad"
            selected={this.state.keysPressed.includes('s')}
            latestKey={this.state.latestKey}
          />
          <Pad
            url="assets/crash.mp3"
            keyCode="d"
            keysPressed={this.state.keysPressed}
            selected={this.state.keysPressed.includes('d')}
            latestKey={this.state.latestKey}
          />
        </div>
      </div>
    )
  }
}

export default MyPad
