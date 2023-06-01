import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

import { FacebookIcon } from "../../assets";
import { TwitterIcon } from "../../assets";
import { InstagramIcon } from "../../assets";
import { PinterestIcon } from "../../assets";
import { TelegramIcon } from "../../assets";
import { CallIcon } from "../../assets";
import { MessageIcon} from "../../assets";
import { LocationIcon } from "../../assets";
import { ArrowRightIcon } from "../../assets";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="link_social">
          <FacebookIcon/>
          <PinterestIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
          <TelegramIcon/>
      </div>
      <div className="main_info">
           
        <div className="info">
          Bloom Beauty
          Discover nature's beauty with our natural care products.
        </div>
        <div className="call">
          <CallIcon/>
        + 47 050 123 45 67
        </div>
        <div className="mail">
          <MessageIcon/>
          bloombt@kmail.com 
        </div>
        <div className="location">
          <LocationIcon/>
          Sydney, Australia
        </div>
        <div className="navigation">
          <div className="">
          Help
          Contact us
          FAQ
          Shipping & Returns
          </div>
          <div className="">
          MY ACCOUNT
          Addresses
          Order Status
          Wishlist
          </div>
          <div className="">
          CUSTOMER CARE
          About us
          Blog
          </div>
        </div>
        <div className="subscribe">
          SIGN UP FOR EMAILS
          Stay informed, subscribe to our newsletter now!
          <Input/>
          <Button>Subscribe</Button>
          <ArrowRightIcon/>
        </div>
      </div>
    
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
