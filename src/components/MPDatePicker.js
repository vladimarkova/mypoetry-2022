import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const MPDatePicker = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
    />
  );
};

export default MPDatePicker;
