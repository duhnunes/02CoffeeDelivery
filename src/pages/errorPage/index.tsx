import { useRouteError } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="w-svw h-svh bg-base-background text-base-text flex flex-col items-center justify-center">
      <h1 className="font-title text-title-lg text-base-title">
        Ooops!
      </h1>
      <p className="font-text text-text-base text-base-text">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="font-text text-text-base text-base-title">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
