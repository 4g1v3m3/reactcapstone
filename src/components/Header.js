import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChainSlash, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { icon } from "@fortawesome/fontawesome-svg-core";
import SocialList from "./SocialList";
import "../App.css"


const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 
  useEffect(()=> {
    const handleScroll = () => {
      let moving = window.pageYOffset
           
      setVisible(position > moving);
      setPosition(moving)
    };
      window.addEventListener("scroll", handleScroll);
      return(() => {
        window.removeEventListener("scroll", handleScroll);
        })
    })

  const cls = visible ? 0 : -200;

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={cls}
      left={0}
      right={0}
    //  className={cls}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="999"
      transition="top 0.4s ease-out"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing={8}>
              <SocialList data={socials} />
              {/* Add social media links based on the `socials` data */}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects-section" onClick={handleClick("projects")}>
                <p>Projects</p>
              </a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>
                <p>Contact Me</p>
              </a>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
