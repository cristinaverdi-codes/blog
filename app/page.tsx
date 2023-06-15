import Footer from '@/components/layout/footer'
import HeroHeader from '@/components/layout/hero-header'
import FeaturedPostsSection from '@/components/layout/section/featured-posts'
import SectionTitle from '@/components/layout/section/section-title'
import React from 'react'

export default function Page() {
  return (
    <>
      <HeroHeader></HeroHeader>
      <main className="">
        <FeaturedPostsSection>
          <SectionTitle></SectionTitle>
        </FeaturedPostsSection>
        <section role={'latest-posts'}></section>
      </main>
      <Footer/>
    </>
  )
}
