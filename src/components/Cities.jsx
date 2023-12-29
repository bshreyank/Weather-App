import React from 'react'
import './CSS/Cities.css'

const Cities = () => {
  return (
    <>
      <div className='cities__title'>
        <h1>Cities</h1>
      </div>

      <div className="cities__container">
        <div className="row">

          <div className="column">
            <div className="cities__card">
              <img src={require('../assets/Thunder.jpg')} alt="thunder" />
              <h3>Thunder</h3>
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>

          <div className="column">
            <div className="cities__card">
              <img src={require('../assets/Cloudy.jpg')} alt="cloudy" />
              <h3>Cloudy</h3>
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>

          <div className="column">
            <div className="cities__card">
              <img src={require('../assets/Sunny.jpg')} alt="sunny" />
              <h3>Sunny</h3>
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>
        </div>
        {/* Row */}
      </div>
    </>
  )
}

export default Cities
