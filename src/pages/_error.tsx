import { useContext } from 'react'
import { ConfigCtx } from '@components'

const ErrorPage = ({ statusCode }) => {
  const { theme } = useContext(ConfigCtx)

  return (
    <div className='flex flex-1 items-center justify-center h-screen'>
      <p>{statusCode}</p>
      <div
        className={`h-4 sm:h-10 m-2 border-solid border sm:border-2 border-${theme.primary}`}
      ></div>
      <p>
        {statusCode
          ? `An error occurred on server`
          : 'An error occurred on client'}
      </p>
    </div>
  )
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
