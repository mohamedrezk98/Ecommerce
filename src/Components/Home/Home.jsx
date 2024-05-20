import React from 'react'
import MainSlider from '../MainSlider/MainSlider'
import Products from '../Products/Products'
import CategorySlider from '../CategorySlider/CategoriySlider'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    
    <div>

      <div className="home">
        <MainSlider />
        <CategorySlider />
        <Products />


      </div>

    </div>

  )
}
