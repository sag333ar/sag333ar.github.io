import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faStackOverflow,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import DarkMode from "./DarkMode";

const HeaderLinks = () => {
  const icons = [
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/sagar-k-65a59047/",
    },
    {
      icon: faStackOverflow,
      link: "https://stackoverflow.com/users/140765/sagar-r-kothari",
    },
    {
      icon: faGithub,
      link: "https://github.com/sag333ar",
    },
    {
      icon: faNewspaper,
      link: "https://sagar-r-kothari.github.io/",
    },
  ];

  return (
    <div className="social-links">
      {icons.map((obj, index) => (
        <a key={index} href={obj.link} target="_blank" rel="noreferrer">
          <h1>
            <FontAwesomeIcon icon={obj.icon} />
          </h1>
        </a>
      ))}
      <br />
      <DarkMode />
    </div>
  );
};

export default HeaderLinks;
