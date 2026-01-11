import { SessionProvider } from "next-auth/react"

export default function SessionW{

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}