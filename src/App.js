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

function App() {
  return (
    <>
   {/* <RoutesMain />  */}
    <Header />
    <Home />
    <Slider />
    <TopCollectionCard />

    {/* <TopCollection /> */}
    <TopCategory />
    <TopSeller />
    <SummerSale/>
    <Slider1 />
    <Explore />
 <FooterUpperComp />
    <SellNFT />
 <Footer />
    </>
  )
}

export default App