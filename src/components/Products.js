import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
    <h1>Products</h1>
    <li><NavLink to={'Kids'}>KIDS</NavLink></li>
    <li><NavLink to={'electronics'}>Electronics</NavLink></li>
    <Outlet></Outlet>
    </div>
  )
}

export default Products