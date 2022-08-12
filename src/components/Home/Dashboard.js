import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import { Routes, Route } from "react-router-dom";
import { getAllProperties } from "../../services/builderServices";
import axios from "axios";
import { apiUrl } from "../../services/apiUrl";
import FeaturedHeader from "../Header/FeaturedHeader";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Form from "react-bootstrap/Form";

function Dashboard() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [builders, setBuilders] = useState([]);

  const [location1, setLocation1] = React.useState("");
  const [property, setProperty] = React.useState("");

  const handleChange = (e) => {
    setLocation1(e.target.value);
  };

  const [searchInput, setSearchInput] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchInput);
    if (searchInput !== "") {
      const filteredData = builders.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(builders);
    }
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const url = "http://localhost:5000/api/v1/builders";
        await axios.get(url).then((res) => {
          console.log(res.data);
          const updatedData = res.data;
          setBuilders(updatedData);
        });
      } catch (error) {
        console.log("Axios getting error: ", error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <FeaturedHeader />
      {/* Search Bar */}
      <form onSubmit={handleSearch}>
        <Container
          sx={{ py: 4 }}
          maxWidth="md"
          style={{
            backgroundColor: "#eeeeee",
            borderRadius: "25px",
            border: "2px solid #eee",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select City Location</option>
                {builders.length > 0 ? (
                  builders.map((builder) => {
                    return (
                      <>
                        <option
                          key={builder._id}
                          value={builder.pro_city_location}
                        >
                          {builder.pro_area_location}
                        </option>
                      </>
                    );
                  })
                ) : (
                  <>
                    <option selected>Select City Location</option>
                    <option>No Records</option>
                  </>
                )}
              </select>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setSearchInput(e.target.value)}
              >
                <option selected>Select Builders</option>
                {builders.length > 0 ? (
                  builders.map((builder) => {
                    return (
                      <>
                        <option key={builder._id} value={builder.property_name}>
                          {builder.property_name}
                        </option>
                      </>
                    );
                  })
                ) : (
                  <>
                    <option selected>Select Builders</option>
                    <option>No Records</option>
                  </>
                )}
              </select>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Button variant="contained" size="medium" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </form>
      {/* Dashboard */}
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        {searchInput && searchInput.length > 0 ? (
          <Grid container spacing={4}>
            {filteredResults.map((build) => (
              <Grid item key={build._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {build.property_name}
                    </Typography>
                    <Typography variant="button">
                      <b>{build.price}-Lakhs</b>
                    </Typography>
                  </CardContent>

                  <Button
                    size="medium"
                    style={{ backgroundColor: "#993535" }}
                    variant="contained"
                  >
                    View Details
                  </Button>

                  {/* <CardActions>
                   <Button size="medium" style={{ backgroundColor: "#993535" }} variant="contained">View Details</Button>
                 </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={4}>
            {builders.map((build) => (
              <Grid item key={build._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {build.property_name}
                    </Typography>
                    <Typography variant="button">
                      <b>{build.price}-Lakhs</b>
                    </Typography>
                  </CardContent>

                  <Button
                    size="medium"
                    style={{ backgroundColor: "#993535" }}
                    variant="contained"
                  >
                    View Details
                  </Button>

                  {/* <CardActions>
                  <Button size="medium" style={{ backgroundColor: "#993535" }} variant="contained">View Details</Button>
                </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default Dashboard;
