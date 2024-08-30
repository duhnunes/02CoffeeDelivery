import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import delivery from '../../../public/images/delivery.svg'

export function Success() {
  return (
    <div className="w-svw min-h-svh bg-base-background flex items-start justify-center pt-[80px] lg:pt-[108px] font-text text-text-base text-base-text">
      <main className="flex flex-col  gap-5 px-4 lg:flex-row-reverse lg:items-center">
        <img
          src={delivery}
          width={492}
          height={293}
          alt=""
          className="w-1/3 mx-auto lg:w-[492px] lg:h-[293px]"
        />
        <section className="flex flex-col gap-5 lg:gap-10">
          <article className="space-y-1">
            <h1 className="font-title text-title-lg text-product-yellow-dark text-center">
              Uhu! Pedido confirmado
            </h1>
            <p className="text-text-lg">
              Agora é só aguardar que logo o café chegará até você
            </p>
          </article>

          <article className="rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md border border-shape bg-gradient-to-br from-product-yellow to-product-purple p-px">
            <div className="flex flex-col gap-8 bg-base-background rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md p-4 md:p-10">
              <div className="flex items-center gap-3">
                <MapPin
                  weight="fill"
                  className="shrink-0 p-2 rounded-full text-base-white bg-product-purple"
                />
                <p className="text-base-label max-w-[310px]">
                  Entrega em <strong className="text-base-text">Rua João Daniel Martinelli, 102</strong> Farropos - Porto Alegre, RS
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Timer
                  weight="fill"
                  className="shrink-0 p-2 rounded-full text-base-white bg-product-purple"
                />
                <p className="text-base-label max-w-[141px]">
                  Previsão de entrega <strong className="text-base-text">20 min - 30 min</strong>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <CurrencyDollar
                  weight="fill"
                  className="shrink-0 p-2 rounded-full text-base-white bg-product-purple"
                />
                <p className="text-base-label max-w-[162px]">
                  Pagamento a entrega <strong className="text-base-text">Cartão de Crédito</strong>
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}
