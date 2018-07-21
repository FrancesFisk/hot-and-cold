import React from 'react';
import GuessHistory from './guess-history';

export default function CurrentGuess(props) {

    return (
      <div>
        <form onSubmit={e => props.useSubmitValue(e)}>
          <input 
            placeholder="Enter your guess" 
            value={props.setValue}
            onChange={e => props.setChange(e.target.value)}
            />
          <button type="submit">Guess</button>
        </form>
      </div>
    );
}