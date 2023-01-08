// Libraries
import { useState } from 'react';
// My modules
import './App.css';
import { Word } from './components/Word';
import { WordEntry } from './components/WordEntry';

function App() {
  const [wordGuess, setWordGuess] = useState('')

  return(
    <div>
      <WordEntry
        onGuessEntered={guess => setWordGuess(guess)}/>
      <Word
        isWordEvaluated={false}
        guessWordValue={wordGuess} />
    </div>
  )
}

export default App;
