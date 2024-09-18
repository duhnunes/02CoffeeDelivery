import { Trash } from '@phosphor-icons/react'

import cupOfCoffee from '../../../public/images/coffees/expresso.png'
import { InputNumber } from '../InputNumber'
import { Button } from '../ui/button'

export function CardCart() {
  return (
    <section className="bg-base-card flex items-start justify-evenly px-1 py-2 gap-2 w-full sm:flex-col lg:gap-5 lg:flex-row">
      <img
        className="size-10 lg:size-16 sm:hidden lg:block"
        src={cupOfCoffee}
        alt=""
      />
      <article className="flex flex-col items-start gap-2">
        <span className="text-text-base text-base-subtitle font-title text-center sm:text-text-base sm:self-center md:text-text-sm lg:text-start lg:text-title-sm">
          Expresso Tradicional
        </span>
        <div className="flex flex-col gap-2 w-full sm:flex-row">
          <InputNumber />
          <Button
            type="button"
            variant="secondary"
            size="secondary"
            className="w-full"
          >
            <Trash className="size-4 shrink-0 text-product-purple" />
            Remover
          </Button>
        </div>
      </article>

      <div className="flex items-baseline gap-1">
        <span className="font-text text-text-sm">R$</span>
        <span className="text-title-xs text-base-text font-title sm:mx-auto lg:text-title-base">
          9,90
        </span>
      </div>
    </section>
  )
}
