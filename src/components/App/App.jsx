import React, { useState } from 'react';
import AirlineList from '../AirlineList/AirlineList';
import AirlineForm from '../AirlineForm/AirlineForm';

function App() {

  return (
    <div>
      <h1>Redux Airport</h1>
      <AirlineForm />
      <table>
        <thead>
          <tr>
            <th>
              Come fly the friendly skies!
            </th>
          </tr>
        </thead>
        <AirlineList />
      </table>
    </div>
  );
}

export default App;
