import Navbar from '@/components/layout/navbar'
import { permanenetMarker } from '@/theme-config/fonts'
import React from 'react'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/all'

const HeroHeader: () => React.JSX.Element = () => (
  <>
      <Navbar></Navbar>
      <section
        role={'hero-navbar'}
        className={'grid grid-cols-2 min-h-fit h-[calc(100vh*0.6)] bg-gradient-to-r from-indigo-700 via-indigo-500 via-purple-500 to-orange-500'}>
          <div role={'hero-navbar-cta'} className={'flex align-start'}>
              <div className={'grid place-content-center ml-40 w-[30rem]'}>
                  <h1 className={`m-1 p-1 text-7xl text-white ${permanenetMarker.className}`}>Hello, World!</h1>
                  <h3 className={'m-1 p-1 text-l text-white'}>
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet.
                  </h3>
                  <div className={'mt-3 mt-1'}>
                      <button
                        className={'m-1 p-2 border border-solid border-2 rounded-full'}>
                          <AiOutlineTwitter size={'1.5rem'} color={'white'}></AiOutlineTwitter>
                      </button>
                      <button className={'m-1 p-2 border border-solid border-2 rounded-full'}>
                          <AiFillLinkedin size={'1.5rem'} color={'white'}></AiFillLinkedin>
                      </button>
                  </div>
              </div>
          </div>
          <div role={'hero-navbar-illustration'} className={''}></div>
      </section>
  </>
)

export default HeroHeader;