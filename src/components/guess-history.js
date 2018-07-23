import React from 'react';

export default function GuessHistory(props) {
  // console.log("Guess history", props.guessedNumber);
  const guessedNumber = props.guessedNumber;


  return (
    <div> {guessedNumber}
      </div>
  )
}