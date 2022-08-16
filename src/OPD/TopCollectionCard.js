import React, {useState} from 'react'
// import './index.css'
import  '../OPD/TopCategory/index.css'
import './Responsive/Responsive.css'
import TopCategoryCard from '../OPD/TopCategory/TopCategoryCard'
import { exploreData } from './Data/Data'

function TopCollectionCard() {
    const [data, setData] = useState(exploreData)
    console.log(data)
  return (
      <>
      <div className="container">
          <div className="top-category-main1">
              <div className="top-category-head d-flex justify-content-between">
                  <span className="top-category-heading">Top Collection in <span className='top-category-subheading'>1 Week </span></span>
                  <div className="top-category-heading-nav d-flex">
                   <span className="top-category-heading-nav-data mx-3">All</span>
                   <span className="top-category-heading-nav-data mx-3">Ethereum</span>
                   <span className="top-category-heading-nav-data mx-3">Flow</span>
                   <span className="top-category-heading-nav-data mx-3">Polygon</span>
                   <button className='top-category-heading-nav-data-btn mx-3'> View Ranking </button>
                  </div>
              </div>
          
          <div className="row">
           {data.map((item)=>{
               {console.log(item.img.img1)}
               return <div className="col-4">
                   <div className="container">
          <div className="top-category-card-main d-flex justify-content-center flex-wrap mt-4">
              <div className="top-category-card-main-head d-flex flex-wrap">
                  <img src={item.img.img1} alt="not found"  />
                <div className="top-category-card-main-data">
                    <span className='top-category-card-main-datas'>{item.name}</span>
                    <br />
                    <span className='top-category-card-main-data'>14,821.89</span>
                </div>
              </div>
              <div className="top-category-card-main-dot"> ...</div>

          </div>
      </div>
               </div>
           })}
          </div>
          </div>
      </div>










      <div className="container">
          <div className="top-category-main1-small">
              <div className="top-category-head d-flex justify-content-between">
                  <span className="top-category-heading">Top Collection in <span className='top-category-subheading'>1 Day </span></span>
                  <div className="top-category-heading-nav d-flex">
                   <span className="top-category-heading-nav-data mx-3">All</span>
                   <span className="top-category-heading-nav-data mx-3">Ethereum</span>
                   <span className="top-category-heading-nav-data mx-3">Flow</span>
                   <span className="top-category-heading-nav-data mx-3">Polygon</span>
                   <button className='top-category-heading-nav-data-btn mx-3'> View Ranking </button>
                  </div>
              </div>
          
          <div className="row">
           {data.map((item)=>{
               {console.log(item.img.img1)}
               return <div className="col-12 col-md-6 col-lg-6 col-sm-6">
                   <div className="container">
          <div className="top-category-card-main1 d-flex justify-content-center flex-wrap mt-4">
              <div className="top-category-card-main-head    d-flex flex-wrap">
                  <img src={item.img.img1} alt="not found"  />
                <div className="top-category-card-main-data">
                    <span className='top-category-card-main-datas'>{item.name}</span>
                    <br />
                    <span className='top-category-card-main-data'>14,821.89</span>
                </div>
              </div>
              <div className="top-category-card-main-dot"> ...</div>

          </div>
      </div>
               </div>
           })}
          </div>
          </div>    
      </div> 
      </>
  )
}

export default TopCollectionCard


