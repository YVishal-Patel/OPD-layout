import React from 'react'
import './index.css'
import '../Responsive/Responsive.css'

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

      <input type="text" placeholder="Collection, items and Users" className='foot-inputs-upper header-upper' />
        <button className="banner-header-head-btns wallet-btn"> Connect Wallet</button>
        <div className="menu-header ">
        <svg className="banner-data-head mx-2 mt-2" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z"/></svg>
        </div>

           <div className="menu-header ">
           <i class="fa-solid fa-bars bar-icon"></i>
           </div>
          </div>
        </div>
      </div>
    </div>
    </div>



    <nav class="navbar navbar-expand-lg header-main-data-head-small">
  <div class="container-fluid">
    <div className="header-small-data d-flex justify-content-around w-100">
    <a class="navbar-brand" href="#">OPD</a>

<div className="header-small-middle d-flex ">
    <input type="text" placeholder="Collection, items and Users" className='foot-inputs-upper header-upper' />
        <button className="banner-header-head-btns wallet-btn"> Connect Wallet</button>
        </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars bar-icon"></i>
    </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center flex-column align-items-center">
        <li class="nav-item">
          <a class="nav-link nav-link-data active" aria-current="page" href="#">Activity</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link nav-link-data active" aria-current="page" href="#">Community</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-data active" aria-current="page" href="#">Explore</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header;