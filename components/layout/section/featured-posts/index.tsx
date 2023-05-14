import SectionTitle from '@/components/layout/section/section-title'
import { permanenetMarker, poppins } from '@/theme-config/fonts'
import React, { ReactNode } from 'react'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/all'
export default function FeaturedPostsSection({children}): ReactNode {
  return (
    <>
      <section role={'featured-posts'} className={'min-h-fit h-[20rem]'}>
        {children}
        <div role={'featured posts container'} className={`place-self-center max-w-[60%] bg-indigo-800`}>
          <div role={'featured post'} className={'ml-40 w-[15rem]'}>
              <div role={'featured post image'} className={`m-1 p-1`} >Image</div>
              <h1 className={`m-1 p-1 text-l text-white ${permanenetMarker.className}`}>This is a post tile about em and rem in css</h1>
              <h3 className={'m-1 p-1 text-l text-white'}>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
              </h3>
              <div role={'post-footer'} className={'mt-3 mt-1'}>
                <button
                  className={'m-1 p-2 border border-solid border-2 rounded-full'}>
                  <AiOutlineTwitter size={'.5rem'} color={'white'}></AiOutlineTwitter>
                </button>
                <button className={'m-1 p-2 border border-solid border-2 rounded-full'}>
                  <AiFillLinkedin size={'.5rem'} color={'white'}></AiFillLinkedin>
                </button>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}