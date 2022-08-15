
import '../Carousal/Carousal.css'
import ExploreComponent from '../Explore/ExploreComponent'




import img1 from '../OPD-assets/img10.jpeg'
import img2 from '../OPD-assets/img8.jpeg'
import img3 from '../OPD-assets/img3.jpg'
import img4 from '../OPD-assets/img4.jpg'
import img5 from '../OPD-assets/img5.jpg'
import img7 from '../OPD-assets/img6.jpg'
import img6 from '../OPD-assets/img7.jpg'
import img8 from '../OPD-assets/img4.jpg'
import img9 from '../OPD-assets/img1.jpg'

// import './Carousal.css'

import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
   const { className, style, onClick } = props;
     return (
       <div
         className={className}
         style={{ ...style, color:"black", display: "block", background:'linear-gradient(#8360c3, #009FFF)', borderRadius:"50%",marginLeft:"2rem ", display:"none" }}
         onClick={onClick}
      />
     );
   }


 function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
     <div
       className={className}
       style={{ ...style, display: "block",  background:'linear-gradient(#8360c3, #009FFF)',  borderRadius:"50%", marginRight:"2rem ", display:"none" }}
       onClick={onClick}
     />
   );
 }
  
export default class FocusOnSelect extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1070,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      ]
    };
    return (
      <div className="slider-main-data">
      <div className="heading-slider-auction">
        <span> Live Auction </span></div>
        <div className="carouel-slider-main1">
        <Slider {...settings}>
        <div className="main-carousel-div">
          <ExploreComponent img={img1} />
          </div>
          <div className="main-carousel-div">
          <ExploreComponent img={img2} />
          </div>
          <div className="main-carousel-div">
          <ExploreComponent img={img3} />
          </div>
          <div className="main-carousel-div">
          <ExploreComponent img={img4} />
          </div>
          <div className="main-carousel-div">
          <ExploreComponent img={img5} />
          </div>
          <div className="main-carousel-div">
          <ExploreComponent img={img6} />
          </div>
          <div className="main-carousel-div">
          <ExploreComponent img={img7} />
          </div>

          <div className="main-carousel-div">
          <ExploreComponent img={img7} />
          </div>

          <div className="main-carousel-div">
          <ExploreComponent img={img8} />
          </div>
          <div className="main-carousel-div">
          <ExploreComponent img={img5} />
          </div>
        </Slider>
        </div>
        </div>
    );
  }
}