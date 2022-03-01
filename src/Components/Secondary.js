import React from 'react'
import '../style.css'
const Secondary = () => {
  return (
    <>
        <div id="secondary-section">
            <img src="images/2.png" alt="running" />
            <div className="second-item-container" style={{width:"37vw"}}>
                <div className="second-item">
                    <h1>We Are Always Beginner Friendly</h1>
                </div>
                <div className="indexes">
                    <h1 style={{fontFamily:"Roboto Slab",marginBottom:"2rem"}}>Future Run Club</h1>
                    <p>A 2 to 4 mile Central Park run followed by brunch! As always, all levels are welcomed, and the goal is to meet some new running buddies and have fun.</p>
                    <button className='spcl-btn'>JOIN NOW</button>
                </div>
            </div>
            <img src="images/3.png" alt="" />
        </div>
    </>
  )
}

export default Secondary