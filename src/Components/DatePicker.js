import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Picker = function() {
    const [startdate, setStartDate] = useState(null);
    const [enddate, setEndDate] = useState(null);
     return(
      <div>
        <DatePicker
          placeholderText="Start Date"
          dateFormat="dd-MMM-yyyy"
          selected={startdate}
          onChange={startdate => setStartDate(startdate)}
        />
        <DatePicker
          placeholderText="End Date"
          dateFormat="dd-MMM-yyyy"
          selected={enddate}
          onChange={enddate => setEndDate(enddate)}
        />
      </div>      
)};