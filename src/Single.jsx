import React from 'react'
import { useParams } from 'react-router-dom'

const Single = () => {
  const { id } = useParams();
  // This hook from react-router-dom allows you to access the dynamic parts of the URL,
  return (
    <div>
      <div>our movie { id } </div>
    </div>
  )
}

export default Single
