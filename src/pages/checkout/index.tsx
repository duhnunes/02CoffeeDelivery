import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'

import { CardCart } from '@/components/CardCart'
import { InputText } from '@/components/InputText'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'


import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newFormValidationSchema = z.object({
  cpf: z.number().min(11, { message: 'CPF inválido' }),
  cep: z.number().min(8, { message: 'CEP inválido' }),
  street: z.string().min(2, { message: 'Rua inválida' }),
  number: z.number().min(1, { message: 'Número inválido' }),
  complement: z.string().optional(),
  district: z.string().min(2, { message: 'Bairro inválido' }),
  city: z.string().min(2, { message: 'Cidade inválida' }),
  uf: z.string().min(2, { message: 'UF inválida' }).max(2, { message: 'UF inválida' }),
})

type NewFormData = z.infer<typeof newFormValidationSchema>

export function Checkout() {
  const { register, handleSubmit, formState: { errors } } = useForm<NewFormData>({
    resolver: zodResolver(newFormValidationSchema)
  })

  function handleCreateOrder(data: NewFormData){
    console.log(data)
  }
  
  return (
    <div className="w-svw min-h-svh bg-base-background font-text text-text-base text-base-text pt-[108px] justify-center">
      <main className="flex flex-col md:mx-5 md:gap-2 lg:gap-8 sm:items-start lg:justify-center sm:flex-row">
        <form onSubmit={handleSubmit(handleCreateOrder)} className="flex gap-2">
        <div className="space-y-2">
          <h2 className="font-title text-title-xs text-base-subtitle">
            Complete seu pedido
          </h2>
          <section className="flex flex-col gap-3">
            <article className="flex flex-col gap-8 bg-base-card rounded-md py-5 px-2 md:p-5 xl:p-10">
              <header className="flex items-start gap-2">
                <MapPin className="size-5 shrink-0 text-product-yellow-dark" />
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
                <div className="w-full lg:w-[200px]">
                  <InputText
                    type="tel"
                    placeholder="CPF"
                    maxLength={11}
                    {...register('cpf', { valueAsNumber: true })}
                    className={errors.cpf ? 'border border-red-500 !placeholder-red-500' : ''}
                  />
                  {errors.cpf && (
                    <span className="text-red-500 text-xs italic">{errors.cpf.message}</span>
                  )}
                </div>
                <div>
                  <InputText placeholder="Rua" className={errors.street ? 'border border-red-500 !placeholder-red-500 rounded' : ''} />
                  {errors.street && (
                    <span className="text-red-500 text-xs italic">{errors.street.message}</span>
                  )}
                </div>
                <div className="flex flex-col items-center gap-3 lg:flex-row">
                  <div className="w-full lg:w-[200px]">
                    <InputText
                      placeholder="Número"
                      type="tel"
                      {...register('number', { valueAsNumber: true })}
                      className={errors.number ? 'border border-red-500 !placeholder-red-500 rounded' : ''}
                    />
                    {errors.number && (
                      <span className="text-red-500 text-xs italic">{errors.number.message}</span>
                    )}
                  </div>
                  <InputText
                    placeholder="Complemento"
                    sufix="Opcional"
                    {...register('complement')}
                  />
                </div>
                <div className="flex flex-col items-center gap-3 lg:flex-row">
                  <div className="w-full lg:w-[200px]">
                    <InputText placeholder="Bairro" {...register('district')} className={errors.district ? 'border border-red-500 !placeholder-red-500 rounded' : ''} />
                    {errors.district && (
                      <span className="text-red-500 text-xs italic">{errors.district.message}</span>
                    )}
                  </div>
                  <div>
                    <InputText placeholder="Cidade" {...register('city')} className={errors.city ? 'border border-red-500 !placeholder-red-500 rounded' : ''} />
                    {errors.city && (
                      <span className="text-red-500 text-xs italic">{errors.city.message}</span>
                    )}
                  </div>
                  <div className="w-full lg:w-14">
                    <InputText
                      placeholder="UF"
                      className={errors.uf ? 'uppercase border border-red-500 !placeholder-red-500 rounded' : 'uppercase'}
                      maxLength={2}
                      {...register('uf')}
                    />
                    {errors.uf && (
                      <span className="text-red-500 text-xs italic">{errors.uf.message}</span>
                    )}
                  </div>
                </div>
              </div>
            </article>

            <article className="flex flex-col gap-8 bg-base-card rounded-md py-5 px-2 md:p-5 xl:p-10">
              <header className="flex items-start gap-2">
                <CurrencyDollar className="size-5 shrink-0 text-product-purple" />
                <div className="flex flex-col">
                  <p className="font-text text-base-subtitle text-text-sm">
                    Pagamento
                  </p>
                  <p className="text-text-sm text-base-text">
                    O pagamento é feito na entrega. Escolha a forma que deseja pagar.
                  </p>
                </div>
              </header>

              <ToggleGroup
                type="single"
                className="flex-col lg:flex-row"
              >
                <ToggleGroupItem
                  value="creditCard"
                  className="w-full whitespace-nowrap"
                >
                  <CreditCard className="size-5 text-product-purple shrink-0" />
                  Cartão de crédito
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="creditDebit"
                  className="w-full whitespace-nowrap"
                >
                  <Bank className="size-5 text-product-purple shrink-0" />
                  Cartão de débito
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="cash"
                  className="w-full whitespace-nowrap"
                >
                  <Money className="size-5 text-product-purple shrink-0" />
                  Cartão de Dinheiro
                </ToggleGroupItem>
              </ToggleGroup>
            </article>

          </section>
        </div>

        <section className="flex flex-col gap-2 mx-3 mb-3 md:mx-0">
          <h2 className="font-title text-title xs text-base-subtitle">
            Cafés selecionados
          </h2>

          <article className="flex flex-col gap-8 bg-base-card rounded-md py-5 px-2 w-full md:p-5 xl:p-10">
            <ScrollArea className="h-[180px]">
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
              type="submit"
              variant="primary"
              size="full"
            >
              Confirmar Pedido
            </Button>
          </article>
        </section>
        </form>
      </main>
    </div>
  )
}
