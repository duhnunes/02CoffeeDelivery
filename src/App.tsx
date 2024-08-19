import { ShoppingCart, Trash } from '@phosphor-icons/react'

import { CardCart } from './components/CardCart'
import { CardCatalog } from './components/CardCatalog'
import { Cart } from './components/Cart'
import { InputNumber } from './components/InputNumber'
import { InputText } from './components/InputText'
import { Select } from './components/Select'
import { Button } from './components/ui/button'

export function App() {
  return (
    <div className="bg-base-background text-base-text min-h-svh font-text">
      <h2 className="font-title text-text-xs">Hello World</h2>
      <h2 className="font-text text-text-sm">Hello World</h2>
      <h2 className="font-text text-text-base">Hello World</h2>
      <h2 className="font-text text-text-lg">Hello World</h2>
      <h2 className="font-text text-tag">Hello World</h2>
      <h2 className="font-text text-button-base">Hello World</h2>
      <h2 className="font-text text-button-lg">Hello World</h2>

      <div className="flex items-center gap-2">
        <Button
          variant="primary"
          size="primary"
        >
          Label
        </Button>

        <Button
          variant="secondary"
          size="secondary"
        >
          <Trash className="size-5 text-product-purple" />
          Remover
        </Button>

        <Button
          variant="icon"
          size="icon"
        >
          <ShoppingCart
            className="size-5"
            weight="fill"
          />
        </Button>
      </div>

      <Cart />
      <Select />
      <Select />
      <Select />

      <InputText
        sufix="Opcional"
        placeholder="Text"
      />
      <InputText
        placeholder="Text"
      />

      <InputNumber />

      <CardCatalog />
      <CardCatalog />
      <CardCatalog />

      <br className="border border-red-500" />

      <CardCart />
      <CardCart />
      <CardCart />
    </div>
  )
}
