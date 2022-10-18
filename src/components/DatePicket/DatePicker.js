import { Button, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import "./DatePicker.css";

const DatePicker = () => {
  const [timeFrom, setTimeFrom] = useState(null);
  const [timeTo, settimeTo] = useState(null);

  const handleBooking = () => {
    const booking = { from: timeFrom, to: timeTo };
    console.log(booking);
  };

  return (
    <div className="time-container">
      <div className="time-section">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="From"
            timeTo={null}
            onChange={(newValue) => {
              settimeTo(newValue.$d);
            }}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="To"
            timeFrom={null}
            onChange={(newValue) => {
              setTimeFrom(newValue.$d);
            }}
          />
        </LocalizationProvider>
      </div>
      <Button
        onClick={handleBooking}
        variant="contained"
        backgroundColor="#3535db"
        className="book-btn"
      >
        Date Confirm
      </Button>
    </div>
  );
};

export default DatePicker;
