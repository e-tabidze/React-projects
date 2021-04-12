import React from 'react'
const CleanColored = ({ children }) => (
  <div className='container mx-auto bg-white md:bg-cleanbg-light'>
    <div className='w-full h-screen flex justify-center items-center'>
      {children}
    </div>
  </div>
)

export default CleanColored