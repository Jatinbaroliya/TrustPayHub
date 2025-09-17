import { SessionProvider } from "next-auth/react"

export default function Sessio{

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}