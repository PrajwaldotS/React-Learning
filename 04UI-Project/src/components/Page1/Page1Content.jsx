
import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div>
      <div className='py-10 flex items-center gap-10 justify-between h-[90vh] px-18 '>
        <LeftContent/>
        <RightContent/>
      </div>
    </div>
  )
}

export default Page1Content
