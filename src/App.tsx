import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useState } from 'react'

import hero from '../public/images/hero.svg'
import { CardCatalog } from './components/CardCatalog'
import { Navbar } from './components/Navbar'
import { Button } from './components/ui/button'
import coffeeCatalog from './data/coffee.json'

export function App() {
  const [catalog, setCatalog] = useState(coffeeCatalog)

  return (
    <div className="bg-base-background text-base-text font-text">
      <Navbar />
      <header className="bg-heroBG mt-[108px] flex flex-col justify-center items-center gap-14 px-40 py-24 xl:flex-row">
        <section className="flex flex-col gap-16">
          <article className="flex flex-col gap-4 max-w-[588px]">
            <h1 className="font-title text-title-xl text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-base-subtitle text-text-lg">
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </p>
          </article>
          <article className="grid grid-cols-2 grid-rows-2 gap-5">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-product-yellow-dark text-base-background">
                <ShoppingCart
                  weight="fill"
                  className="size-5"
                />
              </span>
              <p className="text-base-text text-text-base">
                Compra simples e segura
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-base-text text-base-background">
                <Package
                  weight="fill"
                  className="size-5"
                />
              </span>
              <p className="text-base-text text-text-base">
                Embalagem mantém o café intacto
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-product-yellow text-base-background">
                <Timer
                  weight="fill"
                  className="size-5"
                />
              </span>
              <p className="text-base-text text-text-base">
                Entrega rápida e rastreada
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-product-purple text-base-background">
                <Coffee
                  weight="fill"
                  className="size-5"
                />
              </span>
              <p className="text-base-text text-text-base">
                O café chega fresquinho até você
              </p>
            </div>
          </article>
        </section>
        <img
          src={hero}
          alt=""
          height={360}
          width={476}
        />
      </header>

      <main className="py-8 px-40">
        <section className="flex items-center justify-between mb-14">
          <h2 className="font-title text-title-base text-base-subtitle">
            Nossos cafés
          </h2>
          <nav className="inline-flex items-center gap-2">
            <Button
              type="button"
              size="icon"
              className="rounded-full bg-base-background border border-product-yellow text-product-yellow-dark text-tag py-[6px] px-3 hover:bg-product-yellow-light"
            >
              Tradicional
            </Button>

            <Button
              type="button"
              size="icon"
              className="rounded-full bg-base-background border border-product-yellow text-product-yellow-dark text-tag py-[6px] px-3 hover:bg-product-yellow-light"
            >
              Especial
            </Button>

            <Button
              type="button"
              size="icon"
              className="rounded-full bg-base-background border border-product-yellow text-product-yellow-dark text-tag py-[6px] px-3 hover:bg-product-yellow-light"
            >
              Com Leite
            </Button>

            <Button
              type="button"
              size="icon"
              className="rounded-full bg-base-background border border-product-yellow text-product-yellow-dark text-tag py-[6px] px-3 hover:bg-product-yellow-light"
            >
              Alcoólico
            </Button>

            <Button
              type="button"
              size="icon"
              className="rounded-full bg-base-background border border-product-yellow text-product-yellow-dark text-tag py-[6px] px-3 hover:bg-product-yellow-light"
            >
              Gelado
            </Button>
          </nav>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-8">
          {catalog.coffees.map(coffee => {
            return (
              <CardCatalog
                key={coffee.id}
                badge={coffee.badge}
                name={coffee.name}
                description={coffee.description}
                img={coffee.img}
                price={coffee.price}
              />
            )
          })}
        </section>
      </main>
    </div>
  )
}
