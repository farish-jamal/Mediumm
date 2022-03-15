import React from 'react'
import NewForm from '../components/NewForm'
import Header from '../components/Header';

function Create() {
  return (
    <div>
        <Header linked="/" color="btn btn-sm btn-outline-danger px-4 py-1"/>
        <NewForm />
    </div>
  )
}

export default Create