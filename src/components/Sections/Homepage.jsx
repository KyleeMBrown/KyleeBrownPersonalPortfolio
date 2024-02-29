import React from 'react';
import { useRef } from 'react';
import {motion} from 'framer-motion'

function Homepage() {
const carousel = useRef()

    const handleLeft = () => {
        if(window.innerWidth > 500){
          carousel.current.scrollLeft -= 800
        }else{
          carousel.current.scrollLeft -=  800
        }
       
      }

      const handleRight = () => {
        if(window.innerWidth > 500){
          carousel.current.scrollLeft += 800
        }else{
          carousel.current.scrollLeft += 900
        }
      }

  return (
<>
    <motion.div animate={{opacity:[0,1]}} transition={{duration:6, delay:2}} class= "w-full flex justify-center h-[85.5%]" > 
    <div onClick={handleLeft} class="flex rotate-180 items-center justify-center  h-[48%] mt-1 bg-gradient-to-r from-black hover:to-black hover:cursor-pointer rounded-bl-[20px]  rounded-tl-[20px] w-[3%]">
            <h1  class="text-[25px] text-white text-center rotate-90"> ^ </h1>
        </div>
    <div ref={carousel} class="w-[97%] scroll-smooth  overflow-x-auto overflow-y-visible p-0 whitespace-nowrap h-[48%] no-scrollbar snap-x snap-mandatory  ">
        <div class="w-[98%] snap-center bg mr-3 inline-block mt-4 h-[93%] rounded-[18px] shadow-[inset_0_0_15px_5px_#000000]"></div>
        <div class="w-[98%] snap-center inline-block mr-3 mt-4 h-[93%] rounded-[18px] shadow-[inset_0_0_15px_1px_#000000]"></div>
        <div class="w-[98%] snap-center bg mr-3 inline-block mt-4 h-[93%] rounded-[18px] shadow-[inset_0_0_15px_5px_#000000]"></div>
        <div class="w-[98%] snap-center inline-block mr-3 mt-4 h-[93%] rounded-[18px] shadow-[inset_0_0_15px_1px_#000000]"></div>
        

        </div>
        <div onClick={handleRight} class="flex items-center justify-center  h-[48%] mt-1 bg-gradient-to-r from-black hover:to-black hover:cursor-pointer rounded-bl-[20px]  rounded-tl-[20px] w-[3%]">
            <h1  class="text-[25px] text-white text-center rotate-90"> ^ </h1>
        </div>
        
    </motion.div>
</>
    
  )
}

export default Homepage