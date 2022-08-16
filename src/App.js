import React from 'react'
import Footer from './OPD/Footer'
import FooterUpperComp from './OPD/Footer/FooterUpperComp'
import Explore from './OPD/Explore'
import ExploreComponent from './OPD/Explore/ExploreComponent'
import TopCategory from './OPD/TopCategory'
import Header from './OPD/Header'
import Home from './OPD/Home'
import RoutesMain from './Pages/Routing'
import Slider from './OPD/Carousal/Carousal'
import SummerSale from './OPD/SummerSale'
import TopCollectionCard from './OPD/TopCollectionCard'
import Slider1 from './OPD/LiveAuction/index'
import SellNFT from './OPD/SellNFT/index'
import TopSeller from './OPD/TopSaller/TopSeller'
import Slider2 from './OPD/Carousal/Carousal1'
import './OPD/Responsive/Responsive.css'
import {Demo} from './Demo'
import SliderSmall2 from './OPD/SliderSmall1'
function App() {
  return (
    <>
     <Header />
     <Home />
    <div className="slider-carousal">
     <Slider />
     </div>
     <div className="slider-carousal-1">
     <Slider2 />
     </div>
     <TopCollectionCard  /> 
    <TopCategory />
     <TopSeller />
    <SummerSale/>
    <div className="slider1-big">
    <Slider1 /> 
    </div>
    {/* <div className="slider1-small-scr">
    <SliderSmall2 />
    </div> */}
    
    <Explore />
 <FooterUpperComp />
    <SellNFT />
 <Footer /> 
    </>
  )
}

export default App; 