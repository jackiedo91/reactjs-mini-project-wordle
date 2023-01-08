// Libraries
import { useState } from 'react'
import { StyledWordEntry, StyledEvaluateButton, StyledWordEntryContainer } from './index.style'

interface IWordEntryProps {
  onGuessEntered(guess: string): void
}

export const WordEntry = ({onGuessEntered}: IWordEntryProps) => {
  const [value, setValue] = useState('')

  // Only allow a-z letters and return the valid uppercase string
  const getValidWordleString = (rawString: string) => {
    const validWordleString = rawString.replace(/[^a-z]/gi, '');

    return validWordleString?.toUpperCase()
  }

  const handleLetterEntry = (e:any) => {
    const validString : string = getValidWordleString(e.target.value)

    onGuessEntered(validString)
    setValue(validString)
  }

  return (
    <StyledWordEntryContainer>
      <StyledWordEntry
        autoFocus
        placeholder='Enter your guess ...'
        value={value}
        maxLength={5}
        onChange={(e) => handleLetterEntry(e)}
      />
      <StyledEvaluateButton onClick={() => {}}>
        Guess
      </StyledEvaluateButton>
    </StyledWordEntryContainer>
  )
}
