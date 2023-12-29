import './CSS/Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__text">
          <h1>WEATHER APP</h1>
        </div>

        <div className="footer__content">
          <ul>
            <li>Home</li>
            <li>Cities</li>
            <li>News</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
