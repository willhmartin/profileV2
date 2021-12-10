import React from "react";
import Navbar from "../components/Navbar";
import SkillsMap from "../components/SkillsMap";
import Bio from "../components/Bio";
import { motion } from "framer-motion";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <motion.div exit={{ opacity: 0 }}>
        <SkillsMap />
        <Bio />
      </motion.div>
    </>
  );
}
