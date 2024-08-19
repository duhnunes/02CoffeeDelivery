import { Minus, Plus } from '@phosphor-icons/react'
import * as React from 'react'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

export interface InputNumberProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerProps?: React.HTMLProps<HTMLLabelElement>
}

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ containerProps, ...props }, ref) => {
    return (
      <label
        {...containerProps}
        className="flex w-[71px] items-center gap-1 rounded bg-base-button px-2 p-3"
      >
        <Button
          variant="ghost"
          size="ghost"
        >
          <Minus className="size-5 text-product-purple hover:text-product-purple-dark hover:scale-110 transition-all" />
        </Button>
        <Input
          type="tel"
          className="text-center bg-base-button outline-none w-[20px] text-base-title text-text-base select-none"
          min={1}
          defaultValue={1}
          readOnly
          ref={ref}
          {...props}
        />
        <Button
          variant="ghost"
          size="ghost"
        >
          <Plus className="size-5 text-product-purple hover:text-product-purple-dark hover:scale-110 transition-all" />
        </Button>
      </label>
    )
  },
)
InputNumber.displayName = 'InputNumber'

export { InputNumber }
