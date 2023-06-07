import React, { useState } from 'react';
import AirlineList from '../AirlineList/AirlineList';
import AirlineForm from '../AirlineForm/AirlineForm';

function App() {

  return (
    <div>
      <h1>Redux Airport</h1>
      <AirlineForm />
      <table><AirlineList /></table>
    </div>
  );
}

export default App;
