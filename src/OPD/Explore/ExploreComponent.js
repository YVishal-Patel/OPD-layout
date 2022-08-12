import React from 'react'
import './index.css'
import img1 from '../OPD-assets/img1.jpg'
import './../OPD-assets/img1.jpg'
import { exploreData } from '../Data/Data'

function ExploreComponent({img}) {
  return (
      <>
      <div className="container">
            <div className="explore-card-main">
                <div className="explore-card-main-img">
             <img src={img} alt="not found" className='card-img' />
             </div>
             <div className="d-flex justify-content-between">
                 <span className='explore-card-name'>Stairs to heaven</span>
                 <span className='explore-card-dot'>...</span>
             </div>
              <div className="explore-nick">
              <span className='explore-card-nickName'>@dayatsantoso</span>
              </div>
             <div className="d-flex justify-content-between explore-final-card  mt-1">
                 <span className='explore-card-th'>44ETH</span>
                 <div className="images-card d-flex flex-end">
                     <img className='images-card-explore' src={img1} alt="not found" />
                     <img className='images-card-explore1' src={img1} alt="not found" />
                     <img className='images-card-explore2 ' src={img1} alt="not found" />
                 </div>
             </div>
            </div>
      </div>
      </>
  )
}

export default ExploreComponent