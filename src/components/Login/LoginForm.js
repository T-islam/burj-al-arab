import React from "react";
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
const LoginForm = ({
  handleChange,
  handleClickShowPassword,
  handleMouseDownPassword,
  values,
  handlesignin,
}) => {
  return (
    <>
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
      <br />
      <Button
        onClick={handlesignin}
        variant="contained"
        backgroundcolor="#3535db"
        className="book-btn "
      >
        Sign In
      </Button>
    </>
  );
};

export default LoginForm;
