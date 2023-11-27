import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'
import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3,
  faPython,
  faJava,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div className="container about-page">
      <div className="about">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            ></AnimatedLetters>
          </h1>
          <p>
            Greetings, I'm Mootaz Ghraba, a recent Computer Science graduate
            with a genuine passion for continuous learning. I'm actively seeking
            opportunities with established IT companies, eager to contribute my
            skills and embrace new challenges in a professional setting.
          </p>
          <p>
            I'm quietly confident, naturally curious, and always working on
            improving my skills.
          </p>
          <p>
            I bring a versatile skill set with expertise in both front-end and
            back-end development. Proficient in React.js for dynamic and
            responsive user interfaces, I excel in Node.js for robust
            server-side development. My database proficiency extends to MongoDB,
            ensuring efficient and scalable data management. Additionally, I'm
            adept in Java and Python, using these languages for application
            development. I also showcase mobile development prowess, utilizing
            Android Studio to create powerful and user-friendly mobile
            applications.
          </p>
          <p></p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
