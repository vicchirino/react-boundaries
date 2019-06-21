import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import ErrorBoundaries from './ErrorBoundaries';

import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundaries>
        <ResponsiveContainer />
      </ErrorBoundaries>
    </div>
  );
}

export default App;
