import React from 'react'
import Header from '../../Components/Header'
import TimeLineStatus from '../../Components/TimeLineStatus'

export default function ProductsPage({children}) {
  return (
    <div className="min-vh-100">
      <Header />
      <div className='mt-5'>
        <TimeLineStatus />
      </div>
      {children}
    </div>
  )
}
