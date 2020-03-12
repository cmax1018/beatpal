import React from 'react'
import * as Tone from 'tone'

class Pad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false
    }
    this.play = this.play.bind(this)
  }
  async componentDidMount() {
    this.player = await new Tone.Player(this.props.url).toMaster()
    console.log(this.player.buffer)
  }
  componentDidUpdate() {
    if (this.props.keysPressed.includes(this.props.keyCode)) {
      this.play()
    }
  }

  play() {
    if (this.state.playing) {
      this.player.restart()
    } else {
      return this.player.start()
    }
  }

  render() {
    return (
      <div className={this.state.playing ? 'pad selected' : 'pad'}>
        {this.props.keyCode}
      </div>
    )
  }
}

export default Pad
