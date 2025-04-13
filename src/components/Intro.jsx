import TypeIt from 'typeit-react'
import React from 'react'

const IntroScroll = () => {
  return (
    <TypeIt
      speed="10"
      getBeforeInit={(instance) => {
        instance
          .type("I'm a Software Engineer")
          .pause(750)
          .delete(17)
          .pause(500)
          .type('Frontend Developer')
          .pause(750)
          .delete(18)
          .pause(500)
          .type('ReactJS Developer')
          .pause(750)
          .delete(17)
          .pause(500)
          .type('Javascript Developer')
        return instance
      }}
      options={{ loop: true }}
    />
  )
}

export default IntroScroll
