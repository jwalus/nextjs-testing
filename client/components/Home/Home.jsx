import React from 'react'
import Cards from './HomeComponents/Cards'
import Hero from './HomeComponents/Hero'
import CTA from './HomeComponents/CTA'

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <CTA />
    </div>
  )
}

export default Home