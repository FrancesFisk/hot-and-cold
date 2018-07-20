import React from 'react';

export default function CurrentGuess(props) {
  
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input 
            placeholder="Enter your guess" 
            value={props.setValue}
            onChange={e => props.setChange(e.target.value)}
            />
          <button type="submit" onClick={e => props.submitValue(e)}>Guess</button>
        </form>
      </div>
    );
}