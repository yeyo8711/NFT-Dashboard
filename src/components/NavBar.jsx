import React from "react";
import Logo from "../assets/Logo.png";
import whitelogo from "../assets/whitelogo.png";
import { Button } from "@mui/material";
import { FaWallet } from "react-icons/fa";

const NavBar = ({ login, wallet }) => {
  const renderConnectButton = () => {
    if (!window.ethereum) {
      return "Please Install Metamask";
    } else if (!wallet) {
      return (
        <Button
          sx={{ boxShadow: 10 }}
          variant="contained"
          onClick={login}
          className="metamask-btn"
        >
          Connect
        </Button>
      );
    } else {
      return (
        <span>
          <FaWallet className="FaWallet" />

          {`${wallet.slice(0, 6)}...${wallet.slice(35, 42)}`}
        </span>
      );
    }
  };

  return (
    <div className="navbar">
      <div className="logoname">
        <img src={Logo} className="Logo" alt="logo"></img>

        <h1 className="title">MetaMove</h1>
      </div>
      <div className="price">
        <img src={whitelogo} alt="thelogo" className="whitelogo" />
        <p>$5.48</p>
      </div>

      {renderConnectButton()}
    </div>
  );
};
export default NavBar;
