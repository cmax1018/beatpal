import React from 'react'

const EditPad = props => {
  const {handleChange, keyCode, handleSubmit, id} = props
  return (
    <div className="editpad">
      <input onChange={handleChange} value={keyCode} />
      <button
        className="done"
        type="submit"
        onClick={() => handleSubmit(id, keyCode)}
      >
        done
      </button>
    </div>
  )
}

export default EditPad
