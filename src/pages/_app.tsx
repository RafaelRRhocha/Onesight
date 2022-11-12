import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/forms/index.css'
import '../styles/globals/index.css'
import '../styles/table/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Onesight</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
