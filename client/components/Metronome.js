import React from 'react'
import * as Tone from 'tone'

class Metronome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      bpm: Tone.Transport.bpm.value
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  async componentDidMount() {
    this.loop = await new Tone.Loop(function(time) {
      console.log(time)
      new Tone.Synth().toMaster().triggerAttackRelease('C4', '16n')
    }, '4n')
    Tone.Transport.start()
  }
  async handleClick() {
    await this.setState(state => ({
      playing: !state.playing
    }))
    if (this.state.playing) {
      this.loop.start()
    } else {
      this.loop.stop()
    }
  }
  async handleChange(e) {
    await this.setState({
      bpm: e.target.value
    })
    this.loop.stop()
    Tone.Transport.bpm.rampTo(this.state.bpm, 1)
    if (this.state.playing) {
      this.loop.start()
    }
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          {this.state.playing ? 'stop' : 'start'}
        </button>
        Bpm:{' '}
        <input
          name="bpm"
          value={this.state.bpm}
          type="number"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Metronome