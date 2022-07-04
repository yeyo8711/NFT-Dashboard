import React from "react";
import { Button } from "@mui/material";
import BNBLogo from "../assets/bnblogo.png";

const buttonStyle = {
  "&.MuiButtonBase-root:hover": {
    color: "#f5f5ff",
  },
};
const contractButton = {
  "&.MuiButtonBase-root:hover": {
    bgcolor: "rgb(84, 28, 167)",
  },
  "&.MuiButtonBase-root": {
    color: "#f5f5ff",
    background: "rgb(82, 75, 99)",
  },
};
const Pools = () => {
  return (
    <div className="pool-box">
      <div className="top-container-pools">
        <div className="mainpool">
          <div className="pool-title">
            <img src={BNBLogo} alt="bnb" />
            <p>MM-BNB</p>
          </div>
          <div className="pool-apr">
            <p>APR</p>
            <p>35%</p>
          </div>
          <div className="pool-earn">
            <p>Earn</p>
            <p>MM + Fees</p>
          </div>
          <div className="rewards-claim">
            <div className="earned-rewards">
              <p>MM Earned: 1236</p>
            </div>
            <Button sx={buttonStyle}>Claim Rewards</Button>
          </div>
          <div className="enablecontractbtn">
            <Button sx={contractButton}>Enable Contract</Button>
          </div>
        </div>
        <div className="mainpool">
          <div className="pool-title">
            <img src={BNBLogo} alt="bnb" />
            <p>MM-BNB</p>
          </div>
          <div className="pool-apr">
            <p>APR</p>
            <p>35%</p>
          </div>
          <div className="pool-earn">
            <p>Earn</p>
            <p>MM + Fees</p>
          </div>
          <div className="rewards-claim">
            <div className="earned-rewards">
              <p>MM Earned: 953</p>
            </div>
            <Button sx={buttonStyle}>Claim Rewards</Button>
          </div>
          <div className="enablecontractbtn">
            <Button sx={contractButton}>Enable Contract</Button>
          </div>
        </div>
      </div>
      <div className="bottom-container-pools">
        <div className="secondary-pool">
          <div className="pool-title">
            <img src={BNBLogo} alt="bnb" />
            <p>MM-BNB</p>
          </div>
          <div className="pool-apr">
            <p>APR</p>
            <p>35%</p>
          </div>
          <div className="pool-earn">
            <p>Earn</p>
            <p>MM + Fees</p>
          </div>
          <div className="rewards-claim">
            <div className="earned-rewards">
              <p>MM Earned: 213</p>
            </div>
            <Button sx={buttonStyle}>Claim Rewards</Button>
          </div>
          <div className="enablecontractbtn">
            <Button sx={contractButton}>Enable Contract</Button>
          </div>
        </div>
        <div className="secondary-pool">
          <div className="pool-title">
            <img src={BNBLogo} alt="bnb" />
            <p>MM-BNB</p>
          </div>
          <div className="pool-apr">
            <p>APR</p>
            <p>35%</p>
          </div>
          <div className="pool-earn">
            <p>Earn</p>
            <p>MM + Fees</p>
          </div>
          <div className="rewards-claim">
            <div className="earned-rewards">
              <p>MM Earned: 10</p>
            </div>
            <Button sx={buttonStyle}>Claim Rewards</Button>
          </div>
          <div className="enablecontractbtn">
            <Button sx={contractButton}>Enable Contract</Button>
          </div>
        </div>
        <div className="secondary-pool">
          <div className="pool-title">
            <img src={BNBLogo} alt="bnb" />
            <p>MM-BNB</p>
          </div>
          <div className="pool-apr">
            <p>APR</p>
            <p>35%</p>
          </div>
          <div className="pool-earn">
            <p>Earn</p>
            <p>MM + Fees</p>
          </div>
          <div className="rewards-claim">
            <div className="earned-rewards">
              <p>MM Earned: 647</p>
            </div>
            <Button sx={buttonStyle}>Claim Rewards</Button>
          </div>
          <div className="enablecontractbtn">
            <Button sx={contractButton}>Enable Contract</Button>
          </div>
        </div>
        <div className="secondary-pool">
          <div className="pool-title">
            <img src={BNBLogo} alt="bnb" />
            <p>MM-BNB</p>
          </div>
          <div className="pool-apr">
            <p>APR</p>
            <p>35%</p>
          </div>
          <div className="pool-earn">
            <p>Earn</p>
            <p>MM + Fees</p>
          </div>
          <div className="rewards-claim">
            <div className="earned-rewards">
              <p>MM Earned: 4752</p>
            </div>
            <Button sx={buttonStyle}>Claim Rewards</Button>
          </div>
          <div className="enablecontractbtn">
            <Button sx={contractButton}>Enable Contract</Button>
          </div>
        </div>
        <div className="secondary-pool">
          <div className="pool-title">
            <img src={BNBLogo} alt="bnb" />
            <p>MM-BNB</p>
          </div>
          <div className="pool-apr">
            <p>APR</p>
            <p>35%</p>
          </div>
          <div className="pool-earn">
            <p>Earn</p>
            <p>MM + Fees</p>
          </div>
          <div className="rewards-claim">
            <div className="earned-rewards">
              <p>MM Earned:996</p>
            </div>
            <Button sx={buttonStyle}>Claim Rewards</Button>
          </div>
          <div className="enablecontractbtn">
            <Button sx={contractButton}>Enable Contract</Button>
          </div>
        </div>
        <div className="secondary-pool">
          <div className="pool-title">
            <img src={BNBLogo} alt="bnb" />
            <p>MM-BNB</p>
          </div>
          <div className="pool-apr">
            <p>APR</p>
            <p>35%</p>
          </div>
          <div className="pool-earn">
            <p>Earn</p>
            <p>MM + Fees</p>
          </div>
          <div className="rewards-claim">
            <div className="earned-rewards">
              <p>MM Earned: 548</p>
            </div>
            <Button sx={buttonStyle}>Claim Rewards</Button>
          </div>
          <div className="enablecontractbtn">
            <Button sx={contractButton}>Enable Contract</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pools;
/*Given:

pool (referring to pool for both individual farms/pools, and farm for the entire yield farm)

An emissions_rate (current reward amount per block)

blocks_per_year (depends on the chain and and average block time)

pool_weight (the multiplier on a specific pool, divided by the total multiplier on the whole farm)

pool_liquidity_usd (the total value all the LP tokens in the pool in USD):



So now, we can determine the rewards allocated to a pool:

yearlyRewardAllocation = emissions_rate * blocks_per_year * pool_weight

And now we can calculate apr:

apr = yearlyRewardAllocation * priceOfRewardToken / pool_liquidity_usd*/
