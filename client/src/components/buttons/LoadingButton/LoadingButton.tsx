import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

import Button from '../Button'
import { Loader } from './LoadingButton.styles'

export interface LoadingButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean
  loadingIndicator?: ReactNode
}

const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  function LoadingButton (
    {
      children = '',
      loading = false,
      loadingIndicator = <Loader />,
      ...props
    }: LoadingButtonProps,
    ref
  ) {
    return (
      <Button type='submit' ref={ref} {...props}>
        {loading ? loadingIndicator : children}
      </Button>
    )
  }
)

export default LoadingButton
