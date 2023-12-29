import React from 'react'
import './CSS/News.css'

const News = () => {
  return (
    <>
      <div className="news__title">
        <h1>News</h1>
      </div>

      <div className="news__container">
        <div className="row">
          <div className="column">
            <div className="news__card">
              <img src={require('../assets/Thunder.jpg')} alt="thunder" />
              <p> Thunder Strikes in</p>
              <h3>Delhi</h3>
              <a href="./">Read More</a>
            </div>
          </div>

          <div className="column">
            <div className="news__card">
              <img src={require('../assets/Cloudy.jpg')} alt="cloudy" />
              <p>Cloudstorms in</p>
              <h3>Manipur</h3>
              <a href="./">Read More</a>
            </div>
          </div>

          <div className="column">
            <div className="news__card">
              <img src={require('../assets/Sunny.jpg')} alt="sunny" />
              <p>It's Summer season in</p>
              <h3>Mumbai</h3>
              <a href="./">Read More</a>
            </div>
          </div>
        </div>
        {/* Row */}
      </div>
    </>
  )
}

export default News
