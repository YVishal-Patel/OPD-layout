import React from 'react'
import './index.css'
import img1 from '../OPD-assets/img1.jpg'

function TopCategoryCard() {
  return (
      <>
      <div className="container">
          <div className="top-category-card-main d-flex justify-content-center mt-4">
              <div className="top-category-card-main-head d-flex">
                  <img src={img1} alt="not found"  />
                <div className="top-category-card-main-data">
                    <span className='top-category-card-main-datas'>TorikHandoko</span>
                    <br />
                    <span className='top-category-card-main-data'>14,821.89</span>
                </div>
              </div>
              <div className="top-category-card-main-dot"> ...</div>

          </div>
      </div>
      </>
  )
}

export default TopCategoryCard