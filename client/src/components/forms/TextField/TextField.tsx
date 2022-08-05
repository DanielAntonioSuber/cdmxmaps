import { forwardRef, InputHTMLAttributes, RefObject } from 'react'

import {
  StyledInput,
  Label,
  TextFieldGroup,
  TextFieldContainer,
  ErrorWrapper,
  StyledTextArea
} from './TextField.styles'

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiline?: boolean
  label: string
  variant?: 'outlined' | 'standard'
  error?: string
}

const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    { error, id, label, variant = 'standard', multiline = false, ...rest },
    ref
  ) => {
    return (
      <TextFieldContainer>
        <TextFieldGroup multiline={multiline}>
          {!multiline
            ? (
            <StyledInput
              ref={ref as RefObject<HTMLInputElement>}
              error={!!error}
              id={id || label}
              placeholder={' '}
              variant={variant}
              {...rest}
            />
              )
            : (
            <StyledTextArea
              ref={ref as RefObject<HTMLTextAreaElement>}
              error={!!error}
              id={id || label}
              placeholder={' '}
              variant={variant}
              {...rest}
            />
              )}
          {label && (
            <Label variant={variant} htmlFor={id || label}>
              {label}
            </Label>
          )}
        </TextFieldGroup>
        {error && <ErrorWrapper>{error}</ErrorWrapper>}
      </TextFieldContainer>
    )
  }
)

TextField.displayName = 'TextField'

export default TextField
