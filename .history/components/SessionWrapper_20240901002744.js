import { SessionProvider } from "next-auth/react"

export default function {

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}