import "./App.css";
import Home from "./components/Home";
import Rooms from "./components/Rooms/Rooms";
import { Route, Routes } from "react-router-dom";
import BookingRoom from "./components/BookingRoom/BookingRoom";
import Login from "./components/Login/Login";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import { createContext, useState } from "react";

export const createUserContext = createContext();
function App() {
  const [isLogin, setIslogin] = useState({
    isLoginUser: false,
    email: "",
  });

  return (
    <createUserContext.Provider value={[isLogin, setIslogin]}>
      <div className="main-container">
        <Home />
        <Routes>
          <Route path="/" element={<Rooms />} />
          <Route path="/home" element={<Rooms />} />
          <Route
            path="/book/:room"
            element={
              <PrivetRoute isLogin={isLogin.isLoginUser}>
                <BookingRoom />
              </PrivetRoute>
            }
          />
          <Route
            path="/book"
            element={
              <PrivetRoute isLogin={isLogin.isLoginUser}>
                <Rooms />
              </PrivetRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </createUserContext.Provider>
  );
}

export default App;
