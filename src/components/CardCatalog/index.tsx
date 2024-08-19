import { ShoppingCart } from '@phosphor-icons/react'

import cupOfCoffee from '../../../public/images/coffees/expresso.png'
import { InputNumber } from '../InputNumber'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

export function CardCatalog() {
  return (
    <section className="bg-base-card rounded-md rounded-tr-[36px] rounded-bl-[36px] flex flex-col items-center max-w-[256px] pb-6">
      <header className="text-center space-y-3 -translate-y-8">
        <img
          className="size-32"
          src={cupOfCoffee}
          alt=""
        />
        <Badge>Tradicional</Badge>
      </header>
      <article className="flex flex-col items-center gap-2">
        <span className="text-title-sm text-base-subtitle font-title">
          Expresso Tradicional
        </span>
        <p className="text-text-sm text-base-label mx-5 text-center">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </article>

      <footer className="flex items-center justify-between gap-5">
        <div className="flex items-baseline gap-1">
          <span className="font-text text-text-sm">R$</span>
          <span className="text-title-base text-base-text font-title">
            9,90
          </span>
        </div>
        <div className="flex items-center gap-2">
          <InputNumber />
          <Button
            type="button"
            variant="icon"
            size="icon"
          >
            <ShoppingCart
              className="size-5"
              weight="fill"
            />
          </Button>
        </div>
      </footer>
    </section>
  )
}
