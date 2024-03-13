import React from "react";
import Links from "./Links";

function About(props) {
  let para;
  if(props.bio){
    para = <p>{props.bio}</p>
  }
  return (
    <div id="about">
      <h2>About Me</h2>
     {para}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}  />
    </div>
  );
}

export default About;