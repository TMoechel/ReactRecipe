import React, { Component } from 'react';
import RecipeDetail from './RecipeDetail/RecipeDetail'

import './App.css';

const RecipeData = [
  {
    Title: 'Gemüselasagne',
    Description: 'Schnell zubereitet, schmeckt sehr lecker'
  },
  {
    Title: 'Pizza Romana',
    Description: 'Frische Pizaa mit Tomanten und Käse'
  }
]

class App extends Component {
  render() {
    return (
      <div>
      <header className="App-header">
        <h2> Recipe App </h2>
      </header>
      <div>
        <RecipeDetail RecipeDetail={RecipeData[0]} />
      </div>
      </div>
    );
  }
}

export default App;
