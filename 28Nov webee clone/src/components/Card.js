import React from 'react';
import '../App.css';
import { MdNorthWest, MdDarkMode, MdStickyNote2, MdSpaceDashboard, MdAmpStories, MdChangeCircle, MdOutlinePhoneInTalk } from "react-icons/md";

function Card() {
  return (
    <div className='card'>

      <div className='card1'>
          <p className="md"><MdSpaceDashboard /></p>

          <h3>Themeable</h3>
          <p>
Customize any part of our components to match your design needs.</p>
        </div>

        <div  className='card1'>
          <p className="md"><MdDarkMode /></p>

          <h3>Light and Dark UI</h3>
          <p>
Optimized for multiple color modes. Use light or dark, your choice.</p>
        </div>

        <div className='card1'>
          <p className="md"><MdStickyNote2 /></p>

          <h3>Composable</h3>
          <p>
Designed with composition in mind. Compose new components with ease.</p>
        </div>

        <div className='card1'>
          <p className="md"><MdAmpStories /></p>

          <h3>Developer Experience</h3>
          <p>
Guaranteed to boost your productivity when building your app or website.</p>
        </div>

        <div className='card1'>
          <p className="md"><MdChangeCircle /></p>

          <h3>Continuous Updates</h3>
          <p>
We continually deploy improvements and new updates to Webbee.</p>
        </div>

        <div className='card1'>
          <p className="md"><MdOutlinePhoneInTalk /></p>

          <h3>Free support</h3>
          <p>
6 months of free technical support to help you build your website faster.</p>
        </div>

    </div>
  )
}

export default Card;