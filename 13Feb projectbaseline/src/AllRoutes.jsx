import React from 'react'
import Blogpage from './pages/Blogpage'
import Covid from './pages/Covid'
import Homepage from './pages/Homepage';
import { Routes, Route, useNavigate } from "react-router-dom";

const AllRoutes = () => {
  return (
    <>
       <Routes>
        <Route
          path="/"
          element={
            <Homepage
            />
          }
        />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/covid" element={<Covid />} /> 
      </Routes>
    </>
  )
}

export default AllRoutes
