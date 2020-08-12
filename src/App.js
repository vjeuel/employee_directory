import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Directory} />
        </header>
      </div>
    </Router>
  );
}

export default App;
