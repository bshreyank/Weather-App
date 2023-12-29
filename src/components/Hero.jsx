import React, { useState, useEffect } from 'react'
import './CSS/Hero.css'

const Hero = () => {
// ==== Time, Day, and Date =============================== start
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  const options = {
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
  }

  const formattedDateTime = dateTime.toLocaleString('en-IN', options)
// ==== Time, Day, and Date =============================== end

  return (
    <>
      <div class="header">
        <nav>
          <div class="nav-links" id="nav-links">
            <ul>
              <li>
                <a href="./">Home</a>
              </li>
              <li>
                <a href="./">Cities</a>
              </li>
              <li>
                <a href="./">News</a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="container">
          <div class="card">
            <h2>Weather Details</h2>
            <table>
              <tr>
                <td>Cloudy</td>
                <td>
                  <p id="cloudy">00.00 %</p>
                </td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>
                  <p id="humidity">00.00 %</p>
                </td>
              </tr>
              <tr>
                <td>Wind</td>
                <td>
                  <p id="wind">00.00 km/hr</p>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div class="temperature">
          <h1>32°</h1>
          <h2>Mumbai</h2>
          <h3>{formattedDateTime}</h3>
        </div>
      </div>{' '}
      {/* Header */}
    </>
  )
}

export default Hero
