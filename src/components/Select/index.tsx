import { CreditCard } from '@phosphor-icons/react'

import { Toggle } from '../ui/toggle'

export function Select() {
  return (
    <Toggle>
      <CreditCard className="size-5 text-product-purple" />
      Cartão de Crédito
    </Toggle>
  )
}
