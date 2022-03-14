import { useState } from 'react'

import type { NextPage } from 'next'

import { Layout } from '../components/Layout'
import { Search } from '../components/Search'

const Home: NextPage = () => {
  const [search, setSearch] = useState<string>('')

  return (
    <Layout title="Zpotify - Dashboard">
      <section className="ml-24 flex-grow space-y-8 bg-black py-4 md:mr-2.5 md:max-w-6xl">
        <Search search={search} setSearch={setSearch} />
      </section>
    </Layout>
  )
}

export default Home
