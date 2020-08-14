import Head from 'next/head'
import { useContext } from 'react'
import { ConfigCtx } from '@components'

export const MetaTags = () => {
  const { siteData } = useContext(ConfigCtx)

  return (
    <Head>
      <title>{siteData.title}</title>
      <meta charSet='UTF-8' />
      <link rel='icon' href={siteData.favicon} />
      <link rel='apple-touch-icon' href={siteData.favicon} />
      <meta name='description' content={siteData.desc} />
      <meta property='og:type' content='website' />
      <meta name='og:title' property='og:title' content={siteData.title} />
      <meta
        name='og:description'
        property='og:description'
        content={siteData.desc}
      />
      <meta property='og:url' content={siteData.siteUrl} />
      <meta
        property='og:image'
        content={`${siteData.siteUrl}${siteData.siteImg}`}
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={siteData.title} />
      <meta name='twitter:description' content={siteData.desc} />
      <meta name='twitter:creator' content={siteData.creatorTwitter} />
      <meta name='twitter:image' content={siteData.siteImg} />

      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5'
      />
      <link rel='manifest' href='/manifest.json' />
      <link
        href='/icons/favicon-16x16.png'
        rel='icon'
        type='image/png'
        sizes='16x16'
      />
      <link
        href='/icons/favicon-32x32.png'
        rel='icon'
        type='image/png'
        sizes='32x32'
      />
      <meta name='theme-color' content={siteData.themeColor} />
      <link rel='canonical' href={siteData.siteUrl} />
    </Head>
  )
}
