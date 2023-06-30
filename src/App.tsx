
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Box from './Box'
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti'
import { WinLog } from './index';


function App() {
  const [boxes, setBoxes] = useState<Box[]>(getNewBoxes())
  const [currentPlayer, setCurrentPlayer] = useState<string>('teddy')
  const [winnerLog, setWinnerLog] = useState<WinLog>({teddy: 0, bunny: 0, currentWinner: '', currentLoss: false})

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

  const checkForWins = () => {
    winningConditions.forEach(condition => {
      if(condition.every(position => boxes[position].filledWith && boxes[condition[0]].filledWith === boxes[position].filledWith)) {
        setWinnerLog(prevLog => {
          let newLog = {...prevLog}
          boxes[condition[0]].filledWith === 'teddy' ? newLog.teddy ++ : newLog.bunny ++
          newLog.currentWinner = boxes[condition[0]].filledWith
          return newLog
        })
        return
      } 
    })
  }

  const checkForLoss = () => {
    if (!winnerLog.currentWinner && boxes.every(box => box.filledWith)) {
      setWinnerLog(prevLog => ({...prevLog, currentLoss: true}))
    }
  }
  
  useEffect(() => {
    checkForWins()
    checkForLoss()
  }, [boxes])


  const takeTurn = (id: number) => {
    if(!winnerLog.currentWinner) {
      fillBox(id)
      setCurrentPlayer(prevPlayer => {
        return prevPlayer === 'teddy' ? 'bunny' : 'teddy'
      })
    }
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
    setWinnerLog(prevLog => ({...prevLog, currentWinner: '', currentLoss: false}))
  }

  return (
    <main>
      {winnerLog.currentWinner && 
        <Confetti
          height={window.innerHeight}
          width={window.innerWidth}
        />
      }
      <Header winnerLog={winnerLog}/>
      <div className='game-board'>
        {boxElements}
      </div>
      {winnerLog.currentWinner  || winnerLog.currentLoss ? <button className='reset' onClick={resetGame}>Play Again</button> : <div className='reset-placeholder'></div>}
    </main>
  );
}

export default App;
