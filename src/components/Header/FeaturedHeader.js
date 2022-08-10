import React from "react";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function FeaturedHeader() {
  const sections = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Builders",
      url: "/builders",
    },
    {
      title: "Ads Package",
      url: "/adspackage",
    },
    {
      title: "Auction",
      url: "/auction",
    },
    {
      title: "Customer Care",
      url: "/customercare",
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      
        <Box
          sx={{ maxWidth: { xs: 400, sm: 500 }, bgcolor: "background.paper" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </Box>
     
    </div>
  );
}

export default FeaturedHeader;
