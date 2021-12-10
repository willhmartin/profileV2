import React, { useState } from "react";
import physics from "../../icons/physics.png";
import git from "../../icons/git.png";
import nodejs from "../../icons/nodejs.png";
import lambda from "../../icons/lambda.png";
import js from "../../icons/js.png";
import postgre from "../../icons/postgre.png";
import "./index.css";

const SkillsMap = () => {
  const [hovered, setHovered] = useState({
    physics: false,
    git: false,
    nodejs: false,
    lambda: false,
    js: false,
    postgre: false,
  });

  const onMouseEnter = e => {
    const { name } = e.target;
    setHovered(prevState => ({
      ...prevState,
      [name]: true,
    }));
  };

  const onMouseLeave = e => {
    const { name } = e.target;
    setHovered(prevState => ({
      ...prevState,
      [name]: false,
    }));
  };

  return (
    <>
      <div className="physics icon">
        <img
          name="physics"
          src={physics}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          alt="react logo"
        />
      </div>
      {hovered.physics && (
        <div className="physics-description">
          <div className="blurb">
            <p>proficient in creating ReactJs web applications</p>
          </div>
        </div>
      )}
      <div className="git icon">
        <img
          name="git"
          src={git}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          alt="react logo"
        />
      </div>
      {hovered.git && (
        <div className="git-description">
          <div className="blurb">
            <p>proficient in creating ReactJs eb applications</p>
          </div>
        </div>
      )}
      <div className="nodejs icon">
        <img
          name="nodejs"
          src={nodejs}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          alt="react logo"
        />
      </div>
      {hovered.nodejs && (
        <div className="nodejs-description">
          <div className="blurb">
            <p>proficient in creating ReactJs web applications</p>
          </div>
        </div>
      )}
      <div className="lambda icon">
        <img
          name="lambda"
          src={lambda}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          alt="react logo"
        />
      </div>
      {hovered.lambda && (
        <div className="lambda-description">
          <div className="blurb">
            <p>proficient in creating ReactJs web applications</p>
          </div>
        </div>
      )}
      <div className="js icon">
        <img
          name="js"
          src={js}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          alt="react logo"
        />
      </div>
      {hovered.js && (
        <div className="js-description">
          <div className="blurb">
            <p>proficient in creating ReactJs web applications</p>
          </div>
        </div>
      )}
      <div className="postgre icon">
        <img
          name="postgre"
          src={postgre}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          alt="react logo"
        />
      </div>
      {hovered.postgre && (
        <div className="postgre-description">
          <div className="blurb">
            <p>proficient in creating ReactJs web applications</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsMap;
