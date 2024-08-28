import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components/Navbar'

export function LayoutPage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
