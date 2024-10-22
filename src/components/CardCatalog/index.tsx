import { ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'

import { CoffeeContext } from '@/contexts/coffeeContext'

import { InputNumber } from '../InputNumber'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

interface CardCatalogProps {
  name: string
  description: string
  badge: string[]
  img: string
  price: string
}

export function CardCatalog({ name, description, badge, img, price }: CardCatalogProps) {
  const { catalog, createCoffeeToCart } = useContext(CoffeeContext)

  const priceConverted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(price))
  const priceConvertedWhoutSymbol = priceConverted.replace('R$', '')

  const coffee = catalog.find((item) => item.name === name)

  function handleAddCoffee(){
    if(coffee){
      createCoffeeToCart(coffee)
    } else{
      console.error('Café não encontrado no catálogo')
    }
  }

  return (
    <section className="bg-base-card rounded-md rounded-tr-[36px] rounded-bl-[36px] flex flex-col items-center max-w-[256px] pb-5 justify-center mx-auto">
      <header className="-translate-y-8 flex flex-col items-center gap-3">
        <img
          className="size-28"
          src={img}
          width={120}
          height={120}
          alt=""
        />
        <div className="flex justify-center gap-2 flex-wrap px-2">
          {badge.map((item, index) => {
            return (
              <Badge key={index}>{item}</Badge>
            )
          })}
        </div>
      </header>
      <article className="flex flex-col items-center gap-2">
        <span className="text-title-sm text-base-subtitle font-title">
          {name}
        </span>
        <p className="text-text-sm text-base-label mx-5 text-center">
          {description}
        </p>
      </article>

      <footer className="flex items-center justify-between w-full mt-4 px-3">
        <div className="flex items-baseline">
          <span className="font-text text-text-sm">
            R$
          </span>
          <span className="text-title-base text-base-text font-title">
            {priceConvertedWhoutSymbol}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <InputNumber />
          <Button
            type="button"
            variant="icon"
            size="icon"
            onClick={handleAddCoffee}
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
