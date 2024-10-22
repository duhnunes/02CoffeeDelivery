import { Trash } from '@phosphor-icons/react'

import { InputNumber } from '../InputNumber'
import { Button } from '../ui/button'
import { useContext } from 'react'
import { CoffeeContext } from '@/contexts/coffeeContext'

interface CardCartProps {
  coffee: {
    id: string
    name: string
    description: string
    badge: string[]
    img: string
    price: string
    quantity: number
  }
}

export function CardCart({ coffee }: CardCartProps) {
  const { removeCoffeToCart } = useContext(CoffeeContext)
  
  function handleRemoveCoffee() {
    removeCoffeToCart(coffee)
  }
  
  return(
    <section className="bg-base-card flex items-start px-1 py-2 gap-2 rounded-md mt-1">
      <img
      className="size-10 lg:size-16 sm:hidden lg:block"
      src={coffee.img}
      alt=""
    />
    
    <article className="flex flex-col items-start gap-2 flex-1">
      <header className="flex items-center w-full justify-between">
        <span className="text-text-base text-base-subtitle font-title text-center sm:text-text-base sm:self-center md:text-text-sm lg:text-start lg:text-title-sm">
          {coffee.name}
        </span>
        <div className="flex items-baseline gap-0.5">
          <span className="font-text text-text-sm">R$</span>
          <span className="text-title-xs text-base-text font-title sm:mx-auto lg:text-title-base">
            {coffee.price}
          </span>
        </div>
      </header>
      <div className="flex gap-2">
        <InputNumber value={coffee.quantity} onChange={() => {}} />
        <Button
          type="button"
          variant="danger"
          size="secondary"
          className="w-full"
          onClick={handleRemoveCoffee}
        >
          <Trash className="size-4 shrink-0" />
          Remover
        </Button>
      </div>
    </article>
    </section>
  )
}
