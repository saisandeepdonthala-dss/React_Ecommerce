import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
  return (
    <div>Home
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sequi repudiandae quidem suscipit eligendi. Consectetur iste laboriosam suscipit, illum cumque incidunt expedita ad maxime impedit officiis culpa. Aspernatur, perspiciatis </p>
        <button onClick={() =>{navigate ('/contact')}}> Enquiry </button>  
    </div>
  )
}

export default Home