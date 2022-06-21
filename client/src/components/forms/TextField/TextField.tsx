import { forwardRef, InputHTMLAttributes, Ref } from 'react'

import {
  StyledInput,
  Label,
  TextFieldGroup,
  TextFieldContainer,
  ErrorWrapper
} from './TextField.styles'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  ref?: Ref<HTMLInputElement>
  variant?: 'outlined' | 'standard'
  error?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField (
    { error, id, label, variant = 'standard', ...rest }: TextFieldProps,
    ref
  ) {
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

export default TextField
