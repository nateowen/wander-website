import React from 'react'
import { discount, robot, star, shield, arrowUp } from '../assets'
import styles from '../styles'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} h-[680px] mb-5`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col text-center xl:px-0 sm:px-16 px-6`}>
        {/* <div className='flex flex-row items-center py-[6px] px-4 bg-secondary-color-gradient rounded-[10px] mb-2 cursor-pointer'>
          <p className={`${styles.paragraph} p-[5px]`}>
            <span className='text-white'>First month free</span>
          </p>
        </div> */}

        <div className='flex flex-col justify-between items-center w-full mb-5'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[70px] leading-[55px]'>
            This is so<br className='sm:block hidden'/> {' '}
            <span className='text-gradient'>much more</span>
            <br className='sm:block hidden'/> {' '}
            than reading a book.
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[500px] mb-5`}>
          Bring your favorite stories to life.
        </p>

        <div className='ss:flex md:mr-4 mr-0'>
            <GetStarted></GetStarted>
        </div>
      </div>

      {/* <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={arrowUp} alt='billing' className='w-[100%] h-[100%] relative z-[5]'></img>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] top-0 bottom-40 white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
      </div> */}
    </section>
  )
}

export default Hero
