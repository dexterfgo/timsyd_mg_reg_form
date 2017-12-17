import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Row, Col, Form, FormGroup, ControlLabel } from 'react-bootstrap';
import './App.css';

class App extends Component {
    render() {
        return (
          <div className = "App" >
            <header className = "App-header" >
              <img src = { logo }
                className = "App-logo"
                alt = "logo" / >
              <h1 className = "App-title" > Welcome to TimSyd React Website < /h1>
            < /header >
            <p className = "App-intro" >
              A form will be here once Dex gets off his lazy ass and edits < code > src / App.js < /code>.
            < /p >
          </div>
        );
    }
}

export default App;