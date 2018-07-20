import React from 'react';
import GuessHistory from './guess-history';

export default function CurrentGuess(props) {

    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input 
            placeholder="Enter your guess" 
            value={props.setValue}
            onChange={e => props.setChange(e.target.value)}
            />
          <button type="submit" onClick={e => props.useSubmitValue(e)}>Guess</button>
        </form>
        <GuessHistory guessedNumber={props.setValue}/>
      </div>
    );
}