import React from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="footer">
      <TiSocialFacebookCircular className="social-icon" />
      <TiSocialTwitter className="social-icon" />
      <TiSocialInstagram className="social-icon" />
      <TiSocialYoutube className="social-icon" />
    </div>
  );
};
export default Footer;
