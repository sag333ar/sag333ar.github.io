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
      color: "#0a66c2",
    },
    {
      icon: faStackOverflow,
      link: "https://stackoverflow.com/users/140765/sagar-r-kothari",
      color: "orange",
    },
    {
      icon: faGithub,
      link: "https://github.com/sag333ar",
      color: "black",
    },
    {
      icon: faNewspaper,
      link: "https://sagar-r-kothari.github.io/",
      color: "purple",
    },
  ];

  return (
    <div className="social-links">
      {icons.map((obj, index) => (
        <a key={index} href={obj.link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="header-links" icon={obj.icon} size="2x" color={obj.color}/>
        </a>
      ))}
      <br />
      <DarkMode />
    </div>
  );
};

export default HeaderLinks;
