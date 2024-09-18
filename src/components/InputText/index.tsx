import * as React from 'react'

import { cn } from '@/lib/utils'

import { Input } from '../ui/input'

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  sufix?: string
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ sufix, className, type = 'text', ...props }, ref) => {
    return (
      <label className="inline-flex items-center w-full rounded border border-base-input bg-base-input has-[:focus-visible]:ring-2 has-[:focus-visible]: has-[:focus-visible]:ring-product-yellow-dark overflow-hidden">
        <Input
          type={type}
          className={cn(
            'flex-1 bg-base-input p-3 text-text-sm placeholder:text-base-label text-base-text outline-none', className,
          )}
          ref={ref}
          {...props}
        />
        {!!sufix &&
           (
             <span className="select-none text-text-xs italic text-base-label pr-3">
               {sufix}
             </span>
           )}
      </label>
    )
  },
)
InputText.displayName = 'InputText'

export { InputText }
