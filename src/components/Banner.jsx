import React from 'react'
import BannerImg from '../assests/1.jpg'

function Banner() {
  return (
    //Featured post Starts
    <div class="container-sm d-flex align-items-center py-3 banner">
        <div class="content">
            <h1>Mundana is an HTML Bootstrap Template for Professional Blogging</h1>
            <p>Beautifully crafted with the latest technologies, SASS and Bootstrap 4.1.3, Mundana is the perfect design for your professional blog. Homepage, post article and category layouts available.</p>
            <button type="button" class="btn btn-secondary">Read More</button>
        </div>
        <div class="image">
            <img src={BannerImg} alt="" />
        </div>
    </div>
  )
}

export default Banner