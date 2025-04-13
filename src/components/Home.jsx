import React from 'react'
import IntroScroll from './Intro'
import './styles/Home.scss'
import { myIntro } from './constants'

const Home = () => {
  const circleAnimationImage = new URL(
    '../../public/images/dot.svg',
    import.meta.url
  )
  const heroImage = new URL('../../public/images/witch.webp', import.meta.url)
  return (
    <div className="home" id="home">
      <div className="home-content-container">
        <div className="header-wrapper">
          <span className="greeting">Hey! I am </span>
          <h1 className="heading"> Masudha Meher !</h1>
          <h2>
            <IntroScroll />
          </h2>
          <h4 className="sub-heading">{myIntro}</h4>
          <a
            href="Masudha Meher Resume.pdf"
            type="submit"
            className="download-resume"
            download
          >
            Download My Resume
          </a>
        </div>
        <div className="img-container">
          <div className="hero-shape custom-animation">
            <img
              src={circleAnimationImage}
              alt="circle-animation"
              height="50"
              width="50"
            />
          </div>
          <div className="image hero-img">
            <img src={heroImage} alt="Masudha" className="responsive" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
