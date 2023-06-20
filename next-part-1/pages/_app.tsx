import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>ok</Head>
      <h1>this is app file</h1>
      <Component {...pageProps} />
    </>
  )
}
