import React from 'react'

const EditPad = props => {
  return (
    <div>
      <input onChange={props.handleChange} value={props.keyCode} />
      <button
        type="submit"
        onClick={() => props.handleSubmit(props.id, props.keyCode)}
      >
        done
      </button>
    </div>
  )
}

export default EditPad
