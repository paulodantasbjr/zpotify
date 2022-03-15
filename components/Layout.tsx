import { ReactNode } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import { useSession } from 'next-auth/react'

import { SidebarLeft } from './SidebarLeft'
import { SidebarRight } from './SidebarRight'
import { Loader } from './Loader'

type Props = {
  children?: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'Zpotify - Dashboard' }: Props) => {
  const router = useRouter()
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated: () => router.push('/signin'),
  })

  if (status === 'loading') return <Loader />

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
        <SidebarLeft />
        {children}
        <SidebarRight />
      </main>
    </>
  )
}
