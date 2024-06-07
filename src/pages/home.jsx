import React from 'react';
import '../css/home.css';
import image from '../assets/village.jpg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home page</h1>
      <div className="container">
        <p>Welcome!!</p>
        <img href='#' atl="images"src={image}></img>
        <div/>
        <button onClick={()=>navigate('/signin')}> Enter</button>
        <span></span>
        <div/>

      </div>
    </div>
  );
};

export default Home;