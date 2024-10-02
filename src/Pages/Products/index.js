import React from 'react'
import Header from '../../Components/Header/index'

export default function ProductsPage({children}) {
  return (
    <div className="min-vh-100">
      <Header />
      {children}
    </div>
  )
}
