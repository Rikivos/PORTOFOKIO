import { Fade } from "@mui/material";
import React from "react";

const Social = ({ innerRef }) => {
  return (
    <div ref={innerRef.homeRef} className="home__social">
      <Fade
        in={innerRef.homeVisible}
        style={{ transformOrigin: "0 0 0" }}
        {...(innerRef.homeVisible ? { timeout: 2000 } : {})}
        mountOnEnter
        unmountOnExit
      >
        <a
          href=""
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-instagram"></i>
        </a>
      </Fade>
      <Fade
        in={innerRef.homeVisible}
        style={{ transformOrigin: "0 0 0" }}
        {...(innerRef.homeVisible ? { timeout: 2500 } : {})}
        mountOnEnter
        unmountOnExit
      >
        <a
          href="https://github.com/Rikivos"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </Fade>

      <Fade
        in={innerRef.homeVisible}
        style={{ transformOrigin: "0 0 0" }}
        {...(innerRef.homeVisible ? { timeout: 3000 } : {})}
        mountOnEnter
        unmountOnExit
      >
        <a
          href="https://www.linkedin.com/in/ramadhani-rizky-syahputra/"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-linkedin"></i>
        </a>
      </Fade>
    </div>
  );
};

export default Social;
