import React from 'react'

const ScoreBoard = ({ score }) => {
  return (
    <div className='score-board'>
      <h1>Candy Crush</h1>
      <h2>Score: {score}</h2>
    </div>
  )
}

export default ScoreBoard