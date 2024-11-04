import { Grow } from "@mui/material";
import React from "react";
import "./qualification.css";

const Qualification = ({ innerRef }) => {
  // const [toggleState, setToggleState] = useState(1);

  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };
  return (
    <section className="services section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button__flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className="qualification__button qualification__active button__flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div
          ref={innerRef.qualificationRef}
          className="qualification__sections"
        >
          <div className="qualification__content qualification__content-active">
            <Grow
              in={innerRef.qualificationVisible}
              style={{ transformOrigin: "0 0 0" }}
              {...(innerRef.qualificationVisible ? { timeout: 500 } : {})}
              unmountOnExit
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Informatics Engineering</h3>
                  <span className="qualification__subtitle">
                    {" "}
                    Muhammadiyah University of Purwokerto
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </Grow>

            <Grow
              in={innerRef.qualificationVisible}
              style={{ transformOrigin: "0 0 0" }}
              {...(innerRef.qualificationVisible ? { timeout: 1000 } : {})}
              unmountOnExit
            >
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Fullstack Development
                  </h3>
                  <span className="qualification__subtitle">
                    {" "}
                    Independent Study Batch 6
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> Feb 2024 - July
                    2024
                  </div>
                </div>
              </div>
            </Grow>

            <Grow
              in={innerRef.qualificationVisible}
              style={{ transformOrigin: "0 0 0" }}
              {...(innerRef.qualificationVisible ? { timeout: 1500 } : {})}
              unmountOnExit
            >
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Web Development & UI/UX Design
                  </h3>
                  <span className="qualification__subtitle">
                    {" "}
                    Infinite Learning
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> Sept 2024 - Present
                  </div>
                </div>
              </div>
            </Grow>

            <Grow
              in={innerRef.qualificationVisible}
              style={{ transformOrigin: "0 0 0" }}
              {...(innerRef.qualificationVisible ? { timeout: 2000 } : {})}
              unmountOnExit
            >
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Web Developer Internship
                  </h3>
                  <span className="qualification__subtitle"> Mandatech</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> Oct 2024 - Present
                  </div>
                </div>
              </div>
            </Grow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
