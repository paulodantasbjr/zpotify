import Head from 'next/head'
import { useRouter } from 'next/router'

import { useSession } from 'next-auth/react'

import { SidebarLeft } from './SidebarLeft'
import { SidebarRight } from './SidebarRight'
import { Loader } from './Loader'
import { Main } from './Main'

type Props = {
  title?: string
}

export const Layout = ({ title = 'Zpotify - Dashboard' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
        <SidebarLeft />
        <Main />
        <SidebarRight />
      </main>
    </>
  )
}
