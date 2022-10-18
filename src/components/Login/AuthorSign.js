import { Button } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

const AuthorSign = () => {
  return (
    <div className="sign-in-section">
      <h4 style={{ padding: "20px", textAlign: "center" }}>
        sign in With Google
      </h4>
      <Button
        variant="contained"
        backgroundcolor="#3535db"
        className="book-btn "
      >
        <GoogleIcon /> Sign in
      </Button>
    </div>
  );
};

export default AuthorSign;
