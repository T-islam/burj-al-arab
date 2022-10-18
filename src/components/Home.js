import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createUserContext } from "../App";
const Home = () => {
  const [isLogin, setIslogin] = useContext(createUserContext);
  const { isLoginUser, email } = isLogin;
  return (
    <div className="header-container">
      <nav className="manu">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/book">Book</Link>
        {isLoginUser && (
          <span style={{ position: "relative", display: "inline-block" }}>
            <AccountCircleIcon className="user-icon" />
            <span
              style={{
                color: "white",

                position: "absolute",
                top: "5px",
              }}
            >
              {email}
            </span>
          </span>
        )}
      </nav>
      <div className="header-title">
        <h1>Bruj Al Arab</h1>
        <h5>A global icon of Arabian luxury</h5>
      </div>
    </div>
  );
};

export default Home;
