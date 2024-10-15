import './global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { App } from './App.tsx'
import { CoffeeProvider } from './contexts/coffeeContext.tsx'
import { LayoutPage } from './pages/@layout/layoutPage.tsx'
import { NotFound } from './pages/404notFound/index.tsx'
import { Checkout } from './pages/checkout/index.tsx'
import { ErrorPage } from './pages/errorPage/index.tsx'
import { Success } from './pages/success/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/success',
        element: <Success />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CoffeeProvider>
      <RouterProvider router={router} />
    </CoffeeProvider>
  </StrictMode>,
)
