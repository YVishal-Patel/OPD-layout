import React from 'react'
import './index.css'
import img1 from '../OPD-assets/img1.jpg'
import img2 from '../OPD-assets/img2.jpg'
import img3 from '../OPD-assets/img3.jpg'
import img4 from '../OPD-assets/img4.jpg'
import img5 from '../OPD-assets/img5.jpg'
import img6 from '../OPD-assets/img6.jpg'
import img7 from '../OPD-assets/img7.jpg'



function TopSeller() {
  return (
      <>
      <div className="container">
          <div className="topseller-main">
              <div className="top-seller-head">
                  <span className='top-sellet'> Top Seller in <span className='top-seller-brand'> 1 Day</span></span>
              </div>
              <div className="row top-seller-data ">

                    <div className="col-12 col-lg-4 col-md-6 top-seller-data-main">
                        <img src={img1} className="background-img" alt="not found" /> <br />
                        <div className="d-flex justify-content-center">
                        <img src={img2} className="profile-img" alt="not found" />
                        </div>
                        <br />
                        <p className='topseller-name text-center'>#Name</p>
                        <p className="money text-center">$56,89,45</p>
                    </div>

                    <div className="col-12 col-lg-4 col-md-6  top-seller-data-main">
                        <img src={img7} className="background-img" alt="not found" /> <br />
                        <div className="d-flex justify-content-center">
                        <img src={img1} className="profile-img" alt="not found" />
                        </div>
                        <br />
                        <p className='topseller-name text-center'>#Name</p>
                        <p className="money text-center">$56,89,45</p>
                    </div>

                    <div className="col-12 col-lg-4 col-md-6  top-seller-data-main">
                        <img src={img3} className="background-img" alt="not found" /> <br />
                        <div className="d-flex justify-content-center">
                        <img src={img4} className="profile-img" alt="not found" />
                        </div>
                        <br />
                        <p className='topseller-name text-center'>#Name</p>
                        <p className="money text-center">$56,89,45</p>
                    </div>

                    <div className="col-12 col-lg-4 col-md-6  top-seller-data-main">
                        <img src={img5} className="background-img" alt="not found" /> <br />
                        <div className="d-flex justify-content-center">
                        <img src={img6} className="profile-img" alt="not found" />
                        </div>
                        <br />
                        <p className='topseller-name text-center'>#Name</p>
                        <p className="money text-center">$56,89,45</p>
                    </div>
              </div>
          </div>
      </div>
      </>
  )
}

export default TopSeller