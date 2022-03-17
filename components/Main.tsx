import { Search } from './Search'

export const Main = () => {
  return (
    <section className="ml-24 flex-grow space-y-8 bg-black py-4 md:mr-2.5 md:max-w-6xl">
      <Search />
      <div className="grid h-96 grid-cols-2 gap-x-4 gap-y-8 overflow-y-scroll py-4 scrollbar-hide xl:grid-cols-4"></div>
    </section>
  )
}
