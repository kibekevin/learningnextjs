import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <h1 className='text-3xl'>Dashboard Navbar</h1>
        {children}
        <footer className='text-3xl mt-3'>Dashboard Footer</footer>
    </div>
  )
}

export default layout
