import React, { useContext,useState } from 'react'
import { useParams } from 'react-router-dom'
import { HelloContext } from './App';
function Products() {
    const {cart,setCart}=useContext(HelloContext)
    const[search,setSearch]=useState('');
    const[products,setProducts]=useState([
      {id:1,productName:"AC",price:50000,p_img: "https://m.media-amazon.com/images/I/51Y4KT7l4TL._AC_UY327_FMwebp_QL65_.jpg "},
      {id:2,productName:"Fridge",price:70000,p_img: "https://m.media-amazon.com/images/I/71iB8o2vqlL._SX679_.jpg"},
      {id:3,productName:"Watch",price:5000,p_img:" https://m.media-amazon.com/images/I/51EA9wufAnL._AC_UL480_FMwebp_QL65_.jpg"},
      {id:4,productName:"Laptop",price:100000,p_img:" https://m.media-amazon.com/images/I/61s8J1vGi0L._AC_UY327_FMwebp_QL65_.jpg"},
      {id:5,productName:"Washing Machine",price:40000,p_img:"https://m.media-amazon.com/images/I/71BITpPSjML._AC_UY327_FMwebp_QL65_.jpg"},
  ])
  function addToCart(produce){
    setCart(previous=>[...previous,produce])
  }
  const filteredproducts=products.filter(
    (item)=>item.productName.toLowerCase().includes(search.toLowerCase())
  )
  return (
  <>
  <h1> Products </h1>
  <input type='text' placeholder='Enter to search the products' value={search}
  onChange={(e)=>setSearch(e.currentTarget.value)}
  />
  {
    filteredproducts.length===0?(<p>Product Unavailable </p>):(<h1> Branded Products</h1>)
  }

  {products.length===0? (<p> No Products Available </p>):(
    <>
    <div id="products">
    {
     filteredproducts.map((v)=>(
    <div key={v.id}>
      <li> {v.productName} </li>
      <li> {v.price}₹</li>
      <img src={v.p_img} width="50%"/>
      <button onClick={()=>addToCart(v)}>Add To Cart </button>
    </div>
     ))
     }
     </div>
     {
      cart.length===0?(<p> No Items Available in Cart </p>):(
        <>
        <h1> Cart Items </h1>
        {
          cart.map((v)=>(
            <div key={v.id}> 
               <h1> {v.productName} </h1>
            </div>
          ))
        }
        </>)
      }
      </>
     )}
    </>
  )
}

export default Products
