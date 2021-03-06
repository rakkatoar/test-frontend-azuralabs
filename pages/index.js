import Head from 'next/head'
import About from '../components/About'
import Banner from '../components/Banner'
import Benefit from '../components/Benefit'
import Blog from '../components/Blog'
import CarouselSection from '../components/CarouselSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test Frontend Rakka</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Banner/>
      <Benefit/>
      <Blog/>
      <CarouselSection/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
