import { MapPin } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../../public/logo.svg'
import { Cart } from '../Cart'
import { Button } from '../ui/button'

export const Navbar = () => {
  const location = useLocation()
  const isCheckout = location.pathname === '/checkout'

  return (
    <nav className="bg-base-background py-3 px-3 gap-2 flex items-center justify-between fixed top-0 w-full z-10 transition-all duration-500 md:px-7 lg:py-8 lg:px-40">
      <Link to="/">
        <img
          src={logo}
          alt=""
          width={85}
          height={40}
          className="w-[76px] h-[36px] transition-all"
        />
      </Link>
      <section className="flex gap-1 sm:gap-3 transition-all">
        <Button
          type="button"
          size="icon"
          className="bg-product-purple-light hover:bg-product-purple/25"
        >
          <MapPin
            weight="fill"
            className="size-5 text-product-purple-dark"
          />
          <span className="text-product-purple-dark text-text-sm hidden sm:block">
            Porto Alegre, RS
          </span>
        </Button>

        {!isCheckout && ( <Cart /> )}
      </section>
    </nav>
  )
}
