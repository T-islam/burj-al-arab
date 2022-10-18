import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { createUserContext } from "../../App";
import DatePicker from "../DatePicket/DatePicker";

const BookingRoom = () => {
  const RoomType = useLocation();
  const [isLogin, setIslogin] = useContext(createUserContext);
  const { isLoginUser, email } = isLogin;
  return (
    <div>
      <h2>Room Type: {RoomType.state}</h2>
      {isLoginUser && <h4>Welcome {email}</h4>}
      <DatePicker />
    </div>
  );
};

export default BookingRoom;
