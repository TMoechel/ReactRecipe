import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Title from './Title/Title';
import Description from './Description/Description';

class App extends Component {
  render() {
    return (
      <div>
      <header className="App-header">
        <Title Title="Gemüselasagne"/>
        <Description Description="Schnell zubereitet, schmeckt sehr lecker"/>
      </header>
      <div>
        <Button variant="primary"> Insert Recipe></Button>
      </div>
      </div>
    );
  }
}

export default App;
