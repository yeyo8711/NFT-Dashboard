import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl="https://lvquybmros0o.usemoralis.com:2053/server"
      appId="i1zce2RhOKCfD9lIu4FQ6KJW6bW7bNLDBFxWiiha"
    >
      <StyledEngineProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyledEngineProvider>
    </MoralisProvider>
  </React.StrictMode>
);
