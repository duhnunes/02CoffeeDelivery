import './global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { App } from './App.tsx'
import { LayoutPage } from './pages/@layout/layoutPage.tsx'
import { NotFound } from './pages/404notFound/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        path: '/',
        element: <App />,
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
    <RouterProvider router={router} />
  </StrictMode>,
)
