import { ClickToComponent } from 'click-to-react-component'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClickToComponent />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
