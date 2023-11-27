import { Link } from 'react-router-dom'
import myImage from '../../assets/images/Untitled-1.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'M',
    'o',
    'o',
    't',
    'a',
    'z',
    ' ',
    'G',
    'h',
    'r',
    'a',
    'b',
    'a',
  ]
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <div className="container home-page">
      <div className="home">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br></br>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            ></AnimatedLetters>
            <br></br>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            ></AnimatedLetters>
          </h1>
          <h2>full stack JavaScript developer / mobile developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <img className="myimg" src={myImage} alt="developer"></img>
      </div>
    </div>
  )
}

export default Home
