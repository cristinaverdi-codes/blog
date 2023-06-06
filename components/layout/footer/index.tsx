import { permanenetMarker } from '@/theme-config/fonts'
import React from 'react'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/all'

const Footer: () => React.JSX.Element = () => (
  <footer role={'footer'} className={'min-w-full flex justify-around place-items-center border-t border-solid border-black'}>
    <div role={'logo'} className={`flex justify-around place-items-center m-2 p-4 min-w-[9rem] ${permanenetMarker.className} text-xl`}>Hello, world!</div>
    <span className={'text-sm'}>Made with &#10084; by Cristina Verdi</span>
    <div className={'mt-3 mt-1'}>
      <button
        className={'m-1 p-2 hover:border hover:border-solid hover:border-2 rounded-full'}>
        <AiOutlineTwitter size={'1.2rem'} color={''}></AiOutlineTwitter>
      </button>
      <button className={'m-1 p-2 hover:border hover:border-solid hover:border-2 rounded-full'}>
        <AiFillLinkedin size={'1.2rem'} color={''}></AiFillLinkedin>
      </button>
    </div>
  </footer>
)

export default Footer