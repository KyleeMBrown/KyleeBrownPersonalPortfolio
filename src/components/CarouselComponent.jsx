import React, { useRef } from 'react';


function CarouselComponent({children}) {
    const carouselComp = useRef()


    const handleLeft = () => {
        if(window.innerWidth > 500){
          carouselComp.current.scrollLeft -= 800
        }else{
          carouselComp.current.scrollLeft -=  800
        }
       
      }
      const handleRight = () => {
        if(window.innerWidth > 500){
          carouselComp.current.scrollLeft += 800
        }else{
          carouselComp.current.scrollLeft += 900
        }
      }

  return (
    <>
        <div ref={carouselComp} class="w-full h-full pt-1 pb-0 flex justify-center bg-gradient-to-b from-pink-950  to-pink-800 scroll-smooth  overflow-x-auto overflow-y-hidden p-0 whitespace-nowrap no-scrollbar snap-x  snap-mandatory">
            <div onClick={handleRight} class=" absolute bottom-0 rotate-180 ml-8 bg-gradient-to-r from-black hover:to-black hover:cursor-pointer rounded-bl-[20px]  rounded-tl-[20px] w-[3%]">
                <h1  class="text-[25px]  text-white text-center rotate-[270deg]"> ^ </h1>
            </div>
            <div class="w-full  h-full">
            {children}
            </div>
           
            <div onClick={handleLeft} class="absolute bottom-0 mr-8  bg-gradient-to-r from-black hover:to-black hover:cursor-pointer rounded-bl-[20px]  rounded-tl-[20px] w-[3%]">
                <h1  class=" text-[25px]  text-white text-center rotate-[-90deg]"> ^ </h1>
            </div>
            
           

            
        </div>

    </>
    
  )
}

export default CarouselComponent