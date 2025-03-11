import { Brand, CTA } from '@/components'
import { Blog, Features, Header, Possibility, WhatGPT3 } from '@/containers'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          {/* <Navbar /> */}
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        {/* <Footer /> */}
      </div>



    </>
  )
}

export default page
