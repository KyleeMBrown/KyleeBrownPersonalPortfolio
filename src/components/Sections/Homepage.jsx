import React from 'react';
import { useRef } from 'react';
import {motion} from 'framer-motion';
import CarouselComponent from '../CarouselComponent';
import {NavHashLink} from "react-router-hash-link";

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
<div class="w-full h-[70.5%]">
<motion.div animate={{opacity:[0,1]}} transition={{duration:3, delay:1, repeat:0}} class= "w-full flex justify-center h-[85.5%]" > 
    <div onClick={handleLeft} class="flex rotate-180 items-center justify-center  h-[48%] mt-1 bg-gradient-to-r from-black hover:to-black hover:cursor-pointer rounded-bl-[20px]  rounded-tl-[20px] w-[3%]">
            <h1  class="text-[25px] text-white text-center rotate-90"> ^ </h1>
        </div>

    <div ref={carousel} class="w-[97%] scroll-smooth  overflow-x-auto overflow-y-hidden p-0 whitespace-nowrap h-[48%] no-scrollbar snap-x snap-mandatory  ">
       
        <div class="w-[98%] snap-center inline-block mr-3 mt-4 h-[93%] bg-[url('public/Images/WTMWBanner.png')] bg-contain bg-[#FFEAF7] bg-no-repeat bg-center rounded-[18px] shadow-[inset_0_0_0px_1px_#000000]"></div>
        <div class="w-[98%] bg-[url('public/Images/RecommendedMovie/BigHero6.jpeg')] bg-contain  bg-center bg-red-400 snap-center mr-3 inline-block mt-4 h-[93%] rounded-[18px] shadow-[inset_0_0_15px_5px_#000000]">
          <div class="rounded-tl-[18px] rounded-bl-[18px] w-[30%] bg-[url('public/Images/RecommendedMovie/CoffeePlease.png')] bg-cover bg-center h-full shadow-[inset_0_0_10px_5px_#000000]">

          </div>
        </div>
        <div class="w-[98%] bg-[url('public/Images/snhu_logo_new.png')] bg-contain bg-no-repeat bg-center bg-white snap-center bg mr-3 inline-block mt-4 h-[93%] rounded-[18px] shadow-[inset_0_0_0px_1px_#000000]"></div>

        

        <div class="w-[98%] bg-[url('public/Images/createdbyBanner.png')] bg-contain bg-no-repeat bg-center bg-black snap-center bg mr-3 inline-block mt-4 h-[93%] rounded-[18px] shadow-[inset_0_0_15px_5px_#000000]"></div>
        
        
    </div>
        <div onClick={handleRight} class="flex items-center justify-center  h-[48%] mt-1 bg-gradient-to-r from-black hover:to-black hover:cursor-pointer rounded-bl-[20px]  rounded-tl-[20px] w-[3%]">
            <h1  class="text-[25px] text-white text-center rotate-90"> ^ </h1>
        </div>
    </motion.div>
    <div class=" absolute  w-full  bottom-[33%]">
      <div class=" justify-center text-white flex gap-6">
     <motion.div whileHover={{ scale:1.08, borderColor: 'white'}} transition={{duration:0.4, type:"ease"}} class=" hover:cursor-pointer w-[255px] hover:border-[5px] rounded-[20px] h-[160px]  flex items-center justify-center bg-pink-800 hover:bg-pink-200 hover:text-pink-800 transition-colors drop-shadow-2xl">
          <h1 class="  text-[25px] ">RESUME</h1>
        </motion.div>
        <NavHashLink path to ='/About'><motion.div whileHover={{ scale:1.08}} transition={{duration:0.4, type:"ease"}} class="hover:cursor-pointer w-[255px] h-[160px] bg-pink-800 hover:bg-pink-300 hover:text-pink-800 hover:border-[5px] rounded-[20px] flex items-center justify-center drop-shadow-2xl">
          <h1 class="  text-[25px] ">ABOUT</h1>
        </motion.div></NavHashLink>
        <motion.div whileHover={{ scale:1.08}} transition={{duration:0.4, type:"ease"}} class="hover:cursor-pointer w-[255px] hover:border-[5px] rounded-[20px] flex items-center justify-center h-[160px]  bg-pink-800 hover:bg-pink-400 hover:text-pink-800 drop-shadow-2xl">
        <h1 class="  text-[25px] ">EDUCATION</h1>
        </motion.div>
        <motion.div whileHover={{ scale:1.08}} transition={{duration:0.4, type:"ease"}} class="hover:cursor-pointer w-[255px] h-[160px]  bg-pink-800 hover:bg-pink-500 hover:border-[5px] rounded-[20px] flex items-center justify-center drop-shadow-2xl">
        <h1 class="  text-[25px] ">PROJECTS</h1>
        </motion.div>
        <motion.div whileHover={{ scale:1.08}} transition={{duration:0.4, type:"ease"}} class="hover:cursor-pointer w-[255px] h-[160px]  bg-pink-800 hover:bg-pink-600  hover:border-[5px] rounded-[20px] flex items-center justify-center drop-shadow-2xl">
        <h1 class="  text-[25px] ">SKILLS</h1>
        </motion.div>
      </div>
    </div>
    <div class="flex items-center h-[41%] mt-[-42px]  ">
      <CarouselComponent>
        <a href="https://www.linkedin.com/in/kylee-brown-7167b9274/" target='_blank' ><div class="h-full w-[28%] snap-center bg-[url('public/Images/default-share.png')] bg-cover shadow-2xl hover:cursor-pointer hover:border-[3px] border-blue-400 bg-center mr-2 ml-2 inline-block rounded-[15px] "></div></a>
        <a href="https://snhu.joinhandshake.com/stu/users/44118380" target='_blank'><div class="h-full w-[28%] snap-center bg-[url('public/Images/handshakeLogo.webp')] bg-cover shadow-2xl hover:cursor-pointer hover:border-[3px]  bg-center mr-2 ml-2 inline-block rounded-[15px] "></div></a>
        <a href="https://github.com/KyleeMBrown" target='_blank'><div class="h-full w-[28%] snap-center bg-[url('public/Images/github-logo.png')] bg-cover bg-center mr-2 ml-2 inline-block rounded-[15px] shadow-2xl hover:cursor-pointer hover:border-[3px] border-gray-500  "></div></a>
        <div class="h-full w-[28%] snap-center mr-2 ml-2 inline-block rounded-[15px] shadow-2xl hover:cursor-pointer hover:border-[3px]  ">

        </div>
      </CarouselComponent>
    </div>
      
      
</div>
    
    
</>
    
  )
}

export default Homepage