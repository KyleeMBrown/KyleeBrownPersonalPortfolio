import React, { useRef } from 'react';


function CarouselComponent(prop) {
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
       <div  class="w-full flex ">
            <div onClick={handleLeft} class="flex  items-center  justify-center rotate-180 bg-gradient-to-r from-black hover:to-black hover:cursor-pointer rounded-bl-[20px]  rounded-tl-[20px] w-[3%]">
                <h1  class="text-[25px]  text-white text-center rotate-[90deg]"> ^ </h1>
            </div>
            <div ref={carouselComp}  class="w-full  h-full scroll-smooth  overflow-x-auto overflow-y-hidden  whitespace-nowrap no-scrollbar snap-x snap-mandatory">
              {prop.children}
            </div>
           
            <div onClick={handleRight} class=" flex  items-center  justify-center bg-gradient-to-r from-black hover:to-black hover:cursor-pointer rounded-bl-[20px]  rounded-tl-[20px] w-[3%]">
                <h1  class=" text-[25px]  text-white text-center rotate-[90deg]"> ^ </h1>
            </div>
        
        </div>

   
    
  )
}

export default CarouselComponent