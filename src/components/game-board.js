import React, {Component} from 'react';
import CurrentGuess from './current-guess.js';

export default class GameBoard extends Component  {
  constructor(props) {
    super(props);

    this.state ={
      userGuess: '',
      numberOfGuesses: 0,
      targetNumber: 0,
      guessHistory: []
    }
  }
    submitValue(e) {
      e.preventDefault();
      console.log(this.state);
      console.log("user guess and target", this.state.userGuess + " " + this.state.targetNumber)
      // spread all the values of guessHistory into tempArray
      // add the new value in userGuess into tempArray
      let tempArray = [...this.state.guessHistory, this.state.userGuess]
      let tempNumberOfGuesses = this.state.numberOfGuesses + 1;
      this.setState({
        userGuess: '', 
        numberOfGuesses: tempNumberOfGuesses,
        guessHistory: tempArray});
    }

    chooseTargetNumber() {
      let number = Math.floor(Math.random() * 101);
      console.log("number", number);
      this.setState({targetNumber: number});
    }

    componentDidMount() {
      this.chooseTargetNumber();
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
        <div> Number of Guesses: {this.state.numberOfGuesses} </div>
        
      </div>
    );
  }
}
