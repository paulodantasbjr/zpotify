import Image from 'next/image'

import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'

export const Poster = () => {
  return (
    <div className="transiton group relative mx-auto h-80 w-64 cursor-pointer overflow-hidden rounded-3xl text-white/80 duration-200 ease-out hover:scale-105 hover:text-white/100">
      <Image
        src={
          'https://pbs.twimg.com/media/Ehq0Ox-WoAEUlzP?format=jpg&name=large'
        }
        alt={'albumUrl'}
        layout="fill"
        className="inset-0 h-full w-full rounded-3xl object-cover opacity-80 group-hover:opacity-100"
        priority
      />
      <div className="absolute inset-x-0 bottom-10 ml-4 flex items-center space-x-3.5">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 group-hover:bg-green-400">
          {/* <BsFillPauseFill className="text-2xl" /> */}
          <BsFillPlayFill className="text-2xl" />
        </div>
      </div>
    </div>
  )
}
