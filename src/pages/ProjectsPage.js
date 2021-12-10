import React from "react";
import Navbar from "../components/Navbar";
import HejiCarousel from "../components/HejiCarousel";
import EbaeCarousel from "../components/EbaeCarousel";
import MolmassCarousel from "../components/MolmassCarousel";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <>
      <Navbar className="homeNav" />
      <motion.div className="carousels" exit={{ opacity: 0 }}>
        <HejiCarousel />
        <EbaeCarousel />
      </motion.div>
      <motion.div className="carousels-2" exit={{ opacity: 0 }}>
        <MolmassCarousel />
      </motion.div>
    </>
  );
}
