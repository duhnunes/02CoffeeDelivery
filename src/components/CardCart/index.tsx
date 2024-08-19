import { Trash } from '@phosphor-icons/react'

import cupOfCoffee from '../../../public/images/coffees/expresso.png'
import { InputNumber } from '../InputNumber'
import { Button } from '../ui/button'

export function CardCart() {
  return (
    <section className="bg-base-card flex items-start px-1 py-2 gap-5 w-[368px]">
      <img
        className="size-16"
        src={cupOfCoffee}
        alt=""
      />
      <article className="flex flex-col items-start gap-2">
        <span className="text-title-sm text-base-subtitle font-title">
          Expresso Tradicional
        </span>
        <div className="flex gap-2">
          <InputNumber />
          <Button
            variant="secondary"
            size="secondary"
          >
            <Trash className="size-5 text-product-purple" />
            Remover
          </Button>
        </div>
      </article>

      <div className="flex items-baseline gap-1">
        <span className="font-text text-text-sm">R$</span>
        <span className="text-title-base text-base-text font-title">
          9,90
        </span>
      </div>
    </section>
  )
}
