import React from 'react'
import ExploreComponent from './ExploreComponent'
import img1 from '../OPD-assets/img1.jpg'
import img2 from '../OPD-assets/img2.jpg'
import img3 from '../OPD-assets/img3.jpg'
import img4 from '../OPD-assets/img4.jpg'
import img5 from '../OPD-assets/img5.jpg'
import img6 from '../OPD-assets/img6.jpg'
import img7 from '../OPD-assets/img7.jpg'
import img8 from '../OPD-assets/img8.jpeg'
import img9 from '../OPD-assets/img9.jpeg'
import img10 from '../OPD-assets/img10.jpeg'
import img11 from '../OPD-assets/img11.jpeg'
import img12 from '../OPD-assets/img12.jpeg'

import './index.css'

function Explore() {
  return (
      <>
      <div className="container">
          <div className="explore-main d-flex justify-content-between">
              <div className="explore-main-head">
                  <span className="explore-main-headings">Explore</span>
              </div>
                <div className="explore-main-right-div d-flex">
                 <div className="explore-blogchain d-flex">
                 <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#fff"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M6,6.39v4.7c0,4,2.55,7.7,6,8.83c3.45-1.13,6-4.82,6-8.83v-4.7l-6-2.25L6,6.39 z" enable-background="new" opacity=".3"/><path d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M18,11.09c0,4-2.55,7.7-6,8.83 c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z"/></g></g></svg>
                 <span className='explore-blogchain-data'>Blogchain</span>
                 </div>

                 <div className="explore-blogchain d-flex mx-2">
                 <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.66 4.52l2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z"/></svg>
                  <span className='explore-blogchain-data'>Category</span>
                 </div>

                 <div className="explore-blogchain d-flex mx-2">
                 <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                 <span className='explore-blogchain-data'>Collection</span>
                 </div>

                 <div className="explore-blogchain d-flex mx-2">
                 <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#fff"><g><rect fill="none" height="24" width="24"/></g><g><path d="M11,21h-1l1-7H7.5c-0.88,0-0.33-0.75-0.31-0.78C8.48,10.94,10.42,7.54,13.01,3h1l-1,7h3.51c0.4,0,0.62,0.19,0.4,0.66 C12.97,17.55,11,21,11,21z"/></g></svg>
                 <span className='explore-blogchain-data'>On sale</span>
                 </div>

                 <div className="explore-blogchain d-flex mx-2">
                 <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                 <span className='explore-blogchain-data mx-2'>Price range</span>
                 </div>
                </div>
          </div>
          <div className="row indexes-explre-comp">
              <div className="col-12 col-xl-2 col-lg-4 col-md-4 col-sm-6"> <ExploreComponent  img={img12}/> </div>
              <div className="col-12 col-xl-2 col-lg-4 col-md-4 col-sm-6"><ExploreComponent  img={img11}/> </div>
              <div className="col-12 col-xl-2 col-lg-4 col-md-4 col-sm-6"><ExploreComponent  img={img1}/> </div>
              <div className="col-12 col-xl-2 col-lg-4 col-md-4 col-sm-6"><ExploreComponent  img={img2}/> </div>
              <div className="col-12 col-xl-2 col-lg-4 col-md-4 col-sm-6"> <ExploreComponent  img={img3}/> </div>
              <div className="col-12 col-xl-2 col-lg-4 col-md-4 col-sm-6"> <ExploreComponent  img={img4}/></div> 

              <div className="col-12 col-xl-2 col-lg-4 col-md-4 col-sm-6"> <ExploreComponent  img={img5}/> </div>
              <div className="col-12 col-xl-2 col-lg-4 col-md-4 col-sm-6"><ExploreComponent  img={img6}/> </div>
              <div className="col-12 col-xl-2 col-lg-4 col-md-4 col-sm-6"><ExploreComponent  img={img7}/> </div>
              <div className="col-12 col-xl-2 col-lg-4 col-md-4 col-sm-6"><ExploreComponent  img={img8}/> </div>
              <div className="col-12 col-xl-2 col-lg-4 col-md-4 col-sm-6"> <ExploreComponent  img={img9}/> </div>
              <div className="col-12 col-xl-2 col-lg-4 col-md-4 col-sm-6"> <ExploreComponent  img={img10}/></div> 
              
          </div>

          <button className='explore-last-btn'> View More</button>
      </div>

      </>
  )
}

export default Explore