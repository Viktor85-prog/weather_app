import React from 'react';
import './lastData.css';
import Form from '../Form/Form'
import Date from '../Form/Date'


function LastData() {
    return (
      <div className="lastData">
     Forecast for a Date in the Past
     <Form/>
     <Date/>
      </div>
    );
  }
  
  export default LastData;
  