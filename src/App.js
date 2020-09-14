import React from 'react';
import './App.css';
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="app">
      <h1>hello twitter</h1>

      {/*sidebar */}
      <Sidebar />

      {/*feed */}
      <Feed />

      {/* widget */}
    </div>
  );
}

export default App;
