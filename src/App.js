import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ChannelsPage from './components/ChannelsPage';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/channels" component={ChannelsPage}/>
          <Route path="/about" component={AboutPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
