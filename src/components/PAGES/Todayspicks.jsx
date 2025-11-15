import React from 'react'
import Cards from './Cards'
import './Todayspicks.css'

const Todayspicks = () => {
    return (
        <div>
            <div className='Todayspicks'>
                <div>
                    <h1>Today's top Picks for you</h1>
                </div>
                <div className='todayPickListSection'>
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default Todayspicks