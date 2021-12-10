import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import intro from "../../images/molmass/intro.jpg";
import oxygen from "../../images/molmass/oxygen.jpg";
import h2so4 from "../../images/molmass/h2so4.jpg";
import h2so4result from "../../images/molmass/h2so4result.jpg";

const MolmassCarousel = () => {
  return (
    <div className="molmass">
      <div class="about-molmass">
        <p>
          Molmass began as a christmas present for someone during lockdown.
          Built with python, it acts as a searchable database for the periodic
          table as well as a calculator for chemical formulae, returning both
          molecular mass and mass percentage using algorithms drawing on a
          simple database.
        </p>
      </div>

      <div className="molmass-carousel-wrapper">
        <Carousel
          infiniteLoop
          axis="horizontal"
          showThumbs={false}
          useKeyboardArrows
          autoPlay={false}
        >
          <div>
            <img src={intro} alt="landing" />
          </div>
          <div>
            <img src={oxygen} alt="landing" />
          </div>
          <div>
            <img src={h2so4} alt="landing" />
          </div>
          <div>
            <img src={h2so4result} alt="landing" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default MolmassCarousel;
