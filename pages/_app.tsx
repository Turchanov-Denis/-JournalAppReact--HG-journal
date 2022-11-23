import '../styles/globals.css'
import '../styles/_nullstyle.scss'
import '../styles/Header.scss'
import '../styles/Home.scss'
import '../styles/Profile.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
