import React from 'react'
import * as Tone from 'tone'

class Pad extends React.Component {
  async componentDidMount() {
    this.player = await new Tone.Player(this.props.url).toMaster()
    this.loaded = true
    console.log('sampled loaded')
  }
  async componentDidUpdate() {
    if (this.loaded && this.props.keyCode === this.props.keyPressed) {
      await this.player.start(null, null, 1)
    }
  }

  render() {
    return (
      <div onKeyDown={this.handleDown}>
        <h2
          className={
            this.props.keyCode === this.props.keyPressed ? 'selected' : ''
          }
        >
          PAD
        </h2>
      </div>
    )
  }
}

export default Pad
