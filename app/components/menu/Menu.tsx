import React from 'react'

const Menu = () => {
  return (
    <div className='flex flex-row justify-center space-x-8 items-center'>
        <div className='bg-clip-text cursor-pointer text-sky-900 text-center font-semibold'>Inicio</div>
        <div className='bg-clip-text cursor-pointer text-sky-900 text-center font-semibold'>Servicios</div>
        <div className='bg-clip-text cursor-pointer text-sky-900 text-center font-semibold'>Quienes Somos</div>
        <div className='bg-clip-text cursor-pointer text-sky-900 text-center font-semibold'>Portafolio</div>
    </div>
  )
}

export default Menu