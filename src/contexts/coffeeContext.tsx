import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
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
}

interface coffeeContextType {
  catalog: coffeeContextData[]
  coffeeList: coffeeContextData[]
  setCoffeeList: Dispatch<SetStateAction<never[]>>
  handleAddCoffeeToCart: () => void
}

interface coffeeContextProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as coffeeContextType)

export function CoffeeProvider({ children }: coffeeContextProps) {
  const catalog = coffeeCatalog.coffees
  const [coffeeList, setCoffeeList] = useState([])

  const handleAddCoffeeToCart = () => {
    // setCoffeeList([...coffeeList, catalog.map((item) => item.id)])
    console.log("Estou perdido...")
  }

  return (
    <CoffeeContext.Provider value={{
      catalog,
      coffeeList,
      setCoffeeList,
      handleAddCoffeeToCart,
    }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
