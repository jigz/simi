import { useContext } from 'react'
import { ConfigCtx } from '@components'

export const Card = ({ children }) => {
  const { theme } = useContext(ConfigCtx)
  return (
    <div
      className={`bg-${theme.primary} text-${theme.onPrimary} p-6 rounded-lg my-auto mx-auto shadow`}
    >
      {children}
    </div>
  )
}
