import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import styles from "./style.module.css";

export const ParticleBg = () => {

    return (
      <div className={styles.container}>
        <ParticlesBg type="circle" bg={true} />
        <div className={styles.rowBanner}>
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Name Here</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>Description here</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={'https://www.google.co.in/'} className="button btn project-btn">
                  <i className="fa fa-book"></i>Want to know More
                </a>
              </ul>
            </Fade>
          </div>
        </div>
      </div>
    );
}

