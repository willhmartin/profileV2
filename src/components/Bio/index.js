import React from "react";
import "./index.css";

const Bio = () => {
  return (
    <div className="container">
      <div className="bio1">
        <h1>Hello</h1>
        <p>
          I'm a product manager and design enthusiast with an interest in
          engineering. I have managed both construction and renovation projects
          in the UK and overseen the launch of several apps into the Chinese
          WeChat ecosystem. My programming skills along with organization and
          advanced level of communication make me uniquely suited to liasing
          between project owners and the development team.
        </p>
      </div>

      <div className="bio2">
        <h1>Skills</h1>
        <ul className="list">
          <li>
            Agile development cycle, from planning through to testing and
            evaluation
          </li>
          <li>Project management tools including Clickup and Trello</li>
          <li>CRM software (hubspot)</li>
          <li>Suite of programming skills focusing on web development</li>
          <li>
            Highly effective communicator, particularly between different
            departments
          </li>
        </ul>
      </div>

      <div className="bio3">
        <h1>Aims</h1>
        <p>
          I am looking for web development companies where I can lead a
          long-term project: managing developers and realising both owner and
          designer's visions for the product. Employers I value reward
          inquisitiveness and a continuing asking of "why?": why are we doing it
          like this? Can we do it better?
        </p>
      </div>
    </div>
  );
};

export default Bio;
