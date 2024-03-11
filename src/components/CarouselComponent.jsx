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
        <div ref={carouselComp} class="w-full h-full scroll-smooth  overflow-x-auto overflow-y-hidden p-0 whitespace-nowrap no-scrollbar snap-x  snap-mandatory">
            <div onClick={handleLeft} class=" absolute rotate-180 items-center justify-center  h-[29%]  bg-gradient-to-r from-black hover:to-black hover:cursor-pointer rounded-bl-[20px]  rounded-tl-[20px] w-[3%]">
                <h1  class="text-[25px] mt-[88px] text-white text-center rotate-90"> ^ </h1>
            </div>
            <div onClick={handleRight} class="absolute right-0  h-[29%] bg-gradient-to-r from-black hover:to-black hover:cursor-pointer rounded-bl-[20px]  rounded-tl-[20px] w-[3%]">
                <h1  class=" text-[25px] mt-[90px] text-white text-center rotate-90"> ^ </h1>
            </div>

            {children}

            
        </div>

    </>
    
  )
}

export default CarouselComponent