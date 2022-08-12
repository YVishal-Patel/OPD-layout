import React from 'react'
import './index.css'

function Footer() {
  return (
    <>

    <div className="container">
    <div className="banner-opd-main">
      <div className="banner-opd-heading d-flex justify-content-center ">
        <span className="banner-heading-head text-center">Join our community</span>
      </div>
      <p className="banner-header-head-data text-center">Meet the  team, artists and collections for platform updates, announcements and more.</p>
      <div className="banner-header-head-btn d-flex justify-content-center ">
        <button className="banner-header-head-btns"> Launch Discord</button>
      </div>
      </div>
    </div>

    <div className="container">
      <div className="header-main mx-2">
        <div className="row">
          <div className="col-3">
            <div className="footer-logo-heading">
              <span className="footer-logo-headings"> OPD</span>
            </div>
            <span className="footer-data-value1">Lorem ipsum dolor. Laborum est reprehenderit fugit unde asperiores, optio odio voluptates inventore ex, itaque illum natus cupiditate consectetur.</span>       

            <div className="d-flex justify-content-start foot-twitt mt-4">
              <div className="foot-twitter mx-2 ">
            <i class="fa-brands fa-twitter twitt"></i>
            </div>
            <div className="foot-twitter mx-3">
            <i class="fa-brands fa-instagram twitt"></i>
            </div>
            <div className="foot-twitter mx-3">
            <i class="fa-brands fa-pinterest twitt"></i>
            </div>
            </div>
          </div>

          <div className="col-2">
            <div className="footer-data">
            <span className="footer-datas">MarketPlace</span>
            </div>
            <p className="footer-data-value">Explore</p>
            <p className="footer-data-value">All NFTs</p>
            <p className="footer-data-value">Collectibles</p>
            <p className="footer-data-value">Virtual Worlds</p>
          </div>

          <div className="col-2">
            <div className="footer-data">
          <span className="footer-datas">Resources</span>
          </div>
            <p className="footer-data-value">Help Center</p>
            <p className="footer-data-value">Partners</p>
            <p className="footer-data-value">Blog</p>
            <p className="footer-data-value">Docs</p>
            <p className="footer-data-value">Newsletter</p>
          </div>

          <div className="col-2">
            <div className="footer-data">
          <span className="footer-datas">Company</span>
          </div>
            <p className="footer-data-value">About Us</p>
            <p className="footer-data-value">Careers</p>
            <p className="footer-data-value">Support</p>
          </div>

          <div className="col-3">
            <div className="footer-data">
          <span className="footer-datas">Get the latest OPD updates</span>
          </div>
          <br />
          <div className="foot-input">
          <i class="fa-solid fa-magnifying-glass foot-search"></i>
          <input type="text" placeholder="Collection, items and Users" className='foot-inputs' />
          </div>
          <br />
          <button className='foot-inputs-btn'> I'm In</button>
          </div>
        </div>
        <div className="mt-5">
        <p className='footer-hr'> <hr /></p>
        </div>

        <div className="d-flex justify-content-between ">
          <div className="foot-div-left d-flex">
          <i class="fa-solid fa-copyright foot-copy"></i>
          <span className='foot-copyright-text'>OPD, Inc. All rights reversed.</span>
          </div>
          <div className="foot-div-right">
            <span className='foot-copyright-text1'> Terms </span>
            <span className='foot-copyright-text1'> Privacy policy </span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer