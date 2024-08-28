import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import hero from '../public/images/hero.svg'
import { Navbar } from './components/Navbar'

export function App() {
  return (
    <div className="bg-base-background text-base-text font-text">
      <Navbar />
      <header className="bg-heroBG mt-[108px] flex justify-center max-xl:gap-0 gap-14 px-40 py-24">
        <section className="flex flex-col gap-16">
          <article className="flex flex-col gap-4 max-w-[588px]">
            <p className="font-title text-title-xl text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </p>
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
    </div>
  )
}
