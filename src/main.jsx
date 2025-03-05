import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme/theme.js";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm7qbele600nu07uor53qi7q3/master",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        {/* <StrictMode> */}
        <App />
        {/* </StrictMode> */}
      </ThemeProvider>
    </ApolloProvider>
  </BrowserRouter>
);
