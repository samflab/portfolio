import emailjs from '@emailjs/browser'
import { useState } from 'react'
import './styles/Contact.scss'
import React from 'react'

const Contact = () => {
  const [message, setMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_r26azg2',
        'template_joii25r',
        e.target,
        'user_Ok12WTP0cvyrzSFOEutop'
      )
      .then(
        (result) => {
          setMessage(true)
          setTimeout(() => setMessage(false), 5000)
        },
        (error) => {
          setErrorMessage(true)
          setTimeout(() => setErrorMessage(false), 5000)
        }
      )
    e.target.reset()
  }
  return (
    <div className="ContactMe" id="contact">
      <h1 className="contact-header">Contact Me</h1>

      <div className="contact-content">
        <form onSubmit={(e) => sendEmail(e)} className="form-group">
          <input
            type="text"
            className="form-control form-control-md"
            id="name"
            placeholder="Enter your name"
            name="name"
            required="required"
          />
          <input
            type="text"
            className="form-control form-control-md"
            id="email"
            placeholder="Your email address"
            name="email"
            required="required"
          />
          <input
            type="text"
            className="form-control form-control-md"
            id="discussion-title"
            placeholder="Enter the discussion title"
            name="subject"
            required="required"
          />
          <textarea
            className="form-control textarea"
            name="message"
            id="message"
            placeholder="Write your message"
            required="required"
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message Now
          </button>
          {message ? <Message msg="Your message has been sent." /> : <></>}
          {errorMessage ? <Message msg="Couldn't send a message" /> : <></>}
        </form>
      </div>
    </div>
  )
}

export const Message = (props) => {
  return <div className="message-div">{props.msg}</div>
}

export default Contact
