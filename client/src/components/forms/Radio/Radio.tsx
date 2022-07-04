import { forwardRef, InputHTMLAttributes } from 'react'

import { Input, LabelText, RadioContainer } from './Radio.styles'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Radio = forwardRef<HTMLInputElement, TextFieldProps>(({ label }, ref) => (
  <RadioContainer>
    <Input ref={ref} type='radio' />
    <LabelText>{label}</LabelText>
  </RadioContainer>
))

Radio.displayName = 'Radio'

export default Radio
