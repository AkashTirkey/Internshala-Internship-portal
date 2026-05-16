import React from 'react'
import pfp from '../assets/internshala_og_image.jpg'
import Styles from '../Styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.navbar}>

        {/* internshala logo */}
         <div className={Styles.logo}>
        <img src={pfp} alt="logo" />
        </div>
      
      {/* navlinks */}
      <div >
        <ul className={Styles.navlinks}>
          <li>Internships</li>
          <li>Courses <span style={{backgroundColor:"orangered" , color:"white", fontSize:"12px",fontWeight:500 ,padding:"4px", borderRadius:"5px"}}>OFFER</span></li>
          <li>Jobs</li>
          <li>Login/Register</li>
        </ul>
      </div>
      </div>
     
    </div>
  )
}

export default Navbar;