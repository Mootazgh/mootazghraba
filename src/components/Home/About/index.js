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
          <h1>Skills</h1>
          <div className="skills">
            <ul className="ul1">
              <li>HTML / CSS</li>
              <li>JavaScript</li>
              <li>React </li>
              <li>Node.js</li>
            </ul>
            <ul className="ul2">
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Python / Java</li>

              <li>Android Studio</li>
            </ul>
          </div>
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
