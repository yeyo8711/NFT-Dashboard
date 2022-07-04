import React, { useState, useEffect } from "react";
import APYStatsModal from "./APYStatsModal";
import { Button } from "@mui/material";
import { useMoralisWeb3Api } from "react-moralis";
import { ethers } from "ethers";
import { IoIosStats } from "react-icons/io";

const Staking = ({ tokens }) => {
  const [rewardTokens, setRewardTokens] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [apy, setApy] = useState(0);
  const [firstRender, setFirstRender] = useState(true);
  const [firstRender2, setFirstRender2] = useState(true);
  const [modal, setModal] = useState(false);

  const Web3Api = useMoralisWeb3Api();

  useEffect(() => {
    //////////////////////////////////////////
    //// Gets Price of One Token /////
    if (firstRender) {
      const fetchTokenPrice = async () => {
        const options2 = {
          address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
          chain: "bsc",
          exchange: "PancakeSwapv2",
        };
        const price = await Web3Api.token.getTokenPrice(options2);
        setTokenPrice(price.usdPrice);
        setFirstRender(false);
      };
      fetchTokenPrice();
    }
  }, []);

  useEffect(() => {
    if (firstRender2) {
      const fetchPoolInfo = async () => {
        ///////////////////////////////////////
        /////// Gets the pool of reward tokens/////
        const options = {
          chain: "bsc",
          address: "0x45c54210128a065de780C4B0Df3d16664f7f859e",
          token_address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
        };
        const stakedPancake = await Web3Api.account.getTokenBalances(options);
        const balance = ethers.BigNumber.from(stakedPancake[0].balance);
        setRewardTokens(Number(ethers.utils.formatEther(balance)).toFixed(2));
      };
      setFirstRender2(false);
      fetchPoolInfo();
    }
  }, [tokenPrice]);

  const openModal = () => {
    setModal(!modal);
  };
  const closeModal = () => {
    if (modal) {
      setModal(false);
    }
  };

  useEffect(() => {
    /////// Calcuates APY ////
    if (rewardTokens && tokenPrice) {
      const valueOfRewardToken = 105120000;
      const valueOfStakedToken = rewardTokens * tokenPrice;
      const apy = (valueOfRewardToken / valueOfStakedToken) * 100;
      console.log(apy);

      setApy(apy);
    }
  }, [rewardTokens]);

  return (
    <div className="content-box-staking" onClick={closeModal}>
      <div className="main-container">
        <div className="top-banner">
          <h2>Maximize yield by staking MM for xMM</h2>
          For every swap on the exchange on every chain, 0.05% of the swap fees
          are distributed as SUSHI proportinal to your share of the SUSHI BAR.
          When your SUSHI is staked into the SUSHI BAR, you recieve XSUSHI in
          return for voting right and a filly composable token that can interact
          with other protocols. Your XSUSHI is continiously compoinding, wne you
          unstake you will receive all the originally deposited SUSHI and any
          addiotional from fees.
        </div>
        <div className="container1">
          <div className="left-container">
            <div className="top-container">
              <div className="staking-apy">
                Staking APY
                <br />
                <IoIosStats
                  style={{ height: "20px", cursor: "pointer" }}
                  onClick={openModal}
                />
              </div>
              <div className="percent-apy">{apy.toFixed(2)}%</div>
            </div>
            <div className="bottom-container">
              <div className="stake-btns">
                <Button
                  variant="contained"
                  sx={{
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "rgb(84, 28, 167)",
                    },
                  }}
                >
                  Stake
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "rgb(84, 28, 167)",
                    },
                  }}
                >
                  Unstake
                </Button>
              </div>
              <div className="stake-mm">
                <h1>MM Current Price: ${tokenPrice.toFixed(2)}</h1>
              </div>
              <div className="form-input">
                <form>
                  <input placeholder={`Balance: ${tokens}`}></input>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "rgb(84, 28, 167)",
                      },
                    }}
                  >
                    STAKE
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="staked-container">
              <div className="staked-top">Staked</div>
              <div className="staked-bottom">{rewardTokens}</div>
              <br />
              MM Tokens
            </div>
            <div className="unstaked-container">
              <div className="unstaked-top">Unstaked</div>
              <div className="unstaked-bottom">64125</div>
              <br />
              MM Tokens
            </div>
          </div>
        </div>
      </div>

      {modal ? <APYStatsModal openModal={openModal} /> : ""}
    </div>
  );
};

export default Staking;

/* APR Pool(in %) = (total_value_of_reward_token/total_value_of_staked_token)*100

where,

total_value_of_reward_token = no_of_reward_tokens * price_of_one_reward_token
no_of_reward_tokens = tokens_per_block * total_no_of_blocks_in_a_year

total_value_of_staked_token = no_of_staked_token * price_of_one__staked_token */
