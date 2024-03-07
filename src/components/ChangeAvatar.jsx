
import React from 'react';
import {motion} from  'framer-motion'

function ChangeAvatar(prop) {
    

  return (
    
         <div onMouseLeave={prop.leaveFunc} onClick={prop.handleprofile} style={{ display:prop.display, height: prop.height, width:prop.width}} class="absolute drop-shadow-xl overflow-hidden transition-all duration-500 right-0 w-[12.5%] bg-gradient-to-t from-pink-100 to-pink-950 rounded-bl-[15px] top-0 z-[1]">
            <motion.div whileInView={{opacity:[0,1]}} transition={{duration:1, delay:0.5}} style={{display: prop.proDis}} class="  mt-[35%] justify-evenly flex-row">
                <motion.img  name={prop.tagg} whileHover={{ scale:1.02}}   src="public/Images/Tom and Jerry.jpeg" class="bg-red-400 w-[70px] h-[70px] drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer rounded-[100%]"></motion.img>
                <motion.img name={prop.tagg} whileHover={{ scale:1.02}} src="public/Images/liloo.jpeg" class="bg-red-400 w-[70px] h-[70px] drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer rounded-[100%]"></motion.img>
                <motion.img name={prop.tagg} whileHover={{ scale:1.02}} src="public/Images/yuhh.jpeg" class="bg-red-400 w-[70px] h-[70px] drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer rounded-[100%]"></motion.img>
            </motion.div>
            <motion.div whileInView={{opacity:[0,1]}} transition={{duration:1, delay:0.5}} style={{display: prop.proDis}} class=" flex  mt-[5%] justify-evenly flex-row">
                <motion.img name={prop.tagg} whileHover={{ scale:1.02}} src="public/Images/CandaceFacemask.jpeg" class="bg-red-400 w-[70px] h-[70px] drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer rounded-[100%]"></motion.img>
                <motion.img name={prop.tagg} whileHover={{ scale:1.02}} src="public/Images/Winnie.jpeg" class="bg-red-400 w-[70px] h-[70px] drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer rounded-[100%]"></motion.img>
                <motion.img name={prop.tagg} whileHover={{ scale:1.02}} src="public/Images/ScoobShaggy.jpeg" class="bg-red-400 w-[70px] h-[70px] drop-shadow-xl hover:drop-shadow-2xl hover:cursor-pointer rounded-[100%]"></motion.img>
            </motion.div>
            <h1  onClick={prop.changeAvatar} style={{ visibility:prop.words}} class="mt-[60%] text-[15px] underline text-center text-pink-900 hover:cursor-pointer active:text-pink-600">Change Avatar</h1>
         </div>  
    
   
  )
}

export default ChangeAvatar