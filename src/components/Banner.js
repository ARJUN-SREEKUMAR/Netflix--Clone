import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
        <div className='contents'>
            <h1 className='titile'>Money Heist</h1>
            <div className='buttons'>
            <button className='button'> Play </button>
            <button className='button'> Mylist </button>
            </div>
            <h1 className='description'>Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan. Watch all you want.
            </h1>
            
            
        </div>
        <div className="fade"> </div>
    </div>
  )
}

export default Banner