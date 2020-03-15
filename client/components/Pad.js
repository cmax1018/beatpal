import React from 'react'
import * as Tone from 'tone'
import {EditPad} from './index'

//meant to handle pad specific logic
class Pad extends React.Component {
  constructor(props) {
    super(props)
    this.play = this.play.bind(this)
    this.length = props.keysPressed.length
    this.state = {
      keyCode: props.keyCode
    }
    this.handleChange = this.handleChange.bind(this)
  }
  async componentDidMount() {
    this.player = await new Tone.Player(
      'assets/' + this.props.url + '.wav'
    ).toMaster()
  }
  componentDidUpdate() {
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
    if (!this.props.editing) {
      this.player.start()
    }
  }
  async handleChange(e) {
    if (e.target.value.length <= 1) {
      await this.setState({
        keyCode: e.target.value
      })
    }
  }
  render() {
    const {selected, keyCode, editing, url, handleSubmit, id} = this.props
    return (
      <div className={selected ? 'pad selected' : 'pad'} onClick={this.play}>
        {this.props.editing ? (
          <EditPad
            className={selected ? 'pad selected' : 'pad'}
            keyCode={this.state.keyCode}
            handleChange={this.handleChange}
            handleSubmit={handleSubmit}
            id={id}
          />
        ) : (
          keyCode
        )}
        <br />
        {editing ? url : ''}
      </div>
    )
  }
}

export default Pad
