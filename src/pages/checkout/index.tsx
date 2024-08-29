import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from '@phosphor-icons/react'

import { CardCart } from '@/components/CardCart'
import { InputText } from '@/components/InputText'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function Checkout() {
  return (
    <div className="w-svw h-svh bg-base-background font-text text-text-base text-base-text items-center justify-center pt-[108px]">
      <main className="flex justify-center gap-8">
        <form className="flex flex-col gap-2">
          <h2 className="font-title text-title-xs text-base-subtitle">Complete seu pedido</h2>
          <section className="flex flex-col gap-3">
            <article className="flex flex-col gap-8 bg-base-card rounded-md p-10">
              <header className="flex items-start">
                <MapPin className="size-5 text-product-yellow-dark" />
                <div className="flex flex-col">
                  <p className="font-text text-base-subtitle text-text-sm">
                    Endereço de Entrega
                  </p>
                  <p className="text-text-sm text-base-text">
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </header>

              <div className="flex flex-col gap-4">
                <div className="w-[200px]">
                  <InputText
                    type="tel"
                    placeholder="CPF"
                    maxLength={11}
                  />
                </div>
                <InputText placeholder="Rua" />
                <div className="flex items-center gap-3">
                  <div className="w-[200px]">
                    <InputText
                      placeholder="Número"
                      type="tel"
                    />
                  </div>
                  <InputText
                    placeholder="Complemento"
                    sufix="Opcional"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[200px]">
                    <InputText placeholder="Bairro" />
                  </div>
                  <InputText placeholder="Cidade" />
                  <div className="w-14">
                    <InputText
                      placeholder="UF"
                      className="uppercase"
                      maxLength={2}
                    />
                  </div>
                </div>
              </div>
            </article>

            <article className="flex flex-col gap-8 bg-base-card p-10">
              <header className="flex items-start">
                <CurrencyDollar className="size-5 text-product-purple" />
                <div className="flex flex-col">
                  <p className="font-text text-base-subtitle text-text-sm">
                    Pagamento
                  </p>
                  <p className="text-text-sm text-base-text">
                    O pagamento é feito na entrega. Escolha a forma que deseja pagar.
                  </p>
                </div>
              </header>

              <div className="flex items-center gap-3">
                <ToggleGroup type="single">
                  <ToggleGroupItem value="creditCard">
                    <CreditCard className="size-5 text-product-purple" />
                    Cartão de crédito
                  </ToggleGroupItem>

                  <ToggleGroupItem value="creditDebit">
                    <Bank className="size-5 text-product-purple" />
                    Cartão de débito
                  </ToggleGroupItem>

                  <ToggleGroupItem value="cash">
                    <Money className="size-5 text-product-purple" />
                    Cartão de Dinheiro
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </article>

          </section>
        </form>

        <section className="flex flex-col gap-2">
          <h2 className="font-title text-title xs text-base-subtitle">
            Cafés selecionados
          </h2>

          <article className="flex flex-col gap-8 bg-base-card rounded-md p-10 w-[448px]">
            <ScrollArea className="max-h-[180px]">
              <CardCart />
              <Separator className="bg-base-label my-px" />
              <CardCart />
              <Separator className="bg-base-label my-px" />
              <CardCart />
              <Separator className="bg-base-label my-px" />
              <CardCart />
              <Separator className="bg-base-label my-px" />
              <CardCart />
              <Separator className="bg-base-label my-px" />
            </ScrollArea>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between ">
                <span className="text-text-sm text-base-text">
                  Total de itens
                </span>
                <span className="text-text-base text-base-text">
                  R$ 29,70
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-sm text-base-text">
                  Entrega
                </span>
                <span className="text-text-base text-base-text">
                  R$ 3,50
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-lg text-base-subtitle">
                  Total
                </span>
                <span className="text-text-lg text-base-subtitle">
                  R$ 33,20
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="primary"
              size="full"
            >
              Confirmar Pedido
            </Button>
          </article>
        </section>
      </main>
    </div>
  )
}
