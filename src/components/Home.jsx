import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const navigateToShopHere = () => {
    navigate('/Gallery')
  }
  return (
    <>
    <div className="Home_container">
      <div className="Home_main">
        <h1>WELCOME TO FLOWER SHOP</h1>
        <p>Where you can find the best flowers for your special occasions
          and bloom your life with it 
        </p>
        <button className="shop-button" onClick={() => navigateToShopHere()}>SHOP HERE!</button>
      </div>
    </div>
    </>
  )
}

export default Home