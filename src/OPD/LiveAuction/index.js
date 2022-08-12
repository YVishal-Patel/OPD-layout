

import React, { Component } from "react";
import Slider from "react-slick";
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
// import React, { Component } from "react";
// import Slider from "react-slick";

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

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (

      <>
      <div className="slider-main-data">
      <div className="heading-slider-auction">
        <span> Live Auction </span></div>
        <div className="carouel-slider-main1">
        <Slider {...settings} >
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
          <ExploreComponent img={img9} />
          </div>
        </Slider>
      </div>
      </div>
{/* 
<svg className="internet-banner" xmlns="http://www.w3.org/2000/svg" width="2000" height="260" viewBox="0 0 4819 260">
  <g id="Group_104" data-name="Group 104" transform="translate(359 -1340)">
    <rect id="Rectangle_20" data-name="Rectangle 20" width="4819" height="260" transform="translate(-359 1340)" fill="#ebff00"/>
    <text id="INTERNET_MADE_NFT" data-name="INTERNET MADE NFT" transform="translate(1992 1521)" font-size="170" word-spacing = "60px" font-family="poppins" font-weight="700"><tspan x="-2286.5" y="0">INTERNET MADE NFT</tspan></text>
    <text id="INTERNET_MADE_NFT-2" data-name="INTERNET MADE NFT" transform="translate(4398 1521)" font-size="170" font-family="poppins" font-weight="700"><tspan x="-2286.5" y="0">INTERNET MADE NFT</tspan></text>
    
  </g>
</svg> */}
</>

    );
  }
}