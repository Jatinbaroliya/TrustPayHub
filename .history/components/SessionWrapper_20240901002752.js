import { SessionProvider } from "next-auth/react"

export default function SessionWrapper{

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}