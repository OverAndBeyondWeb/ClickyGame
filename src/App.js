import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import cards from './cards.json';

class App extends Component {

  state = {
    cards: cards,
    score: 0
  }

  incrementScore () {
    this.setState({
      score: this.setState.score + 1
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          <div className="game-board">
            {this.state.cards.map(card => {
              return <li 
              className="card" 
              key="card.number">
                {card.number}
              </li>
            })}
          </div>
        </main>       
      </div>  
    )   
  }
}

export default App;
