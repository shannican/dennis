import React from 'react'
import HeroImage from './herosection/HeroImage'
import HeroText from './herosection/HeroText'
import CenterFlex from './centerflex/CenterFlex'

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-emerald-300'>
        <CenterFlex />
        <HeroImage />
        <HeroText />

    </div>
  )
}

export default LandingPage