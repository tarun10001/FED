import './App.css';
import React, { useEffect } from 'react';
import shuttle from "./img/mission-shuttle.jpg";
import connectTwo from './img/connect-two.jpg';
import { MdNorthWest, MdChromeReaderMode, MdCode } from "react-icons/md";
import Card from "./components/Card";
import Navbar from './components/Navbar';


function App() {

  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("bar").style.width = `${percentage}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return (
    <div className="App">
      <Navbar />    

      {/* <div className="progress_wrapper">
        <div className="progress_bar" id="bar"></div>
      </div> */}

      <div className='rocket'>
        <div className='rocket1'>
          <h1>Turn your ideas into a success.</h1>
          <p>Webbee will make your product look modern and professional while saving you precious time.</p>
          <button className='btn1'>Purchase now</button>
          <button className='btn2'>View documentation</button>
        </div>

        <div className='rocket2'>
          <img src={shuttle} alt="" />
        </div>
      </div>


      <div className="built">

        <div>
          <p className="md"><MdNorthWest /></p>

          <h3>Built for developers</h3>
          <p>Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>
        </div>

        <div>
          <p className="md"><MdChromeReaderMode /></p>

          <h3>Designed to be modern</h3>
          <p>
            Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful.</p>
        </div>

        <div>
          <p className="md">< MdCode /></p>
          <h3>Documentation for everything</h3>
          <p>
            We've written extensive documentation for components and tools, so you never have to reverse engineer anything.</p>
        </div>
      </div>

      <div className="feat">
        <p className="feat1">FEATURES</p>
        <div className="feat2">The powerful and flexible theme
          for all kinds of businesses</div>
        <div className="feat3">Build a beautiful, modern website with flexible, fully customizable, atomic Material-UI components. An experience you'd expect from a design system.</div>
        <button className='btn1'>Purchase now</button>

      </div>

      <div className='imgg'>
        <img src={connectTwo} alt="" />
      </div>

      <Card />
      <hr />

      <div className="feat">
        <p className="feat1">&copy; Webbee. 2021, Maccarian. All rights reserved</p>

        <div className="feat4">When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</div>
      </div>

    </div>
  );
}

export default App;