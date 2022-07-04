import React, { useState, useEffect } from "react";

const ActivityMotor = ({ Web3Api, wallet, setTinyActions }) => {
  const [firstRender, setFirstRender] = useState(true);
  //useEffect(() => {
  //if (firstRender) {
  const loadData = async () => {
    setFirstRender(false);
    // GETS DATE 30 DAYS AGO
    const today = new Date(Date.now());
    const daysAgo30 = new Date(new Date().setDate(today.getDate() - 30));
    ////// GETS TX OF USER AND FILTERS OUT TINYWORLD CLAIMS FROM THE LAST 30 DAYS (can claim once balance is over $10)
    const tinyOptions = {
      chain: "bsc",
      address: "0x95af429eedbff09315afb931e20cbeac8514ab19",
      from_date: daysAgo30,
    };
    const tinyClaims = await Web3Api.account.getTokenTransfers(tinyOptions);
    const tinyActions = [];
    tinyClaims.result.forEach((tx) => {
      if (tx.from_address === "0x88cd61e735ffdcb87a751415096b4d2140634ee4") {
        tinyActions.push(tx);
      }
    });
    console.log("Actions from TinyWorld: ", tinyActions.length);
    setTinyActions(tinyActions.length);
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////// GETS TX OF USER AND FILTERS OUT STAR SHARKS CLAIMS FROM THE LAST 30 DAYS (can claim every 15 days)
    const sharkOptions = {
      chain: "bsc",
      address: "0x13d3f93477935a3b77943a7b556cd6d285f3ef14",
      from_date: daysAgo30,
    };
    const sharkClaims = await Web3Api.account.getTokenTransfers(sharkOptions);
    const sharkActions = [];
    sharkClaims.result.forEach((tx) => {
      if (tx.from_address === "0x6def478e04637e9048b504c8953127f7c924658e") {
        sharkActions.push(tx);
      }
    });

    console.log("Actions from SharkNFT: ", sharkActions.length);
    //    setTinyActions(sharkActions.length);
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////// GETS TX OF USER AND FILTERS OUT STAR SHARKS CLAIMS FROM THE LAST 30 DAYS
    const dalarniaOptions = {
      chain: "bsc",
      address: "0xa3fa5C505a9d006FA5D951a2361a9F7500Ac0db2",
      from_date: daysAgo30,
    };
    const dalarniaClaims = await Web3Api.account.getTokenTransfers(
      dalarniaOptions
    );

    const dalarniaActions = [];
    dalarniaClaims.result.forEach((tx) => {
      if (tx.from_address === "0xee66479ca15a89b5ed963dc4622eb69d8accab33") {
        dalarniaActions.push(tx);
      }
    });
    console.log("Actions from Dalarnia: ", dalarniaActions.length);
    //    setTinyActions(sharkActions.length);
  };
  //     loadData();
  //   }
  // }, [wallet]);

  /////////////////////////////////////////////////////
  return (
    <>
      <button
        style={{ position: "absolute", margin: "70px" }}
        onClick={loadData}
      >
        Load Data
      </button>
    </>
  );
};

export default ActivityMotor;
