import { AccuracyEnum } from '../../utilities/accuracy.utils'
import { StyledLetterButton } from './index.style'

interface ILetterProps {
  position: number
  value: string
  accuracy: AccuracyEnum
}

export const accuracyColorMap =
  new Map<AccuracyEnum, string>(
    [
      [AccuracyEnum.correct, '#6CA965'],
      [AccuracyEnum.wrongPosition, '#C8B653'],
      [AccuracyEnum.none, 'black'],
      [AccuracyEnum.doesNotExist, '#787C7F']
    ]
  )

export const Letter = ({ position, value, accuracy }: ILetterProps) => {
  return (
    <>
      <StyledLetterButton accuracy={accuracy}>
        {value}
      </StyledLetterButton>
    </>
  )
}

export default Letter
export { AccuracyEnum } from '../../utilities/accuracy.utils'
