import React from 'react'
import Styles from '../Styles/Review.module.css'
import Gplay from '../assets/ReviewSection/google-play.png'

const Review = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.promotional}>
            <h2>Join the pool of 21Mn+ students and get started with your career</h2>
            <p>PLAY STORE RATING</p>
            <h3>4.4</h3>
            <img src={Gplay} alt="Google Play"/>
        </div>
    </div>
  )
}

export default Review