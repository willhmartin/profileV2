import React from "react";
import { Carousel } from "react-responsive-carousel";
import login from "../../images/ebae/ebaelogin.jpg";
import ebaeprofile from "../../images/ebae/ebaeprofile.jpg";
import ebaeindex from "../../images/ebae/ebaeindex.jpg";
import ebaebae from "../../images/ebae/ebaebae.jpg";
import ebaebooking from "../../images/ebae/ebaebooking.jpg";
import ebaeconfirm from "../../images/ebae/ebaeconfirm.jpg";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const EbaeCarousel = () => {
  return (
    <div className="ebae">
      <div class="about-ebae">
        <p>
          E-Bae is a platform connecting single career-oriented women with dates
          for social occasions. There is a fully integrated booking system built
          with Ruby on Rails while the frontend is a WeChat mini-program. The
          back-end system also has the potential for use as a native or web
          application.
        </p>
      </div>
      <div className="ebae-carousel-wrapper">
        <Carousel
          infiniteLoop
          axis="horizontal"
          showThumbs={false}
          useKeyboardArrows
          autoPlay={false}
        >
          <div>
            <img src={login} alt="landing" />
          </div>
          <div>
            <img src={ebaeprofile} alt="landing" />
          </div>
          <div>
            <img src={ebaeindex} alt="landing" />
          </div>
          <div>
            <img src={ebaebae} alt="landing" />
          </div>
          <div>
            <img src={ebaebooking} alt="landing" />
          </div>
          <div>
            <img src={ebaeconfirm} alt="landing" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default EbaeCarousel;
