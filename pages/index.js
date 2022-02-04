import * as React from "react";
import Head from "next/head";
import Home from "./home/index";
import Navbar from "../components/Navbar";

export default function index() {
  return (
    <div>
      <Head>
        <title>Product Data</title>
        <meta name="description" content="Product" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <Home />
    </div>
  );
}
