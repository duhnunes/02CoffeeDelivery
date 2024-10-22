import { ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'

import { CoffeeContext } from '@/contexts/coffeeContext'

import { CardCart } from '../CardCart'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { useNavigate } from 'react-router-dom'

export function Cart() {
  const { coffeeList } = useContext(CoffeeContext)
  const totalCoffee = coffeeList.length

  const navigate = useNavigate()

  function handleCheckout() {
    if(totalCoffee > 0) {
      navigate('/checkout')
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="cart"
          size="icon"
          className="relative"
        >
          <ShoppingCart
            className="size-5"
            weight="fill"
          />
            {coffeeList.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-product-yellow-dark rounded-full size-4 text-base-white flex items-center justify-center text-text-sm">
                {totalCoffee}
              </span>
            )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full" aria-describedby={undefined}>
        <SheetHeader>
          <SheetTitle className="uppercase text-center">
            Carrinho de compras
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1">
          {coffeeList.map((items) => {
            return (
              <CardCart
                key={items.id}
                coffee={items}
              />
            )
          })}
        </ScrollArea>
        <SheetFooter>
          <Button
            type="button"
            variant="primary"
            size="cart"
            disabled={totalCoffee === 0}
            onClick={handleCheckout}
          >
              Finalizar Compra
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
