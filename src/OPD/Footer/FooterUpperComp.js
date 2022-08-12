import React from 'react'
import './index.css'

function FooterUpperComp() {
  return (
      <>
        <div className="container">
    <div className="banner-opd-main">
      <div className="banner-opd-heading d-flex justify-content-center ">
        <span className="banner-heading-head text-center">Never miss a drop!</span>
      </div>
      <p className="banner-header-head-data text-center">Select to our super-exclusive drop list and be the first to know about upcoming drops.</p>
      <div className="banner-header-head-btn d-flex justify-content-center ">
      <input type="text" placeholder="Collection, items and Users" className='foot-inputs-upper' />
        <button className="banner-header-head-btns"> Subscribe</button>
      </div>
      </div>
    </div>
      </>
  )
}

export default FooterUpperComp