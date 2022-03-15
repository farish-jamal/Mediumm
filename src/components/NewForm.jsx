import React from 'react'

function NewForm() {
  return (
    <div class="container-sm">
    <h1 class="text-center py-3">Create a New Blog</h1>
        <div class="mb-3">
          <label for="Heading" class="form-label">Enter Heading</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Write Main Content</label>
          <textarea type="password" class="form-control" id="exampleInputPassword1"></textarea>
        </div>
        <div class="mb-3">
            <label for="Heading" class="form-label">Enter Your Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Select Featured Image</label>
            <input class="form-control" type="file" id="formFile" />
        </div>
        <button type="button" class="btn btn-success px-4" id="subbtn">Submit</button>
    </div>
  )
}

export default NewForm