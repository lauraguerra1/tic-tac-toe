import React from "react"
import './teddy.png'
import './bunny.png'

type BoxProps = {
  id: number, 
  filledWith: string
  takeTurn: (id: number) => void
}

const Box = ({id, filledWith, takeTurn}: BoxProps) => {
  
  return (
    <section className='box' onClick={() => {takeTurn(id)}}>
      <img src={`./${filledWith}.png`} alt={filledWith ? `cartoon ${filledWith} icon` : ''}/>
    </section>
  )
}

export default Box