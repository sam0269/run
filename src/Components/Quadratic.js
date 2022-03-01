import React from 'react'
import '../style.css'

const First_Contain = () =>{
    return(
        <> 
            <div className="item-container">
                <img src="images/6.png" alt="happy" />
                <div className="items">
                    <div className="item-block">
                        <p>↪ Avoid caffeine or alcohol three hours before bedtime.</p>
                        <p>↪ Don't take midday naps.</p>
                        <p>↪ Get into a nightly routine to help you unwind, such as a warm bath, meditation, or listening to calming music.</p>
                        <p>↪ Plan to go to sleep at the same time every night.</p>
                    </div>  
                </div>
            </div>
        </>
    )
}
const Second_Contain = () =>{
    return(
        <>
            <div className="item-container">
                <img src="images/8.png" alt="" />
                <img src="images/9.png" alt="" />
            </div>
        </>
    )
}

const Quadratic = () => {
  return (
      <>
          <div id="quadratic-content">
              <First_Contain/>
                <img src="images/7.png" alt="" />
              <Second_Contain/>
          </div>
      </>
  )
}

export default Quadratic
