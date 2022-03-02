import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const MPDatePicker = ({ startDate, setStartDate, setDate }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      onSelect={date => setDate(date)}
    />
  );
};

export default MPDatePicker;
