import React from "react";
import { Carousel } from "react-responsive-carousel";
import landing from "../../images/heji/hejilanding.jpg";
import hejitrips from "../../images/heji/hejitrips.jpg";
import hejicreate from "../../images/heji/hejicreate.jpg";
import hejirome from "../../images/heji/hejirome.jpg";
import hejisanya from "../../images/heji/hejisanya.jpg";
import hejiactivities from "../../images/heji/hejiactivities.jpg";
import hejibudget from "../../images/heji/hejibudget.jpg";
import hejipayment from "../../images/heji/hejipayment.jpg";
import hejipaymentmade from "../../images/heji/hejipaymentmade.jpg";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HejiCarousel = () => {
  return (
    <div className="heji">
      <div class="about-heji">
        <p>
          HeJi is a tool designed to facilitate group holiday planning. The
          backend is a multi-relational database built with Ruby on Rails while
          the frontend is a multi-feature WeChat mini-program allowing for
          itinerary management, budget deductions and group invitations as well
          as a real-time weather forecast API.
        </p>
      </div>

      <div className="heji-carousel-wrapper">
        <Carousel
          infiniteLoop
          axis="horizontal"
          showThumbs={false}
          useKeyboardArrows
          autoPlay={false}
        >
          <div>
            <img src={landing} alt="landing" />
          </div>
          <div>
            <img src={hejitrips} alt="landing" />
          </div>
          <div>
            <img src={hejicreate} alt="landing" />
          </div>
          <div>
            <img src={hejirome} alt="landing" />
          </div>
          <div>
            <img src={hejisanya} alt="landing" />
          </div>
          <div>
            <img src={hejiactivities} alt="landing" />
          </div>
          <div>
            <img src={hejibudget} alt="landing" />
          </div>
          <div>
            <img src={hejipayment} alt="landing" />
          </div>
          <div>
            <img src={hejipaymentmade} alt="landing" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HejiCarousel;
