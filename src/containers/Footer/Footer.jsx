import { Link } from "react-router-dom";
import { Input } from "components";

import { FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon, TelegramIcon, CallIcon, MessageIcon, LocationIcon, ArrowRightIcon } from "assets";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="link_social">
          <Link to = "/"><FacebookIcon/></Link>
          <PinterestIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
          <TelegramIcon/>
      </div>
      <nav>
           
        <div className="link-group">
          <div className="logo header">
            <span className="pink">Bloom</span>&nbsp;Beauty
          </div>
          <div className="small text">Discover nature's beauty with our natural care products.</div>
          <div className="icon text">
            <CallIcon/>&nbsp;+ 47 050 123 45 67
          </div>
          <div className="icon text">
            <MessageIcon/>&nbsp;bloombt@kmail.com 
          </div>
          <div className="icon text">
            <LocationIcon/>&nbsp;Sydney, Australia
          </div>
        </div>
        <div className="link-group">
          <div className="upper grey header">
            Help
          </div>
          <div className="link text">Contact us</div>
          <div className="link text">FAQ</div>
          <div className="link text">Shipping & Returns</div>
        </div>
        <div className="link-group">
          <div className="upper grey header">
            My Acoount
          </div>
          <div className="link text">Addresses</div>
          <div className="link text">Order Status</div>
          <div className="link text">Wishlist</div>
        </div>
        <div className="link-group">
          <div className="upper grey header">
            Custom Care
          </div>
          <div className="link text">About Us</div>
          <div className="link text">Blog</div>
        </div>
        <div className="link-group">
          <div className="upper header">
            SIGN UP FOR EMAILS
          </div>
          <span className="small text">Stay informed, subscribe to our newsletter now!</span>
          <div className="text">
            <div className="form">
              <div className="field"><Input placeholder = "Email"/></div>
            </div>
          </div>
          <div className="link text">
            Subscribe&nbsp;<ArrowRightIcon/>
          </div>
        </div>
      </nav>
    
      <div className="policy">
        <div>
            © 2023 Bloom Beauty 
        </div>
        <div className="terms">
        <div >
          Privacy Policy
        </div>
        <div>
          Terms and Conditions
        </div>
        </div>
        
      
      </div>
      
      </div>
   
  )
}
