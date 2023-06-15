import { DashBoardLayout } from '@/components/layouts'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DashBoardLayout>
      <Component {...pageProps} />
    </DashBoardLayout>
  )
}
