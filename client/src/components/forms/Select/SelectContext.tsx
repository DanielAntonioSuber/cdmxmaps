import {
  createContext,
  ReactNode,
  Reducer,
  RefObject,
  useContext,
  useReducer,
  useRef
} from 'react'

type SelectState = {
  value: string|null
  isOpen: boolean
}

type SelectAction = { type: 'selectOption', payload: {value: string}}
  | { type: 'toggling' }
  | { type: 'close' }
  | { type: 'add'; payload: {value: string} }

type Actions = {
  toggling: () => void
  close: () => void
  selectOption: (value: string) => void
}

const SelectContext = createContext<
  [SelectState, Actions, RefObject<HTMLDivElement>]
>(null!)

const selectReducer: Reducer<SelectState, SelectAction> = (state, action) => {
  switch (action.type) {
    case 'selectOption':
      return {
        ...state, isOpen: false, value: action.payload.value
      }
    case 'toggling':
      return { ...state, isOpen: !state.isOpen }
    case 'close':
      return { ...state, isOpen: false }
    default:
      return state
  }
}

function SelectProvider ({ children }: { children: ReactNode }) {
  const [selectState, selectDispatch] = useReducer(selectReducer, {
    value: null,
    isOpen: false
  })
  const containerRef = useRef<HTMLDivElement>(null)

  const selectOption = (value: string) =>
    selectDispatch({ type: 'selectOption', payload: { value } })

  const toggling = () => selectDispatch({ type: 'toggling' })

  const close = () => {
    containerRef.current?.blur()
    selectDispatch({ type: 'close' })
  }

  const actions: Actions = { selectOption, toggling, close }

  return (
    <SelectContext.Provider value={[selectState, actions, containerRef]}>
      {children}
    </SelectContext.Provider>
  )
}

function useSelect () {
  const context = useContext(SelectContext)
  if (!context) throw new Error('There is no Select provider')
  return context
}

export { SelectContext, SelectProvider, useSelect }
