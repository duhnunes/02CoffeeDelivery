import { MapPin } from '@phosphor-icons/react'

import logo from '../../../public/logo.svg'
import { Cart } from '../Cart'
import { Button } from '../ui/button'

export const Navbar = () => {
  return (
    <nav className="bg-base-background py-8 px-40 flex items-center justify-between fixed top-0 w-full z-10">
      <img
        src={logo}
        alt=""
      />
      <section className="flex gap-3">
        <Button
          type="button"
          size="icon"
          className="bg-product-purple-light hover:bg-product-purple/25"
        >
          <MapPin
            weight="fill"
            className="size-5 text-product-purple-dark"
          />
          <span className="text-product-purple-dark text-text-sm">
            Porto Alegre, RS
          </span>
        </Button>

        <Cart />
      </section>
    </nav>
  )
}
