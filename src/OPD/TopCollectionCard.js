import React from 'react'
// import './index.css'
import  '../OPD/TopCategory/index.css'
import TopCategoryCard from '../OPD/TopCategory/TopCategoryCard'

function TopCollectionCard() {
  return (
      <>
      <div className="container">
          <div className="top-category-main1">
              <div className="top-category-head d-flex justify-content-between">
                  <span className="top-category-heading">Top Collection in <span className='top-category-subheading'>1 Day </span></span>
                  <div className="top-category-heading-nav d-flex">
                   <span className="top-category-heading-nav-data mx-3">All</span>
                   <span className="top-category-heading-nav-data mx-3">Ethereum</span>
                   <span className="top-category-heading-nav-data mx-3">Flow</span>
                   <span className="top-category-heading-nav-data mx-3">Polygon</span>
                   <button className='top-category-heading-nav-data-btn mx-3'> View Ranking</button>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-4">
              <TopCategoryCard />
              </div>
              <div className="col-4">
              <TopCategoryCard />
              </div>
              <div className="col-4">
              <TopCategoryCard />
              </div>
              <div className="col-4">
              <TopCategoryCard />
              </div>
              <div className="col-4">
              <TopCategoryCard />
              </div>
              <div className="col-4">
              <TopCategoryCard />
              </div>
              <div className="col-4">
              <TopCategoryCard />
              </div>
              <div className="col-4">
              <TopCategoryCard />
              </div>
              <div className="col-4">
              <TopCategoryCard />
              </div>
          </div>
          
      </div>
      </>
  )
}

export default TopCollectionCard