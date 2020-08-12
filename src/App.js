import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Route exact path="/" component={Directory} />
        </div>
      </div>
    </Router>
  );
}

export default App;
