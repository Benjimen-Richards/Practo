import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

const Dateselector = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedtime, handleselectedtime] = useState(new Date());
  const timehandler = (time) => {
    handleselectedtime(time);
  };
  const datehandler = (date) => {
    handleDateChange(date);
  };
  sessionStorage.setItem("slot_time", selectedtime.toLocaleTimeString());
  sessionStorage.setItem("slot_date", selectedDate.toDateString());
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        label="Select date"
        value={selectedDate}
        onChange={datehandler}
        animateYearScrolling
      />
      <KeyboardTimePicker
        label="Select time"
        placeholder="08:00 AM"
        mask="__:__ _M"
        value={selectedtime}
        onChange={timehandler}
      />
    </MuiPickersUtilsProvider>
  );
};
export default Dateselector;
