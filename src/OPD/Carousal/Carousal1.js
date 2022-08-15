


import img1 from '../OPD-assets/img10.jpeg'
import img2 from '../OPD-assets/img8.jpeg'
import img3 from '../OPD-assets/img3.jpg'
import img4 from '../OPD-assets/img4.jpg'
import img5 from '../OPD-assets/img5.jpg'
import img7 from '../OPD-assets/img6.jpg'
import img6 from '../OPD-assets/img7.jpg'

import './Carousal.css'

import React, { Component, useState, useEffect } from "react";
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
          breakpoint: 1380,
          settings: {
            arrows: false,
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 464,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 620,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
      ],
          
    };
    return (
      <div className="carouel-slider-main">
      <div>
        <Slider {...settings}>
        <div className="main-carousel-div1">
             <img src={img1} className="img-size-carousel1" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name1">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div1">
             <img src={img2} className="img-size-carousel1" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name1">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div1">
             <img src={img3} className="img-size-carousel1" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name1">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div1">
             <img src={img4} className="img-size-carousel1" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name1">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div1">
             <img src={img5} className="img-size-carousel1" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name1">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div1">
             <img src={img6} className="img-size-carousel1" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name1">Azuki</p>
             </div>
           </div>

           <div className="main-carousel-div1">
             <img src={img7} className="img-size-carousel1" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name1">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div1">
             <img src={img2} className="img-size-carousel1" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name1">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div1">
             <img src={img4} className="img-size-carousel1" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name1">Azuki</p>
             </div>
           </div>
        </Slider>
      </div>
      </div>
    );
  }
}