import React from 'react'
import Image from '../assests/blog8.jpg'

function About() {
  return (
    <div class="about">
        <h3>About Us</h3>
        <img src={Image} alt="" />
        <p class="pt-3 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat recusandae facere deleniti eligendi sunt error earum libero ducimus, animi officia facilis rerum maxime? Alias odit ipsam atque non ratione qui, sapiente doloribus ad facere enim delectus beatae harum dolores blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, incidunt!</p>
        <div class="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-google-plus-square"></i>
            <i class="fa-solid fa-envelope"></i>
        </div>
    </div>
  )
}

export default About