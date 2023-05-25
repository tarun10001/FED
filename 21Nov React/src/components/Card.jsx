import React from 'react';
import "../App.css";

const Card = ({ author, title, urlToImage }) => {
  return (
    <>
      <div className='title'>
      <img src={urlToImage} />
        <h1>{author}</h1>
        <h2>{title}</h2>
        </div>      
    </>
  )
}

export default Card;