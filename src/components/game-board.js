import React, {Component} from 'react';
import CurrentGuess from './current-guess.js';

export default class GameBoard extends Component  {
  constructor(props) {
    super(props);

    this.state ={
      userGuess: ''
    }
  }
    submitValue(e) {
      e.preventDefault();
      console.log(this.state);
    }

  render() {
    return (
      <div>
        <h1>HOT or COLD</h1>
        {/* output: Make your guess or Temperature */}
        <CurrentGuess 
          setChange={userGuess => this.setState({userGuess})} 
          setValue={this.state.userGuess}
          useSubmitValue={e => this.submitValue(e)}/>
        {/* Number of guesses */}
        
      </div>
    );
  }
}
