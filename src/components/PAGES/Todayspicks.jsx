import React from 'react'
import Cards from './Cards'
import './Todayspicks.css'
import { useLocation } from 'react-router-dom'
const Todayspicks = () => {
    const location = useLocation();
    const userType = location.state?.userType;
    return (
        <div>
            <div className='Todayspicks'>
                <div>
                    <h1>Today's top Picks for {userType}</h1>
                </div>
                <div className='todayPickListSection'>
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default Todayspicks