import React from 'react'
import Navbar from './navbar/Navbar'
import Home from './Topcomp/Home'
import Todayspicks from './PAGES/Todayspicks'
import MoreReasons from './PAGES/MoreReasons'

export const Homepage = () => {
    return (
       <div className="page-with-navbar">
            <Navbar />
            <Home />
            <Todayspicks />
            <MoreReasons />
        </div>
    )
}
