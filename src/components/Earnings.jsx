import React, { useState, useEffect } from "react";
import { Slider, Switch } from "@mui/material";
import { SpinningCircles } from "react-loading-icons";

const Earnings = ({
  tinyNFTs,
  sharkNFTs,
  dalarniaNFTs,
  moboxNFTs,
  renderNFT,

  tokens,
  NFTTotal,
}) => {
  const [checked, setChecked] = useState(true);
  const [sliderValue, setSliderValue] = useState(1000);
  const [stakedDays, setStakedDays] = useState(0);

  // Calculate the silder value
  function valuetext(value) {
    return `${value}`;
  }
  useEffect(() => {
    setSliderValue(valuetext);
  }, [valuetext]);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const calculateRewards = (value) => {
    let rewards;
    if (checked) {
      rewards = (stakedDays * 1000 + value * 2) / 100000;
    }
    if (!checked) {
      rewards = (value * 2) / 100000;
    }
    console.log(rewards);
    return rewards.toFixed(2);
  };
  //////////////////////////////////////////////////

  return (
    <div className="content-box">
      <div className="earnings-leftmenu">
        <div className="earnings-stats">
          <h1>Your NFTs: 6</h1>
          <h1>Total actions: 6</h1>
          <h1>Days Active: 16</h1>
        </div>
        <div className="sliderbox">
          <h1>MM Token Ammount:</h1>
          <h2>456789</h2>
          <Slider
            aria-label="Volume"
            defaultValue={tokens !== 0 ? Number(tokens * 2) : 1000}
            onChange={(e) => setSliderValue(e.target.value)}
            valueLabelFormat={valuetext}
            step={tokens !== 0 ? (tokens * 5) / 10 : 1000}
            marks
            min={0}
            max={tokens !== 0 ? Number(tokens * 5) : 10000}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="earnings-staked">
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <h1>Staked? ({checked ? "Yes" : "No"})</h1>
        </div>

        <div className="earnings-stakeddays">
          <form autoComplete="off">
            <input
              placeholder="Days Staked"
              className="daysstaked"
              disabled={checked ? "" : true}
              onChange={(e) => setStakedDays(e.target.value)}
            />
          </form>
          <div className="myrewards">
            <div className="earnings-rewards-left">
              <h3>My Potential Rewards</h3>
              <h1>{Math.round(calculateRewards(sliderValue) * 365)}</h1>
            </div>
            <div className="earnings-rewards-right">
              <h4>Daily:{calculateRewards(sliderValue)} USD</h4>
              <h4>
                Monthly:{(calculateRewards(sliderValue) * 30).toFixed(2)}
                USD
              </h4>
              <h4>
                Yearly:{Math.round(calculateRewards(sliderValue) * 365)} USD
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="earnings-nft-main">
        {tinyNFTs ? renderNFT(tinyNFTs) : <SpinningCircles />}
        {sharkNFTs ? renderNFT(sharkNFTs) : <SpinningCircles />}
        {dalarniaNFTs ? renderNFT(dalarniaNFTs) : <SpinningCircles />}
        {moboxNFTs ? renderNFT(moboxNFTs) : <SpinningCircles />}
      </div>
    </div>
  );
};

export default Earnings;
