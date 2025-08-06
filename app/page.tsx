import React from 'react'
import HeroSection from "./components/Hero"
import Services from './service/page'
import Projects from './projects/page'

const page = () => {
  return (
    <div>
      <HeroSection />
      <Projects />
    </div>
  )
}

export default page
