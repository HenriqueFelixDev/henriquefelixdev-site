import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function SocialMediaLinks({className}) {
    return (
        <ul className={`flex space-x-4 ml-4 ${className}`}>
          <li>
            <a
              href="https://www.linkedin.com/in/henrique-felix-dev/"
              target="_new"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/henriquefelix.dev/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://github.com/HenriqueFelixDev">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
    )
}