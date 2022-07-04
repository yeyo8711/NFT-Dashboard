import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import ActivityMotor from "./ActivityMotor";
import Home from "./Home";
import Footer from "./Footer";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { ethers } from "ethers";
import loadData from "./ActivityMotor";

function App() {
  const [wallet, setWallet] = useState(null);
  const [tokens, setTokens] = useState(0);
  ///////////// NFT STATE ////////////////
  const [NFTTotal, setNFTTotal] = useState();
  const [tinyNFTs, setTinyNFTs] = useState();
  const [sharkNFTs, setSharkNFTs] = useState();
  const [dalarniaNFTs, setDalarniaNFTs] = useState();
  const [moboxNFTs, setMoboxNFTs] = useState();
  const [firstRender, setFirstRender] = useState(true);
  //////////////// Actions State //////////////////
  const [tinyActions, setTinyActions] = useState(0);

  // logins to metamask and grabs account
  const { authenticate, isAuthenticated, user } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  // Logs user in  ////
  const login = async () => {
    if (isAuthenticated) {
      setWallet(user.get("ethAddress"));
    } else {
      await authenticate({ signingMessage: "hello" })
        .then(function (user) {
          console.log(user.get("ethAddress"));
          setWallet(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  // If User has already logged in before, this will take his wallet and set state to avoid him having to log in again
  useEffect(() => {
    if (isAuthenticated && firstRender) {
      setWallet(user.get("ethAddress"));
      setFirstRender(false);
    }
  }, []);

  //Gets Tokens of user
  useEffect(() => {
    const fetchTokenBalances = async () => {
      if (wallet) {
        const options = {
          chain: "bsc",
          //Test wallet, replace with "wallet"
          address: "0xE62A72C3e73F00BFb427caB9e439aa0EbD6752c3",
        };
        const balances = await Web3Api.account.getTokenBalances(options);

        const filteredArr = balances.filter(
          (token) =>
            token.token_address.toString() ===
            // Tiny Coin// Replace with MM token
            "0x05aD6E30A855BE07AfA57e08a4f30d00810a402e"
        );

        if (filteredArr.length > 0) {
          const newBalance = filteredArr[0].balance.toString();
          const realBalance = ethers.utils.formatUnits(newBalance, 18);
          setTokens(Number(realBalance).toFixed(6));
        }
      }
    };
    fetchTokenBalances();
  }, [wallet, isAuthenticated]);

  // Gets NFTs

  useEffect(() => {
    const fetchNFTsForContract = async () => {
      // get NFTs for TINY WORLD
      if (isAuthenticated) {
        const tinyOptions = {
          chain: "bsc",
          address: "0x55E2c8Ea0CFD98834A52baFD3C1354D6948d8888",
          token_address: "0xD80EdcF7C73B43852dA39497a6B5E9cbA1Edf39e",
        };
        const tinyNFTs = await Web3Api.account.getNFTsForContract(tinyOptions);

        setTinyNFTs(tinyNFTs.result);

        /////////////////////////////////////
        // Gets NFTs for SHARK Stars
        const sharkOptions = {
          chain: "bsc",
          // Change back to "wallet"
          address: "0x7FFF36c5e2F5b3b79d93B3b37E0e7Ff8eFfB502f",
          token_address: "0x416f1d70c1c22608814d9f36c492efb3ba8cad4c",
        };
        const sharkNFTs = await Web3Api.account.getNFTsForContract(
          sharkOptions
        );

        setSharkNFTs(sharkNFTs.result);
        //////////////////////////////////
        // Gets NFTs for MINES OF DALARNIA
        const dalarniaOptions = {
          chain: "bsc",
          // Change back to "wallet"
          address: "0x502a6155e54d0d1473fb0ee18e36eb0e496c9f77",
          token_address: "0x23fF55bCcFb446864814D19EDDd11FB42615D50A",
        };
        const dalarniaNFTs = await Web3Api.account.getNFTsForContract(
          dalarniaOptions
        );

        setDalarniaNFTs(dalarniaNFTs.result);

        //////////////////////////////////
        // Gets NFTs for ELFIN
        const moboxOptions = {
          chain: "bsc",
          address: "0xbb38a9742319823799168e63bee5f0eebca1b03e",
          token_address: "0x24fADCEfd2117719C4078C08b352b22C74542418",
        };
        const moboxNFTs = await Web3Api.account.getNFTsForContract(
          moboxOptions
        );

        setMoboxNFTs(moboxNFTs.result);
        //ADDS NFT totals for the user
        showState(
          tinyNFTs.result.length,
          sharkNFTs.result.length,
          dalarniaNFTs.result.length,
          moboxNFTs.result.length
        );
      }
    };
    fetchNFTsForContract();
  }, [wallet]);

  //Gets NFT totals for the user
  let total;
  const showState = (tiny, shark, delarnia, mobox) => {
    total = tiny + shark + delarnia + mobox;
    setNFTTotal(total);
  };

  /////////////////////////////////////////////////////
  // Renders NFTs
  const renderNFT = (token) => {
    return token.map((nft) => {
      const image = JSON.parse(nft.metadata);

      return (
        <div className="nft-box" key={nft.token_id}>
          <img src={image ? image.image : " No Image"} alt={nft.token_id} />
          <div className="nft-header">{nft.name}</div>
          <div className="nft-text">{nft.token_id}</div>
        </div>
      );
    });
  };

  //////////////////////////////////////////////
  return (
    <div className="App">
      <NavBar login={login} wallet={wallet} />
      <ActivityMotor
        Web3Api={Web3Api}
        wallet={wallet}
        setTinyActions={setTinyActions}
      />
      <Home
        tokens={tokens}
        login={login}
        wallet={wallet}
        tinyNFTs={tinyNFTs}
        sharkNFTs={sharkNFTs}
        dalarniaNFTs={dalarniaNFTs}
        moboxNFTs={moboxNFTs}
        renderNFT={renderNFT}
        NFTTotal={NFTTotal}
        tinyActions={tinyActions}
      ></Home>

      <Footer />
    </div>
  );
}

export default App;
/* */
