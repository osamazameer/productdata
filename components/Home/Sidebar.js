import {
  Box,
  Grid,
  Paper,
  InputBase,
  Slider,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Switch,
} from "@mui/material";
import {
  Bluetooth as BluetoothIcon,
  Search as SearchIcon,
  Wifi as WifiIcon,
} from "@mui/icons-material";

import React from "react";

function Sidebar() {
  return (
    <Grid item md={4}>
      <Box elevation={3}>
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Product"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Box mt={5} width={300}>
        <Typography>Price Range :</Typography>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
      <Box>
        <List
          sx={{
            width: "100%",
            maxWidth: 300,
            bgcolor: "background.paper",
          }}
        >
          <Typography>Filters: </Typography>
          <ListItem>
            {/* <ListItemIcon>
              <WifiIcon />
            </ListItemIcon> */}
            <ListItemText id="switch-list-label-wifi" primary="Used" />
            <Switch
              edge="end"
              // onChange={handleToggle('wifi')}
              // checked={checked.indexOf('wifi') !== -1}
              inputProps={{
                "aria-labelledby": "switch-list-label-wifi",
              }}
            />
          </ListItem>
          <ListItem>
            {/* <ListItemIcon>
              <WifiIcon />
            </ListItemIcon> */}
            <ListItemText id="switch-list-label-wifi" primary="On Sale" />
            <Switch
              edge="end"
              // onChange={handleToggle('wifi')}
              // checked={checked.indexOf('wifi') !== -1}
              inputProps={{
                "aria-labelledby": "switch-list-label-wifi",
              }}
            />
          </ListItem>
          <ListItem>
            {/* <ListItemIcon>
              <BluetoothIcon />
            </ListItemIcon> */}
            <ListItemText
              id="switch-list-label-bluetooth"
              primary="Retailable"
            />
            <Switch
              edge="end"
              // onChange={handleToggle('bluetooth')}
              // checked={checked.indexOf('bluetooth') !== -1}
              inputProps={{
                "aria-labelledby": "switch-list-label-bluetooth",
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Grid>
  );
}

export default Sidebar;
