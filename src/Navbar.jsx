import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import { HelloContext } from './App';

function Navbar() {
  const {cart,setCart}=useContext(HelloContext)
  return (
    <>
    <Link to ="/"> Home </Link>
    <Link to ="/products"> Products </Link>
    <Link to ="/contact"> Contact  </Link>
    <Link> {cart.length} </Link>
    </>
  )
}

export default Navbar
