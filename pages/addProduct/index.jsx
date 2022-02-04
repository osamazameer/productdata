import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  TextareaAutosize,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import fetch from "isomorphic-unfetch";

const theme = createTheme();

export default function AddProduct() {
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add Product
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  required
                  onChange={handleChange}
                  fullWidth
                  value={data?.title}
                  id="title"
                  label="Product Title"
                  autoFocus
                />
              </Grid>
              <FormControl
                fullWidth
                style={{ margin: "20px auto 0 auto", width: "80%" }}
              >
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="category"
                  value={data?.category}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Divisions"}>Divisions</MenuItem>
                  <MenuItem value={"Manufacturers"}>Manufacturers</MenuItem>
                  <MenuItem value={"ASTM Standards"}>ASTM Standards</MenuItem>
                </Select>
              </FormControl>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  value={data?.price}
                  type="number"
                  id="price"
                  label="Price"
                  name="price"
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  onChange={handleChange}
                  fullWidth
                  minRows={5}
                  value={data?.description}
                  name="description"
                  style={{ width: 400 }}
                  label="Description"
                  placeholder="Description"
                  id="description"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
