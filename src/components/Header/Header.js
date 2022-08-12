import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  {
    title: "Home",
    url: "/",
    id: 1,
  },
  {
    title: "Builders",
    url: "/builders",
    id: 2,
  },
  {
    title: "Other Services",
    url: "/",
    id: 3,
  },
  {
    title: "Auction",
    url: "/builders",
    id: 4,
  },
  {
    title: "Ads Package",
    url: "/adspackage",
    id: 5,
  },
  {
    title: "Customer Care",
    url: "/builders",
    id: 6,
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
            <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Sign Up
            </Button>
            <Button href="/post-property" variant="contained" sx={{ my: 1, mx: 1.5 }}>
              Post Property
            </Button>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
        
      >
        {pages.map((page) => (
          <Button
          variant="solid"
            noWrap
            key={page.id}
            href={page.url}
            sx={{ p: 1, flexShrink: 0 }}
           
          >
            {page.title}
          </Button>
        ))}
        {/* <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        
          noWrap
         
          sx={{ p: 1, flexShrink: 0 }}
        >
          Dashboard
        </Button> */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </>
  );
};

export default Header;
