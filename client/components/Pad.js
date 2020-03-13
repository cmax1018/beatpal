import React from 'react'
import * as Tone from 'tone'

class Pad extends React.Component {
  constructor(props) {
    super(props)
    this.play = this.play.bind(this)
    this.length = props.keysPressed.length
  }
  async componentDidMount() {
    this.player = await new Tone.Player(this.props.url).toMaster()
    console.log(this.player.buffer)
  }
  componentDidUpdate() {
    console.log(this.length, this.props.keysPressed.length)
    if (
      this.props.latestKey === this.props.keyCode &&
      this.props.keysPressed.includes(this.props.keyCode) &&
      this.length < this.props.keysPressed.length
    ) {
      this.play()
    }
    this.length = this.props.keysPressed.length
  }

  play() {
    this.player.restart()
  }

  render() {
    return (
      <div className={this.props.selected ? 'pad selected' : 'pad'}>
        {this.props.keyCode}
        <br />
        {this.props.url}
      </div>
    )
  }
}

export default Pad
