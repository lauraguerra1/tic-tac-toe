import React from 'react'
import teddy from './teddy.png'
import bunny from './bunny.png'
import { WinLog } from './index'


const Header = ({winnerLog}:{winnerLog: WinLog}) => {
  return (
    <section className='scores-section'>
      <img src={teddy} className='player-icon' alt='teddy bear icon'/>
      <h1 className='game-heading'>{winnerLog.currentWinner ? `${winnerLog.currentWinner} won this round` :'Tic-Tac-Toe'}</h1>
      <img src={bunny} className='player-icon' alt='teddy bear icon'/>
    </section>
  )
}

export default Header