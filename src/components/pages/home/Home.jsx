import AppDownload from '../../app download/AppDownload'
import Explore_menu from '../../explore menu/Explore_menu'
import FoodDisplay from '../../food display/FoodDisplay'
import Header from '../../Header/Header'
import './Home.css'
import { useState } from 'react'

const Home = () => {
  const  [category, setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <Explore_menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
