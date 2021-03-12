import React from 'react';
import './App.css';

import SumShower from './containers/SumShowerContainer';
import RollButton from './containers/RollButtonContainer';
import ClearButton from './containers/ClearButtonContainer';
import DiceContainer from './containers/DiceContainer';

function App() {
  return (
    <div className="app">
      <RollButton />
      <ClearButton />
      <SumShower />
      <DiceContainer />
    </div>
  );
}

export default App;
