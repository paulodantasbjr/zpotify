import { useRecoilState } from 'recoil'
import { searchAtom } from '../atoms/searchAtom'

export const Search = () => {
  const [search, setSearch] = useRecoilState(searchAtom)

  return (
    <div className="flex max-w-6xl items-center overflow-hidden rounded-full border-2 border-gray-700  bg-gray-900 p-1.5 px-5 pr-8">
      <div className="h-4 w-4 flex-shrink-0 animate-pulse rounded-full border-2" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border-none bg-gray-900 text-xs text-white placeholder-gray-100 outline-none focus:ring-0"
        placeholder="Search..."
      />
    </div>
  )
}
