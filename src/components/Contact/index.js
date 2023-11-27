import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { useState, useEffect, useRef } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_z7wuott',
        'template_ihiu0gn',
        form.current,
        'vTwE_ihglD53SUR4z'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('message sent')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <>
      <div className="contact-page">
        <div className="contact">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              ></AnimatedLetters>
            </h1>
            <p></p>
            <div className="contact-from">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      required
                    ></input>
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      required
                    ></input>
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    ></input>
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input
                      type="submit"
                      className="flat-button"
                      value="Send"
                    ></input>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
