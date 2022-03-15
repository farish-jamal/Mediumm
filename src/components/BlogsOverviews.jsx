import React from 'react'
import Image from '../assests/blog8.jpg'

function BlogsOverviews() {
  return (
    <div class="main_content d-flex align-items-center py-2">
        <div class="details">
            <h4>Nearly 200 Great Barrier Reef coral species also live in the deep sea</h4>
            <p>There are more coral species lurking in the deep ocean that previously thought.</p>
            <p>Jake Bittle in SCIENCE</p>
            <p>Dec 12 · 5 min read</p>
        </div>
        <div class="content_img">
            <img src={Image} alt=""/>
        </div>
    </div>
  )
}

export default BlogsOverviews