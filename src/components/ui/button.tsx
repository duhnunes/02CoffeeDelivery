import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center gap-1 justify-center whitespace-nowrap rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase select-none',
  {
    variants: {
      variant: {
        primary: 'bg-product-yellow text-base-white hover:bg-product-yellow-dark text-button-lg',
        secondary: 'bg-base-button text-base-text hover:bg-base-hover hover:text-base-subtitle text-button-sm',
        icon: 'bg-product-purple-dark text-base-card hover:bg-product-purple',
        cart: 'bg-product-yellow-light text-product-yellow-dark hover:bg-product-yellow-light/85',
        ghost: 'bg-transparent',
        danger: 'bg-red-500 text-button-sm !text-white hover:bg-red-600'
      },
      size: {
        primary: 'w-[132px] px-2 py-3',
        secondary: 'w-[91px] px-2 py-1',
        icon: 'p-3',
        cart: 'w-full p-3',
        ghost: 'size-3',
        full: 'w-full py-3 px-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'primary',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
