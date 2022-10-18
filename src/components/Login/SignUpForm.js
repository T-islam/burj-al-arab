import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";

const SignUpForm = ({
  handleChange,
  handleClickShowPassword,
  handleMouseDownPassword,
  values,
  handleSingup,
}) => {
  return (
    <>
      <h2 style={{ padding: "20px", textAlign: "center" }}>Please Sign up</h2>
      <TextField
        onChange={handleChange("firstName")}
        label="First Name"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "50ch" }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      />
      <TextField
        onChange={handleChange("lastName")}
        label="Last Name"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "50ch" }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      />
      <br />
      <TextField
        onChange={handleChange("email")}
        label="Email"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "50ch" }}
        InputProps={{
          startAdornment: <InputAdornment position="end"></InputAdornment>,
        }}
      />
      <br />
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <br />
      <Button
        onClick={handleSingup}
        variant="contained"
        backgroundcolor="#3535db"
        className="book-btn sign-up"
      >
        Sign up
      </Button>
    </>
  );
};

export default SignUpForm;
