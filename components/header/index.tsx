import React from 'react'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/all'

const Header: () => React.JSX.Element = () => (
  <nav role={'index.ts-navbar'} className={'flex justify-around place-items-center text-white bg-gradient-to-r from-indigo-700 via-indigo-500 via-purple-500 to-orange-500 min-h-fit border-b border-solid border-white'}>
    <div role={'logo'} className={'flex justify-around place-items-center m-2 p-4 min-w-[9rem]'}></div>
    <div role={'navbar-menu'} className={''}>
      <ul className={'flex justify-around place-items-center'}>
        <li className={'m-2 p-3 hover:border hover:border-solid'}>
          TECH
          </li>
        <li className={'m-2 p-3 hover:border hover:border-solid'}>PRODUCT</li>
        <li className={'m-2 p-3 hover:border hover:border-solid'}>STARTUP LIFE</li>
        </ul>
      </div>
    <div role={'navbar-actions'} className={'flex justify-around place-items-center'}>
      <ul className={'flex justify-around place-items-center'}>
        <li className={'m-2 hover:border hover:border-solid p-3'}>ABOUT</li>
        <li className={'m-2 hover:border hover:border-solid p-3'}>CONTACT</li>
      </ul>
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