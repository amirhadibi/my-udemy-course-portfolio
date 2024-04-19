import React from 'react'
import './header.css'
import { ReactTyped } from "react-typed";

function Header() {
  return (
    <div className="main-info">
      <h1>What am I?</h1>
      <ReactTyped
        strings={[
          " ",
          "A Software Engineer",
          "Also known as ",
          "Front-end Developer",
          "Back-end Developer",
          "Full Stack Developer",
          "Who loves working with",
          "AWS Lambda, S3, RDS",        
          "More importatntly!",
          "A Team Player",
          "Strong Decision Maker",
          "and a Self-starter",
          " ",
          " ",
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </ReactTyped>
    </div>
  )
}

export default Header
