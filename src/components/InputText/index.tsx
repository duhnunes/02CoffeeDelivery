import * as React from 'react'

import { Input } from '../ui/input'

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  sufix?: string
  containerProps?: React.HTMLProps<HTMLLabelElement>
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ sufix, containerProps, type, ...props }, ref) => {
    return (
      <label
        {...containerProps}
        className="flex items-center w-full rounded-s border border-base-input bg-base-input px-3 has-[:focus-visible]:ring-2 has-[:focus-visible]: has-[:focus-visible]:ring-product-yellow-dark"
      >
        <Input
          type={type}
          className="flex-1 bg-base-input p-3 text-text-sm placeholder:text-base-label text-base-text outline-none"
          ref={ref}
          {...props}
        />
        {!!sufix &&
           (
             <span className="select-none text-text-xs italic text-base-label">
               {sufix}
             </span>
           )}
      </label>
    )
  },
)
InputText.displayName = 'InputText'

export { InputText }
