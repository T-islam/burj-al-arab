import { Button } from "@mui/material";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { firebaseConfig } from "../../utilityes/firebaseConfig";
import { initializeApp } from "firebase/app";
import "./Login.css";
import { createUserContext } from "../../App";
import AuthorSign from "./AuthorSign";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIslogin] = useContext(createUserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [sign, setSign] = useState(true);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    showPassword: false,
  });
  const app = initializeApp(firebaseConfig);
  const handleSingup = () => {
    const { firstName, lastName, password, email } = values;
    const auth = getAuth(app);

    const userinfo = { firstName, lastName };
    createUserWithEmailAndPassword(auth, email, password, userinfo)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };
  // handle sign in  section
  const handlesignin = (e) => {
    e.preventDefault();
    const { email, password } = values;

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setIslogin({ ...isLogin, isLoginUser: true, email: user.email });

        // ...
        navigate(-1);
        console.log(isLogin);
        console.log(user.email);
      })

      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-section">
      <div className="usercreate">
        {!sign && (
          <div className="email-section">
            <SignUpForm
              values={values}
              handleChange={handleChange}
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
              handleSingup={handleSingup}
            />
            <br />
            {!sign && (
              <>
                <span>if you have alrady account please login</span>
                <Button onClick={() => setSign(true)}>Sign In</Button>
              </>
            )}
            <br />
          </div>
        )}

        {sign && (
          <div className="sign-in">
            <LoginForm
              values={values}
              handlesignin={handlesignin}
              handleChange={handleChange}
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
            />
            {sign && (
              <>
                <span> register account </span>
                <Button onClick={() => setSign(false)}>Sign up</Button>
              </>
            )}
          </div>
        )}
      </div>

      <AuthorSign />
    </div>
  );
};

export default Login;
