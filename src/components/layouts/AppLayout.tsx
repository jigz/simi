import { useContext } from 'react'
import { ConfigCtx } from '@components'

export const AppLayout = ({ children }) => {
  const { theme } = useContext(ConfigCtx)

  return (
    <div
      id='AppLayout'
      className={`min-h-screen flex text-sm sm:text-base transition-colors duration-500 ease-in-out bg-${theme.background} text-${theme.onBackground}`}
    >
      {children}
    </div>
  )
}
