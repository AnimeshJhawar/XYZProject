import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import styles from "./style.module.css";
import { Form } from "../Form";

export const ParticleBg = ({children}) => {

    return (
      <>
      <div className={styles.container}>
        <ParticlesBg type="circle" bg={true} />
      
          {children}
        
      </div>
      </>
    );
}

