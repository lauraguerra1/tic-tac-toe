import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Box from './Box'
import { useState } from 'react';



function App() {
  const [boxes, setBoxes] = useState<Box[]>(getNewBoxes())
  const [winFound, setWinFound] = useState<boolean>(false)
  const [currentPlayer, setCurrentPlayer] = useState<string>('teddy')
 
  type Win = [number, number, number]

  const winningConditions: Win[]= [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]
  ]

  type Box = {
    id: number
    filledWith: string
  }

  function getEmptyBox (i: number): Box {
    return {
      id: i,
      filledWith: ''
    }
  }

  function getNewBoxes (): Box[]  {
    let emptyBoxes = []
    for (let i = 0; i < 9; i++) {
      emptyBoxes.push(getEmptyBox(i))
    }
    return emptyBoxes
  }
  
  const fillBox = (id: number) => {
    const clickedBox = boxes.find(box => box.id === id)
    if(!clickedBox?.filledWith) {
      setBoxes(prevBoxes => {
        return prevBoxes.map(box => {
          if(box.id === id) {
            box.filledWith = currentPlayer
          }
          return box
        })
      })
    }
  }

  const takeTurn = (id: number) => {
    fillBox(id)
    setCurrentPlayer(prevPlayer => {
      return prevPlayer === 'teddy' ? 'bunny' : 'teddy'
    })
  }
  
  const boxElements = boxes.map(box => {
    return (
      <Box 
        key={box.id}
        id={box.id}
        filledWith={box.filledWith}
        takeTurn={takeTurn}
      />
    )
  })
  
  const resetGame = () => {
    setBoxes(getNewBoxes())
  }

  return (
    <main>
      <Header/>
      <div className='game-board'>
        {boxElements}
      </div>
    </main>
  );
}

export default App;
