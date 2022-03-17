import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useSession } from 'next-auth/react'

import SpotifyWebApi from 'spotify-web-api-node'

import { Layout } from '../components/Layout'
import { Loader } from '../components/Loader'
import { useEffect } from 'react'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
})

const Home: NextPage = () => {
  const router = useRouter()
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated: () => router.push('/signin'),
  })

  useEffect(() => {
    if (session?.accessToken)
      return spotifyApi.setAccessToken(session?.accessToken as string)
  }, [session?.accessToken])

  if (status === 'loading') return <Loader />

  return <Layout title="Zpotify - Dashboard" />
}

export default Home
