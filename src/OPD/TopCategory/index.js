import React from 'react'
import './index.css'
import TopCategoryCard from './TopCategoryCard'

function TopCategory() {
  return (
      <>
      <div className="container">
          <div className="top-category-main">
              <div className="top-category-head d-flex justify-content-between">
                  <span className="top-category-heading">Top Creator <span className='top-category-subheading'> This Week </span></span>
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

export default TopCategory