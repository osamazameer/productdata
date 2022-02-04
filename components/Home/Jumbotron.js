import { Container, Box, Grid, Typography } from "@mui/material";
import React from "react";

function Jumbotron() {
  return (
    <Box
      style={{
        backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Typography
              mt={20}
              color={"white"}
              component={"h1"}
              variant="h1"
              fontSize={"28px"}
              fontWeight={"bold"}
            >
              Product Data Co.
            </Typography>
            <Typography color={"white"} component={"p"} variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              fugit eveniet, quo adipisci assumenda quasi ducimus unde autem
              ipsam veritatis delectus quos quia, corrupti sequi odio! Nam
              debitis officiis animi?
            </Typography>
          </Grid>
          <Grid item md={8} display={"flex"} alignContent={"flex-end"}>
            <img
              width={"70%"}
              style={{ display: "block", margin: "auto" }}
              src="https://freeonlinesurveys.com/wp-content/uploads/2019/09/Online-Survey-Tool-Features.png"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Jumbotron;
