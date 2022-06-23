import { forwardRef, InputHTMLAttributes } from 'react'
import { Input, LabelText, RadioContainer } from './Radio.styles'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Radio = forwardRef<HTMLInputElement, TextFieldProps>(function Radio (
  { label },
  ref
) {
  return (
    <RadioContainer>
      <Input ref={ref} type='radio' />
      <LabelText>{label}</LabelText>
    </RadioContainer>
  )
})

export default Radio
