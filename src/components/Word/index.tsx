import { useState, useEffect } from 'react';
import Letter, { AccuracyEnum } from '../Letter';

interface IWordProps {
  isWordEvaluated: boolean
  guessWordValue: string
}

const inititalAccuracyArray = [
  AccuracyEnum.none,
  AccuracyEnum.none,
  AccuracyEnum.none,
  AccuracyEnum.none,
  AccuracyEnum.none
]

const replaceAt = (source: string, index: number, replacement: string): string => {
  if (index >= source.length) {
    return source.valueOf()
  }

  return source.substring(0, index) + replacement + source.substring(index + 1)
}

export const evaluateWordScore = (guess: string, answer: string) => {
  let result = [
                  AccuracyEnum.doesNotExist,
                  AccuracyEnum.doesNotExist,
                  AccuracyEnum.doesNotExist,
                  AccuracyEnum.doesNotExist,
                  AccuracyEnum.doesNotExist
               ]

  let mask = answer
  let markedCorrect: number[] = []

  // Store indexes of letters corrected values and matched positions
  guess.split('').forEach((guessLetter, index) => {
    if (guessLetter === mask[index]) {
      result[index] = AccuracyEnum.correct
      mask = replaceAt(mask, index, '_')
      markedCorrect.push(index)
    }
  })

  // Store indexes of letters corrected values and wrong positions
  guess.split('').forEach((guessLetter, index) => {
    if (!markedCorrect.includes(index) && mask.split('').includes(guessLetter)) {
      result[index] = AccuracyEnum.wrongPosition
      const firstPositionInAnswer = mask.indexOf(guessLetter)
      mask = replaceAt(mask, firstPositionInAnswer, '_')
    }
  })



  return result
}

export const retrieveAnswer = () => {
  return 'TESTS'
}

export const Word = ({ isWordEvaluated, guessWordValue } : IWordProps) => {
  const [isEvaluated, setIsEvaluated] = useState(false)
  const [guessValue, setGuessValue] = useState('')
  const[evaluatedResults, setEvaluatedResults] = useState<AccuracyEnum[]>(inititalAccuracyArray)

  useEffect(() => {
    setGuessValue(guessWordValue)
  },[guessWordValue])

  useEffect(()=>{
    const results = evaluateWordScore(guessValue, retrieveAnswer().toUpperCase())

    setEvaluatedResults(results)
    setIsEvaluated(isWordEvaluated)
  },[isWordEvaluated])

  return (
    // Letter rendering
    <>
      {
        guessValue.toUpperCase().split('').map((nextLetter, letterIndex) => {
          return <Letter
                  key= {'letter_' + letterIndex}
                  value={nextLetter}
                  accuracy={isEvaluated ? evaluatedResults[letterIndex] : AccuracyEnum.none}
                  position={letterIndex}/>
        })
      }
    </>
  )
}

