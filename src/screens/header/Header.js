import React from 'react'
import './header.css'
import { ReactTyped } from "react-typed";

function Header() {
  return (
    <div className="main-info" id="home">
      <h1>What am I?</h1>
      <ReactTyped
        strings={[
          " ",
          "Software Engineer",
          "Front-end Developer",
          "Back-end Developer",
          "Full Stack Developer",
          "AWS Lambda, S3, RDS",        
          "Team Player",
          "Strong Decision Maker",
          "Self-starter",
          " ",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      >
      </ReactTyped>
    </div>
  )
}

export default Header
