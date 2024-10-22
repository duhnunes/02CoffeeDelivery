import {
  createContext,
  ReactNode,
  useState,
} from 'react'

import coffeeCatalog from '../data/coffee.json'

interface coffeeContextData {
  id: string
  badge: string[]
  name: string
  description: string
  img: string
  price: string
  quantity: number
}

interface coffeeContextType {
  catalog: coffeeContextData[]
  coffeeList: coffeeContextData[]
  createCoffeeToCart: (coffee: coffeeContextData) => void
  removeCoffeToCart: (coffee: coffeeContextData) => void
}

interface coffeeContextProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as coffeeContextType)

export function CoffeeProvider({ children }: coffeeContextProps) {
  const catalog = coffeeCatalog.coffees
  const [coffeeList, setCoffeeList] = useState<coffeeContextData[]>([])

  const createCoffeeToCart = (coffee: coffeeContextData) => {
    setCoffeeList([...coffeeList, coffee])
  }
  const removeCoffeToCart = (coffee: coffeeContextData) => {
    setCoffeeList((prevCoffeeList) => prevCoffeeList.filter((item) => item.id !== coffee.id));
  }

  return (
    <CoffeeContext.Provider value={{
      catalog,
      coffeeList,
      createCoffeeToCart,
      removeCoffeToCart,
    }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
