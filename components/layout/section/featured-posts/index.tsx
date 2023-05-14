import SectionTitle from '@/components/layout/section/section-title'
import { permanenetMarker, poppins } from '@/theme-config/fonts'
import React, { ReactNode } from 'react'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/all'
import Image from 'next/image';

export default function FeaturedPostsSection({children}): ReactNode {
  return (
    <>
      <section role={'featured-posts'} className={'min-h-fit'}>
        {children}
        <div role={'featured posts container'} className={`grid grid-flow-col auto-cols-max place-content-center`}>
          <div role={'featured post'} className={'m-10 max-w-[22rem] bg-indigo-600 mx-6 m-h-fit rounded-xl'}>
            <div className={`rounded-xl object-cover`}>
              <img role={'featured post image'} src="/post-image.png" alt="post image" className={`rounded-t-xl`}/>
              <h1 className={`px-7 py-2 text-xl text-white ${permanenetMarker.className} bg-indigo-400 `}>This is a post tile about em and rem in css</h1>
              <h3 className={'px-7 py-2 text-l text-white bg-indigo-400'}>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
              </h3>
              <div role={'footer'} className={`px-7 pb-5 pt-2 bg-indigo-400 rounded-b-xl`}>
                <span className={'text-white font-medium'}>Read More</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}