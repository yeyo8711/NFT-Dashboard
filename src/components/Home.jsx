import React from "react";
import { Button, Box } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import Staking from "./Staking";
import MyAccount from "./MyAccount";
import Earnings from "./Earnings";
import Pools from "./Pools";

const Home = ({
  wallet,
  tokens,
  tinyNFTs,
  sharkNFTs,
  dalarniaNFTs,
  moboxNFTs,
  renderNFT,
  renderElfinNFT,
  NFTTotal,

  tinyActions,
}) => {
  // Navigation
  const navigate = useNavigate();
  const navigateToPage = (route) => {
    navigate(route);
  };

  return (
    <div className="home">
      <Box className="button-box">
        <Button
          variant="contained"
          className="box"
          sx={{
            ml: 1,
            "&.MuiButtonBase-root:hover": {
              bgcolor: "rgb(84, 28, 167)",
            },
          }}
          onClick={() => navigateToPage("/")}
        >
          <h5>My Account</h5>
        </Button>
        <Button
          variant="contained"
          className="box"
          sx={{
            ml: 1,
            "&.MuiButtonBase-root:hover": {
              bgcolor: "rgb(84, 28, 167)",
            },
          }}
          onClick={() => navigateToPage("/earnings")}
        >
          <h5>Earnings Calculator</h5>
        </Button>
        <Button
          variant="contained"
          className="box"
          sx={{
            ml: 1,
            "&.MuiButtonBase-root:hover": {
              bgcolor: "rgb(84, 28, 167)",
            },
          }}
          onClick={() => navigateToPage("/staking")}
        >
          <h5>Staking</h5>
        </Button>
        <Button
          variant="contained"
          className="box"
          sx={{
            ml: 1,
            "&.MuiButtonBase-root:hover": {
              bgcolor: "rgb(84, 28, 167)",
            },
          }}
          onClick={() => navigateToPage("/pools")}
        >
          <h5>Pools</h5>
        </Button>
      </Box>

      <Routes>
        <Route
          path="/"
          element={
            <MyAccount
              wallet={wallet}
              tokens={tokens}
              tinyNFTs={tinyNFTs}
              sharkNFTs={sharkNFTs}
              dalarniaNFTs={dalarniaNFTs}
              renderElfinNFT={renderElfinNFT}
              moboxNFTs={moboxNFTs}
              renderNFT={renderNFT}
              NFTTotal={NFTTotal}
              tinyActions={tinyActions}
            />
          }
        />
        <Route
          path="/earnings"
          element={
            <Earnings
              wallet={wallet}
              tinyNFTs={tinyNFTs}
              sharkNFTs={sharkNFTs}
              dalarniaNFTs={dalarniaNFTs}
              renderElfinNFT={renderElfinNFT}
              renderNFT={renderNFT}
              moboxNFTs={moboxNFTs}
              tokens={tokens}
              NFTTotal={NFTTotal}
            />
          }
        />
        <Route
          path="/staking"
          element={<Staking wallet={wallet} tokens={tokens} />}
        />
        <Route path="/pools" element={<Pools wallet={wallet} />} />
      </Routes>
    </div>
  );
};
export default Home;
