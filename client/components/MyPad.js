import React from 'react'
import * as Tone from 'tone'
import {Pad} from './index'
class MyPad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyPressed: ''
    }
  }
  async componentDidMount() {
    console.log('starting Tone...')
    await Tone.start()
    this.handleDown = this.handleDown.bind(this)
  }
  handleDown = e => {
    console.log(e.key, ' pressed')
    this.setState({
      keyPressed: e.key
    })
  }
  render() {
    console.log('this.state.keyPressed', this.state.keyPressed)
    return (
      <div onKeyDown={this.handleDown} tabIndex="0">
        <h1>mypad</h1>
        <Pad
          url="assets/snare.mp3"
          keyCode="s"
          keyPressed={this.state.keyPressed}
        />
        <Pad
          url="assets/kick.mp3"
          keyCode="a"
          keyPressed={this.state.keyPressed}
        />
      </div>
    )
  }
}

export default MyPad
