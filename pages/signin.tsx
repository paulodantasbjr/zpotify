import type { GetServerSideProps, NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'

import { getProviders, signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Loader } from '../components/Loader'

type Props = {
  providers: {
    spotify: {
      id: string
      name: string
      type: string
      signinUrl: string
      callbackUrl: string
    }
  }
}

const Signin: NextPage<Props> = ({ providers }) => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/')
    }
  }, [router, session])

  if (session) return <Loader />

  return (
    <>
      <Head>
        <title>Login - Zpotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col items-center justify-center space-y-8 bg-black">
        <Image
          src="https://rb.gy/y9mwtb"
          height={250}
          width={600}
          objectFit="contain"
          alt="Zpotify"
          className="animate-pulse"
        />
        {Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <button
              className="rounded-full border border-transparent bg-green-500 py-4 px-6 text-xs font-bold uppercase tracking-wider text-white transition duration-300 ease-out hover:scale-105 hover:bg-green-600 md:text-base"
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Signin

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()

  return {
    props: { providers },
  }
}
