import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Paper,
  Chip,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProductGrid = ({ products }) => {
  return (
    <Grid item md={8}>
      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid item md={4} key={product._id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://freeonlinesurveys.com/wp-content/uploads/2019/09/Online-Survey-Tool-Features.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title} <small>${product.price}</small>
                    </Typography>
                    <Chip label={product.category} variant="outlined" />
                    <Typography
                      p={2}
                      my={2}
                      variant="body2"
                      color="text.secondary"
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" variant="contained">
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ProductGrid;
