import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import { HelloContext } from './App';

function Navbar() {
  const {cart,setCart}=useContext(HelloContext)
  return (
    <>
    <nav id='navbar'>
    <Link to ="/"> Home </Link>
    <Link to ="/products"> Products </Link>
    <Link to ="/contact"> Contact  </Link>
    <Link> {cart.length} </Link>
    </nav>
    </>
  )
}

export default Navbar
