import React from 'react'

const NumberGuessComponent = () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log(randomNumber);
  return (
    <div>
        <label>Guess the Number</label>
        <br/>
        <input type="text" />
        <br/>
        <button>Guess</button>
        <h2>hello</h2>
    </div>
  )
}

export default NumberGuessComponent