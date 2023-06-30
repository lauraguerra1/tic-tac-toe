import React from 'react'
import teddy from './teddy.png'
import bunny from './bunny.png'
import { WinLog } from './index'


const Header = ({winnerLog}:{winnerLog: WinLog}) => {

  const getGameHeading = ():string => {
    if(winnerLog.currentWinner) {
      return `${winnerLog.currentWinner} won this round!`
    } else if(winnerLog.currentLoss) {
      return 'everyone lost!'
    } 
    return 'Tic-Tac-Toe'
  }

  return (
    <section className='scores-section'>
      <img src={teddy} className='player-icon' alt='teddy bear icon'/>
      <h1 className='game-heading'>{getGameHeading()}</h1>
      <img src={bunny} className='player-icon' alt='teddy bear icon'/>
    </section>
  )
}

export default Header