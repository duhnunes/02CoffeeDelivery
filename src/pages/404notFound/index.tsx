import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="w-svw h-svh bg-base-background text-base-text flex flex-col items-center justify-center">
      <h1 className="font-title text-title-xl">404 Error</h1>
      <p className="text-base-subtitle text-text-lg mb-10">
        Página não encontrada
      </p>
      <Link
        className="font-text text-text-lg text-product-purple hover:text-product-purple-dark"
        to="/"
      >
        Voltar a página inicial
      </Link>
    </main>
  )
}
