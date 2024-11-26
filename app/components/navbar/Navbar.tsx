import Image from 'next/image'
import React from 'react'
import Menu from '../menu/Menu'
import DropdownContact from '../dropdowns/dropdownContact'

const Navbar = () => {
  return (
    <div className='w-full z-10 mx-auto border border-b-gray-300 bg-transparent dark:bg-gray-800 h-16 flex flex-row justify-between items-center px-12 fixed'>
        <div className='h-8 aspect-video relative'>
            <Image src={"/logo.png"} alt='' fill/>
        </div>
        <Menu/>
        <DropdownContact/>

    </div>
  )
}

export default Navbar