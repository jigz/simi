import { createContext, useState } from 'react'
import manifest from 'public/manifest.json'
import { themes } from '@styles/themes'

const siteData = {
  title: manifest.name,
  desc: 'SimiJS made by Ghost',
  favicon: '/icons/favicon.ico',
  siteUrl: 'https://simijs.now.sh',
  siteImg: '/images/siteImg.png?v=3',
  creatorTwitter: '@GhostApps',
  themeColor: manifest.theme_color,
  backgroundColor: manifest.background_color,
}

type ConfigCtx = {
  manifest: typeof manifest
  siteData: typeof siteData
  theme: typeof themes.dark
  setTheme: (theme: typeof themes.dark) => void
}

export const ConfigCtx = createContext<ConfigCtx>(undefined)

export const ConfigCtxProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark)

  const config = {
    theme,
    setTheme,
    manifest,
    siteData,
  }

  return <ConfigCtx.Provider value={config}>{children}</ConfigCtx.Provider>
}
