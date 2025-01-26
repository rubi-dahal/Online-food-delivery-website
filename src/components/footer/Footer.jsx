import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
       <div className="footer-content">
          <div className="footer-content-left">
             <img src={assets.logo} alt="logo" />
             <p>Delicious flavors, fresh ingredients, and unforgettable dining experiences. Your satisfaction is our priority. Contact us for catering, reservations, and inquiries!</p>
             <div className="footer-social-icons">
                 <img src={assets.facebook_icon} alt="facebook" />
                 <img src={assets.twitter_icon} alt="facebook" />
                 <img src={assets.linkedin_icon} alt="facebook" />
            </div>
          
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
               
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1 111 222 333</li>
                <li>contact@tomato.com</li>
                
            </ul>
        </div>
    </div>
    <hr/>
    <p className='footer-copyright'> 2021 Tomato Restaurant. All rights reserved </p>
    </div>
  )
}

export default Footer
