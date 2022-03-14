import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { RiCompassFill } from 'react-icons/ri'
import { FaMicrophoneAlt } from 'react-icons/fa'
import { HiChartBar, HiClock, HiOutlineDotsHorizontal } from 'react-icons/hi'
import { TiHome } from 'react-icons/ti'

export const SidebarLeft = () => {
  const router = useRouter()

  return (
    <section className="fixed top-0 z-40 flex h-screen w-24 flex-col items-center space-y-8 bg-black p-4">
      <Image
        src="https://rb.gy/xkacau"
        width={56}
        height={56}
        objectFit="contain"
        alt="Logo"
      />
      <div className="flex flex-col space-y-8">
        <Link href="/">
          <a
            className={
              router.pathname == '/'
                ? 'sideBarLeftLinkActive'
                : 'sideBarLeftLink'
            }
          >
            <TiHome />
          </a>
        </Link>
        <Link href="/explore">
          <a
            className={
              router.pathname == '/explore'
                ? 'sideBarLeftLinkActive'
                : 'sideBarLeftLink'
            }
          >
            <RiCompassFill />
          </a>
        </Link>
        <Link href="/lib">
          <a
            className={
              router.pathname == '/lib'
                ? 'sideBarLeftLinkActive'
                : 'sideBarLeftLink'
            }
          >
            <FaMicrophoneAlt />
          </a>
        </Link>
        <Link href="/trends">
          <a
            className={
              router.pathname == '/trends'
                ? 'sideBarLeftLinkActive'
                : 'sideBarLeftLink'
            }
          >
            <HiChartBar />
          </a>
        </Link>
        <Link href="/recents">
          <a
            className={
              router.pathname == '/recents'
                ? 'sideBarLeftLinkActive'
                : 'sideBarLeftLink'
            }
          >
            <HiClock />
          </a>
        </Link>
        <Link href="/config">
          <a
            className={
              router.pathname == '/config'
                ? 'sideBarLeftLinkActive'
                : 'sideBarLeftLink'
            }
          >
            <HiOutlineDotsHorizontal />
          </a>
        </Link>
      </div>
    </section>
  )
}
