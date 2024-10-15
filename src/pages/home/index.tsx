import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useContext } from 'react'

import hero from '/public/images/hero.svg'
import { CardCatalog } from '@/components/CardCatalog'
import { Button } from '@/components/ui/button'
import { CoffeeContext } from '@/contexts/coffeeContext'

export function Home() {
  const { catalog } = useContext(CoffeeContext)

  return (
    <div className="bg-base-background text-base-text font-text">
      <header className="bg-heroBG pt-[108px] flex flex-col justify-center items-center gap-14 px-5 pb-5 transition-all sm:pt-[120px] lg:flex-row md:pb-16">
        <section className="flex flex-col gap-6">
          <article className="flex flex-col gap-2 max-w-[466px] mx-auto md:max-w-[588px]">
            <h1 className="font-title text-title-lg text-3xl sm:text-title-xl text-base-title transition-all">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-base-subtitle text-text-sm sm:text-text-lg">
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </p>
          </article>
          <article className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-5">
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
          className="hidden lg:block"
        />
      </header>

      <main className="py-8 px-4">
        <section className="flex flex-col items-center gap-4 mb-14 px-0 transition-all md:flex-row md:justify-between lg:px-12 xl:px-56">
          <h2 className="font-title text-title-base text-base-subtitle">
            Nossos cafés
          </h2>
          <nav className="inline-flex items-center gap-2 flex-wrap justify-center">
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

        <section className="grid mx-auto grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1280px]">
          {catalog.map(coffee => {
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
      <div className="p-4 bg-green-500 text-white text-base font-mono font-bold text-center capitalize cursor-poiter fixed left-0 bottom-0">Que isso?</div>
    </div>
  )
}
