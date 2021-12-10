import React from "react";
import { Link } from "react-router-dom";
import Greeting from "../components/Greeting/index.js";
import Navbar from "../components/Navbar/index.js";
import Picture from "../components/Picture/index.js";
import SkillsMap from "../components/SkillsMap/index.js";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function HomePage({ isFirstMount }) {
  return (
    <>
      {isFirstMount && <InitialTransition />}
      <Navbar />
      <motion.div className="homePageContainer" exit={{ opacity: 0 }}>
        <div className="strapline">
          <p>responsive design, responsibly managed</p>
        </div>

        <Picture />
        {/* <SkillsMap /> */}
      </motion.div>
    </>
  );
}

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

// const InitialTransition = () => {
//   return (
//     <>
//       <motion.div
//         className="relative z-50 w-full bg-black"
//         initial="initial"
//         animate="animate"
//         variants={blackBox}
//       >
//         <motion.svg variants={textContainer} className="textContainer">
//           <pattern
//             id="pattern"
//             patternUnits="userSpaceOnUse"
//             width={750}
//             height={800}
//             className="text-white"
//           >
//             <rect className="w-full h-full fill-current" />
//             <motion.rect
//               variants={text}
//               className="w-full h-full text-gray-600 fill-current"
//             />
//           </pattern>
//           <text
//             className="text"
//             text-anchor="middle"
//             x="50%"
//             y="50%"
//             style={{ fill: "url(#pattern)" }}
//           >
//             Will Martin
//           </text>
//         </motion.svg>
//       </motion.div>
//     </>
//   );
// };
const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
        </pattern>
        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          tailstore
        </text>
      </motion.svg>
    </motion.div>
  );
};
