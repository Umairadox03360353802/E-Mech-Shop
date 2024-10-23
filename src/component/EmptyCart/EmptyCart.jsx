import React from 'react'
import emptyCart from '../../assets/emptyCart.png'

const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center justify-around m-[15%] py-10'>
        <div className='object-cover w-[250px] top-8 '>
        <img src={emptyCart} alt="" />
        </div>
        <div className='pt-10 '>
            <h2 className='font-bold text-4xl text-center'>Your cart is empty.... </h2>
        </div>
    </div>
  )
}

export default EmptyCart