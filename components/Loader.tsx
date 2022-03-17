import Image from 'next/image'

export const Loader = () => {
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-col items-center space-y-4 pt-40">
        <span className="relative h-64 w-96">
          <Image
            src="https://rb.gy/y9mwtb"
            layout="fill"
            objectFit="contain"
            className="animate-pulse"
            alt="logo"
          />
        </span>
        <h1>Carregando...</h1>
      </div>
    </div>
  )
}
