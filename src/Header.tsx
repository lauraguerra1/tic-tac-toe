import React from 'react'
import teddy from './teddy.png'
import bunny from './bunny.png'


const Header = () => {

  
  return (
    <section className='scores-section'>
      <img src={teddy} className='player-icon' alt='teddy bear icon'/>
      <h1 className='game-heading'>Tic-Tac-Toe</h1>
      <img src={bunny} className='player-icon' alt='teddy bear icon'/>
    </section>
  )
}

export default Header