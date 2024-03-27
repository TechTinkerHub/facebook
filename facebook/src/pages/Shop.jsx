import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/popular/Popular'
import Offers from '../component/Offers/Offers'
import NewCollection from '../component/NewCollection/NewCollection'
import Newesletter from '../component/Newsletter/Newesletter'


function Shop() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <Newesletter/>
        
    </div>
  )
}

export default Shop