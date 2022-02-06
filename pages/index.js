import * as React from "react";
import Head from "next/head";
import Home from "./home/index";
import Navbar from "../components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

export default function index() {
  const theme = createTheme({
    palette: {
      primary: orange,
    },
  });
  return (
    <div>
      <Head>
        <title>Product Data</title>
        <meta name="description" content="Product" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home />
      </ThemeProvider>
    </div>
  );
}
