import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import DroneListing from '../pages/DroneListing'
import DroneDetails from '../pages/DroneDetails'
import NotFound from '../pages/NotFound'

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/dronelisting' element={<DroneListing/>} />
        <Route path='/dronedetails' element={<DroneDetails/>} />
        <Route path='/notfound' element={<NotFound/>} />
    </Routes>
}

export default Routers