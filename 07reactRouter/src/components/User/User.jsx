import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
  return (
    <div className='bg-gray-500 h-10 text-white text-xl p-1'>User: {userid}</div>
  )
}

export default User
