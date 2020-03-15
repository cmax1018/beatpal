import React from 'react'
import * as Tone from 'tone'
import {PadList, Metronome} from './index'
import newConfig from '../newConfig'

//Meant to handle all app wide logic.
class MyPad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keysPressed: [],
      latestKey: '',
      editing: false,
      config: newConfig
    }
  }
  async componentDidMount() {
    console.log('starting Tone...')
    await Tone.start()
    await Tone.Transport.start()
    Tone.context.lookAhead = 0

    this.handleDown = this.handleDown.bind(this)
    this.handleUp = this.handleUp.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
  handleEdit = async () => {
    await this.setState(state => ({editing: !state.editing}))
  }
  handleSubmit = async (id, data) => {
    console.log('fired')
    console.log(data)
    console.log(id)
    await this.setState(state => {
      return {
        config: state.config.map(pad => {
          if (id === pad.id) {
            return {...pad, keyCode: data}
          } else {
            return pad
          }
        }),
        editing: false
      }
    })
  }
  render() {
    return (
      <div
        id="main"
        onKeyDown={this.handleDown}
        onKeyUp={this.handleUp}
        tabIndex="0"
        className="focus-window"
      >
        <div className="padContainer">
          <h1 id="title">Beat Pal</h1>
          <div className="logo-container">
            <img src="assets/logo.png" id="logo" alt="beatpal" />
          </div>
          <div className="buttons">
            <button type="button" onClick={this.handleEdit} className="keys">
              {this.state.editing ? 'cancel' : 'change keys'}
            </button>
            <Metronome />
          </div>
          <PadList
            config={this.state.config}
            keysPressed={this.state.keysPressed}
            latestKey={this.state.latestKey}
            editing={this.state.editing}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default MyPad
