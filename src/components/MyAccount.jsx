import React from "react";
import { SpinningCircles } from "react-loading-icons";
import { Button } from "@mui/material";

const MyAccount = ({
  tinyNFTs,
  sharkNFTs,
  tokens,
  renderNFT,
  moboxNFTs,
  NFTTotal,
  dalarniaNFTs,

  tinyActions,
}) => {
  const staked = 0;

  const topBannerMessage = () => {
    if (staked && NFTTotal > 0) {
      return `Congrats! We found ${NFTTotal} NFTs that you can earn from and ${tokens} tokens that you have staked!`;
    } else if (staked === 0 && NFTTotal > 0) {
      return `Congrats! We found ${NFTTotal} NFTs that you can earn from. We also see that you have ${tokens} tokens. Purchase MM tokens to earn more! `;
    } else if (staked === 0 && NFTTotal === 0) {
      return `Welcome! We've noticed you dont have any eligible NFTs in this wallet and have 0 MM tokens. You can purchase MM tokens to stake and earn!`;
    } else {
      return `Welcome!`;
    }
  };

  return (
    <div className="content-box">
      <div className="leftmenu">
        <div className="staked-holder-rank">
          <h2>Staked Holder Rank: 125</h2>
        </div>
        <div className="accountrewards">
          <h4>Active Rewards Available</h4>
          <h1>250</h1>
          <div className="myaccount-btns">
            <Button
              variant="contained"
              className="box"
              size="small"
              sx={{
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "rgb(84, 28, 167)",
                },
              }}
            >
              Claim
            </Button>
            <Button
              variant="contained"
              className="box"
              sx={{
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "rgb(84, 28, 167)",
                },
              }}
            >
              Auto-Stake
            </Button>
          </div>
        </div>
        <div className="accountrewards">
          <h4>Staked Rewards Available</h4>
          <h1>343</h1>
          <div className="myaccount-btns">
            <Button
              variant="contained"
              className="box"
              size="small"
              sx={{
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "rgb(84, 28, 167)",
                },
              }}
            >
              Claim
            </Button>
            <Button
              variant="contained"
              className="box"
              size="small"
              sx={{
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "rgb(84, 28, 167)",
                },
              }}
            >
              Auto-Stake
            </Button>
          </div>
        </div>
        <div className="accountrewards">
          <h4>Farming Rewards Available</h4>
          <h1>153</h1>
          <div className="myaccount-btns">
            <Button
              variant="contained"
              className="box"
              size="small"
              sx={{
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "rgb(84, 28, 167)",
                },
              }}
            >
              Claim
            </Button>
            <Button
              variant="contained"
              className="box"
              size="small"
              sx={{
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "rgb(84, 28, 167)",
                },
              }}
            >
              Auto-Stake
            </Button>
          </div>
        </div>
        <div className="accountrewards">
          <h4>Total Rewards Available</h4>
          <h1>745.62</h1>
          <div className="myaccount-btns">
            <Button
              variant="contained"
              className="box"
              size="small"
              sx={{
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "rgb(84, 28, 167)",
                },
              }}
            >
              Claim
            </Button>
            <Button
              variant="contained"
              className="box"
              size="small"
              sx={{
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "rgb(84, 28, 167)",
                },
              }}
            >
              Auto-Stake
            </Button>
          </div>
        </div>
      </div>
      <div className="myaccount-right-menu">
        <div className="myaccount-stats">
          <div className="myaccount-actions">
            <p>Total Actions</p>
            <h4>{tinyActions}</h4>
          </div>
          <div className="myaccount-days">
            <p>Days active this month</p>
            <h4>26</h4>
          </div>
          <div className="myaccount-staked">
            <p>Staked Token Days</p>
            <h4>89</h4>
          </div>
        </div>
        <div className="myaccount-topbanner">
          <h3>{topBannerMessage()}</h3>
        </div>
        <div className="myaccount-assets">
          <div className="myaccount-mytokensnfts">
            <div className="myaccount-assets-title">
              <h1>My MM Tokens</h1>
            </div>
            <div className="myaccount-assets-tokens">
              <h2>.00000002545</h2>
              <p>$21.25 USD</p>
            </div>
          </div>
          <div className="myaccount-mytokensnfts">
            <div className="myaccount-assets-title">
              <h1>My NFTs</h1>
            </div>
            <div className="myaccount-assets-tokens">
              <h1>{NFTTotal}</h1>
            </div>
          </div>
        </div>

        <div className="nft-main">
          {moboxNFTs ? renderNFT(moboxNFTs) : <SpinningCircles />}
          {tinyNFTs ? renderNFT(tinyNFTs) : <SpinningCircles />}
          {sharkNFTs ? renderNFT(sharkNFTs) : <SpinningCircles />}
          {dalarniaNFTs ? renderNFT(dalarniaNFTs) : <SpinningCircles />}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
