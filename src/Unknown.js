import React, { Component } from "react";
import Slider from "react-slick";
import img1 from './OPD/OPD-assets/img1.jpg'
import img2 from './OPD/OPD-assets/img2.jpg'
import img3 from './OPD/OPD-assets/img3.jpg'
import img4 from './OPD/OPD-assets/img4.jpg'
import img5 from './OPD/OPD-assets/img5.jpg'
import img7 from './OPD/OPD-assets/img6.jpg'
import img6 from './OPD/OPD-assets/img7.jpg'
import './OPD/Carousal/Carousal.css'


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className="carouel-slider-main">
        <div>
        <Slider {...settings}>
        <div className="main-carousel-div">
             <img src={img1} className="img-size-carousel" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div">
             <img src={img2} className="img-size-carousel" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div">
             <img src={img3} className="img-size-carousel" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div">
             <img src={img4} className="img-size-carousel" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div">
             <img src={img5} className="img-size-carousel" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div">
             <img src={img6} className="img-size-carousel" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name">Azuki</p>
             </div>
           </div>

           <div className="main-carousel-div">
             <img src={img7} className="img-size-carousel" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div">
             <img src={img2} className="img-size-carousel" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name">Azuki</p>
             </div>
           </div>
           <div className="main-carousel-div">
             <img src={img4} className="img-size-carousel" alt="" />
             <div className="carousel-data">
             <p  className="card-type-name">Azuki</p>
             </div>
           </div>
        </Slider>
        </div>
        </div>
    );
  }
}