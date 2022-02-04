import React, { useEffect, useState } from "react";
import { Grid, Box, Container } from "@mui/material";
import Jumbotron from "../../components/Home/Jumbotron";
import Sidebar from "../../components/Home/Sidebar";
import ProductGrid from "../../components/Home/ProductGrid";

function Home() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/products");
      const { data } = await res.json();
      console.log(data);
      setProducts(data);
      return;
    }
    fetchData();
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <>
      <Jumbotron />
      <Box mt={10}>
        <Container>
          <Grid container spacing={2} my={10}>
            <Sidebar />
            <ProductGrid products={products} />
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;
