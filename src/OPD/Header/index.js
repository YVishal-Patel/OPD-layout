import React from 'react'
import './index.css'

function Header() {
  return (
    <>
    <div className="header-main-data-head-mained">
    <div className="container">
      <div className="header-main-data-head">
        <div className="header-main-heading d-flex justify-content-between">
          <span className="header-main-headings">OPD</span>
          <div className="header-right-div d-flex justify-content-end">

            <div className="activity">
              <span className="activity-data">Activity</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
            </div>

            <div className="activity">
              <span className="activity-data">Community</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
            </div>

            <div className="activity">
              <span className="activity-data">Explore</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
            </div>

          {/* <div className="banner-header-head-btn d-flex justify-content-center "> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg> */}
      <input type="text" placeholder="Collection, items and Users" className='foot-inputs-upper header-upper' />
        <button className="banner-header-head-btns wallet-btn"> Connect Wallet</button>
        <div className="menu-header ">
        <svg className="banner-data-head mx-2 mt-2" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z"/></svg>
        </div>
      {/* </div> */}

           <div className="menu-header ">
           <i class="fa-solid fa-bars bar-icon"></i>
           </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Header;