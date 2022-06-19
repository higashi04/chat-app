import React from 'react'
import SideBar from '../SideBar/SideBar'

export default function Dashboard({id}) {
  return (
    <div className='sideBar'>
        <SideBar id={id} />
    </div>
  )
}
