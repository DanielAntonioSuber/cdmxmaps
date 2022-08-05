import { ReactNode } from 'react'
import styled from 'styled-components'
import { useSelect } from './SelectContext'

type MenuItemProps = {
  value: string
  children: ReactNode
}

const Li = styled.li`
  width: 100%;
  margin: 1px auto;
  padding: 6px 0;
  display: inline-flex;
  justify-content: center;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary}bf;
  }
`

function Option ({ value, children }: MenuItemProps) {
  const [, { selectOption }] = useSelect()
  return <Li onClickCapture={() => {
    selectOption(value)
  }}>{children}</Li>
}

export default Option
