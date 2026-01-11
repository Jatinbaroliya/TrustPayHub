import { SessionProvider } from "next-auth/react"

export default function SessionWrapper({children)}{

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}