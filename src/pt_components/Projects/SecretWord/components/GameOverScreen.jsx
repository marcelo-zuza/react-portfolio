import './GameOverScreen.css'

const GameOverScreen = ({retry, score}) => {
  return (
    <div>
        <h1>FIM DE JOGO</h1>
        <h2>Sua pontuação foi <span>{score}</span></h2>
        <button onClick={retry}>Resetar o Jogo</button>

    </div>
  )
}

export default GameOverScreen

// For this as well as could be the 