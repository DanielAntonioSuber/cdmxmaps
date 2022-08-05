import { FC, ReactNode } from 'react'

import {
  DropDown,
  Icon,
  Input,
  Label,
  SelectContainer,
  SelectGroup
} from './Select.styles'

import { SelectProvider, useSelect } from './SelectContext'

type SelectProps = {
  variant?: 'standard' | 'outlined'
  children: ReactNode
  label: string
  error?: string
}

function SelectWrapper ({
  children,
  label,
  variant = 'standard',
  error
} : SelectProps) {
  const [{ value, isOpen }, { toggling, close }, containerRef] = useSelect()

  const focusContainer = () => containerRef.current?.focus()
  console.log(value)
  return (
    <SelectContainer
      onClick={() => {
        focusContainer()
        toggling()
      }}
      onBlur={() => close()}
    >
      <SelectGroup
        error={!!error}
        tabIndex={-1}
        ref={containerRef}
        variant={variant}
      >
        <Input type='text' placeholder={' '} value={value !== null ? value : ''} readOnly disabled />
        {isOpen && <DropDown>{children}</DropDown>}
        <Icon open={isOpen} />
        <Label variant={variant}>{label}</Label>
      </SelectGroup>
    </SelectContainer>
  )
}

const Select: FC<SelectProps> = (props) => (
  <SelectProvider>
    <SelectWrapper {...props} />
  </SelectProvider>
)

export default Select
