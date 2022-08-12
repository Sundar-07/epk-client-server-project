import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function PostPropertyForm() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/v1/builders", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Property Added!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container style={{ backgroundColor: "#F9F5EB",marginTop:"20px" }}>
          <Typography variant="h4" gutterBottom>
            Post Property
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="property_name"
                name="property_name"
                label="Property Name"
                fullWidth
                autoComplete="off"
                variant="standard"
                {...register("property_name")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="off"
                variant="standard"
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="pro_city_location"
                name="pro_city_location"
                label="Property City Location"
                fullWidth
                autoComplete="off"
                variant="standard"
                {...register("pro_city_location")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="pro_area_location"
                name="pro_area_location"
                label="Property Area Location"
                fullWidth
                autoComplete="off"
                variant="standard"
                {...register("pro_area_location")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 210 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Select Property Service
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  // value={age}
                  // onChange={handleChange}
                  label="Age"
                  {...register("pro_service")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Rent/Lease"}>Rent/Lease</MenuItem>
                  <MenuItem value={"Buy"}>Buy</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 210 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Select Property Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  // value={age}
                  // onChange={handleChange}
                  label="Age"
                  {...register("pro_type")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Commercial"}>Commercial</MenuItem>
                  <MenuItem value={"Residential"}>Residential</MenuItem>
                  <MenuItem value={"Agricultural"}>Agricultural</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 210 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Select Property Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  // value={age}
                  // onChange={handleChange}
                  label="Age"
                  {...register("pro_category")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"House/Villa"}>House/Villa</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Officespaces"}>Officespaces</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="price"
                name="price"
                label="Enter Price"
                fullWidth
                autoComplete="off"
                variant="standard"
                {...register("price")}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </Grid>
          </Grid>
        </Container>
      </form>
    </div>
  );
}

export default PostPropertyForm;
