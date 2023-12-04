import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'

const Sidebar = () => (
  <div>
    <div className="nav-bar">
      <Link className="logo" to="/">
        <p className="mootaz">Mootaz</p>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/moataz-ghraba-a1b492296/"
          >
            <img src={linkedin} className="linkedin"></img>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Mootazgh"
          >
            <img src={github} className="github"></img>
          </a>
        </li>
      </ul>
    </div>
    <div className="resSB">
      <div className="newNav">
        <Link className="logo" to="/">
          <p className="mootaz">Mootaz</p>
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#4d4d4e"
            ></FontAwesomeIcon>
          </NavLink>
        </nav>
      </div>
    </div>
  </div>
)

export default Sidebar
