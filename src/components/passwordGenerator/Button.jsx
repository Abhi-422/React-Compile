import React from 'react'

const Button = ({fun,btnName}) => {
  return (
    <button 
            onClick={fun}
            className="bg-blue-500 outline-none cursor-pointer text-white px-3 py-0.5 shrink-0"
            // onMouseDown={}
            >
            {btnName}
          </button>
  )
}

export default Button