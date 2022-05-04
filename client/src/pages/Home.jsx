import React from 'react'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import Contact from './Contact'
import Header from '../components/Header'
import About from './About'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Posts />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home