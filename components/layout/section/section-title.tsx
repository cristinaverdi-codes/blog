import { permanenetMarker } from '@/theme-config/fonts'
import React from 'react'

export default function SectionTitle() {
  return (
    <div role={'section title'} className={'grid pt-[4rem] pb-[2rem] place-items-center'}>
      <h3 className={`my-1 p-1 text-5xl text-center ${permanenetMarker.className}`}>Featured Posts</h3>
      <h4 className={'my-1 p-1 max-w-[35rem] text-center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
    </div>
  )
}