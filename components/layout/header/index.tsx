import React from 'react'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/all'

const Header: () => React.JSX.Element = () => (
  <nav role={'index.ts-navbar'} className={'fixed min-w-full flex justify-around place-items-center text-white bg-gradient-to-r from-indigo-700 via-indigo-500 via-purple-500 to-orange-500 border-b border-solid border-white'}>
    <div role={'logo'} className={'flex justify-around place-items-center m-2 p-4 min-w-[9rem]'}></div>
    <div role={'navbar-menu'} className={''}>
      <button
        className={'m-1 p-3 hover:border hover:border-solid'}>TECH
      </button>
      <button className={'m-1 p-3 hover:border hover:border-solid hover:border'}>
        PRODUCT
      </button>
      <button className={'m-1 p-3 hover:border hover:border-solid hover:border'}>
        #STARTUPLIFE
      </button>
      </div>
    <div role={'navbar-actions'} className={''}>
      <button
        className={'m-1 p-3 hover:border hover:border-solid'}>BIO
      </button>
      <button className={'m-1 p-3 hover:border hover:border-solid hover:border'}>
        CONTACT
      </button>
    </div>
    <div className={'mt-3 mt-1'}>
      <button
        className={'m-1 p-2 hover:border hover:border-solid hover:border-2 rounded-full'}>
        <AiOutlineTwitter size={'1.2rem'} color={'white'}></AiOutlineTwitter>
      </button>
      <button className={'m-1 p-2 hover:border hover:border-solid hover:border-2 rounded-full'}>
        <AiFillLinkedin size={'1.2rem'} color={'white'}></AiFillLinkedin>
      </button>
    </div>
  </nav>
)

export default Header