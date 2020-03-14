import React from 'react'

const EditPad = props => {
  return (
    <div className="editpad">
      <input onChange={props.handleChange} value={props.keyCode} />
      <button
        className="done"
        type="submit"
        onClick={() => props.handleSubmit(props.id, props.keyCode)}
      >
        done
      </button>
    </div>
  )
}

export default EditPad
