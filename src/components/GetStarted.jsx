import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} sm:w-[500px] w-[300px] h-[70px] bg-color-gradient rounded-full p-[4px] cursor-pointer`}>
      <input placeholder='Email' className='text-[18px] w-[70%] h-[100%] bg-white p-3 rounded-full'>

      </input>

      <div className={`${styles.flexCenter} flex-col bg-primary w-[30%] h-[100%] sm:text-[22px] text-[16px] rounded-full ml-2`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium leading-[23px] mr-2'>
            <span className='text-white'>Join</span> 
          </p>
          <img src={arrowUp} classNam='w-[23px] h-[23px] object-contain'></img>
        </div>

        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium leading-[23px]'>
            <span className='text-white'>Waitlist</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
