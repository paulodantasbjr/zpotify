import { ReactNode } from 'react'

import Head from 'next/head'

import { SidebarLeft } from './SidebarLeft'
import { SidebarRight } from './SidebarRight'

type Props = {
  children?: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'Zpotify - Dashboard' }: Props) => {
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
