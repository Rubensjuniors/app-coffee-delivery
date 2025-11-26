export interface CartButtonProps {
  color: 'yellow' | 'purple'
  onClickCart: () => void
  count?: number
  isDisabled?: boolean
}
