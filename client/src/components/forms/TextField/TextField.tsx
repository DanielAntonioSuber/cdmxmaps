import { forwardRef, InputHTMLAttributes } from 'react'

import {
  StyledInput,
  Label,
  TextFieldGroup,
  TextFieldContainer,
  ErrorWrapper
} from './TextField.styles'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  variant?: 'outlined' | 'standard'
  error?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ error, id, label, variant = 'standard', ...rest }, ref) => {
    if (error) {
      return (
        <TextFieldContainer>
          <TextFieldGroup>
            <StyledInput
              ref={ref}
              error={true}
              id={id || label}
              placeholder={' '}
              variant={variant}
              {...rest}
            />
            {label && (
              <Label variant={variant} htmlFor={id || label}>
                {label}
              </Label>
            )}
          </TextFieldGroup>
          <ErrorWrapper>{error}</ErrorWrapper>
        </TextFieldContainer>
      )
    }

    return (
      <TextFieldGroup>
        <StyledInput
          error={false}
          id={id || label}
          placeholder={' '}
          variant={variant}
          {...rest}
        />
        {label && (
          <Label variant={variant} htmlFor={id || label}>
            {label}
          </Label>
        )}
      </TextFieldGroup>
    )
  }
)

TextField.displayName = 'TextField'

export default TextField
