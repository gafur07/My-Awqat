import React from 'react'
import bg from "./bg.jpg"

const Heading = ({children}) => {
  return (
    <div className='heading'>
        <h1>{children}</h1>
    </div>
  )
}

export default Heading