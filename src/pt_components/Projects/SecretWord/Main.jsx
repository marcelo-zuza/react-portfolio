// CSS
import './Main.css'
// React
import { useState, useEffect, useCallback } from 'react'
// Data
import { wordsList } from './data/words'
// Components
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import GameOverScreen from './components/GameOverScreen'


const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

const guessQty = 6

function Main() {
  const[gameState, setGameState] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)
    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return {word, category}
  }, [words])

  // Starts the secret word game
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates()
    // pick word and category
    const { word, category } = pickWordAndCategory()
    console.log(word, category)
    setGameState(stages[1].name)
    // create a array of letters
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    console.log(wordLetters)
    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
  }, [pickWordAndCategory])



  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()
    // check if the letter has already been utilized
    if(
      guessedLetters.includes(normalizedLetter) || 
      wrongLetters.includes(normalizedLetter)
      ){
        return;
      }
      // push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ])
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }

  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  // check if guesses ended
  useEffect(() => {
    if(guesses <= 0){
      // reset all states
      clearLetterStates()
      setGameState(stages[2].name)
    }
  }, [guesses])

// check win condition
useEffect(() => {
  const uniqueLetters = [... new Set(letters)]
  // win condition
  if(guessedLetters.length === uniqueLetters.length){
    // add score
    setScore((actualScore) => actualScore += 100)
    // restart game with new word
    startGame()
  }
}, [guessedLetters, letters, startGame])

  // restarts the game
  const retry = () => {
    setScore(0)
    setGuesses(guessQty)
    setGameState(stages[0].name)

  }



  return (
    <div className='App'>
      {gameState === 'start' && <StartScreen startGame={startGame} />}
      {gameState === 'game' && (
        <GameScreen 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory}
          letters={letters} 
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameState === 'end' && <GameOverScreen retry={retry} score={score} />}

    </div>
  )
}

export default Main
