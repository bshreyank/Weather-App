import React from 'react'
import './CSS/Earth.css'

const Earth = () => {
  return (
    <>
      <div className="Earth__container">
        <div className='Earth__image'> 
            <img src={require('../assets/Earth.jpg')} alt="" />
        </div>
      </div>
    </>
  )
}

export default Earth
