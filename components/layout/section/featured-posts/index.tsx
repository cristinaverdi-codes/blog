import { poppins } from '@/theme-config/fonts'
import { create } from 'domain'
import React, { ComponentProps, PropsWithChildren, ReactNode } from 'react'

export default function FeaturedPostsSection({children}: PropsWithChildren): React.JSX.Element {
  return (
    <>
      <section role={'featured-posts'} className={'min-h-fit pb-16'}>
        {children}
        <div role={'featured posts container'} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:max-w-[90%] lg:max-w-[65%] m-auto auto-rows-auto place-items-center`}>
          {
            posts.map(({createdOn, imageURL, categories, title, summary}) => (
              <div role={'featured post'} className={'max-w-[40rem] m-4 mx-6 rounded-xl hover:-mt-2 hover:ease-in-out hover:delay-75'}>
                <img role={'featured post image'} src={`${imageURL}`} alt="post image" className={`rounded-t-xl bg-cover bg-center object-cover`}/>
                <div className={' bg-gradient-to-tr from-indigo-700  to-indigo-400 rounded-b-xl'}>
                  <div className={'px-5 pt-4 pb-2 text-white text-sm'}>
                    { categories.map(category => <span className={''}>{ `${category.toUpperCase()} ` }</span>) }
                  </div>
                  <h3 className={`px-5 pt-1 text-md text-white ${poppins.className} font-bold`}>{title}</h3>
                  <h4 className={'px-5 pt-1 pb-1 text-sm text-white'}>{summary}</h4>
                  <div role={'footer'} className={`flex justify-between px-5 pb-5 pt-2 text-xs`}>
                    <span className={'text-white font-semibold'}>Read More</span>
                    <span className={'text-white'}>{createdOn}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

const posts = [
  {createdOn:"April 11th, 2023", imageURL: 'https://cdn.pixabay.com/photo/2023/05/07/20/44/woman-7977101__340.jpg', categories: ["TECH"], title: 'This is a post tile about em and rem in css', summary: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.\n' +
      '              Lorem ipsum dolor sit amet.'},
  {createdOn:"April 11th, 2023", imageURL: 'https://cdn.pixabay.com/photo/2023/04/23/16/14/station-7946105_1280.jpg', categories: ["TECH"], title: 'This is a post tile about em and rem in css', summary: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.\n' +
      '              Lorem ipsum dolor sit amet.'},
  {createdOn:"April 11th, 2023", imageURL: 'https://cdn.pixabay.com/photo/2023/05/15/14/20/museum-7995207_640.jpg', categories: ["TECH", "Product"], title: 'This is a post tile about em and rem in css', summary: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.\n' +
      '              Lorem ipsum dolor sit amet.'},
  {createdOn:"April 11th, 2023", imageURL: 'https://cdn.pixabay.com/photo/2023/05/15/14/20/museum-7995207_640.jpg', categories: ["TECH", "Product"], title: 'This is a post tile about em and rem in css', summary: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.\n' +
      '              Lorem ipsum dolor sit amet.'},
  {createdOn:"April 11th, 2023", imageURL: 'https://cdn.pixabay.com/photo/2023/05/15/14/20/museum-7995207_640.jpg', categories: ["TECH", "Product"], title: 'This is a post tile about em and rem in css', summary: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.\n' +
      '              Lorem ipsum dolor sit amet.'},
  {createdOn:"April 11th, 2023", imageURL: 'https://cdn.pixabay.com/photo/2023/05/15/14/20/museum-7995207_640.jpg', categories: ["TECH", "Product"], title: 'This is a post tile about em and rem in css', summary: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.\n' +
      '              Lorem ipsum dolor sit amet.'}
]