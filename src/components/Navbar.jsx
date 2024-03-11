import React from "react";
import {NavHashLink} from "react-router-hash-link";
import { motion } from "framer-motion";
import ChangeAvatar from "./ChangeAvatar";
import { useState } from "react";




const NavBar = () => {
    const [avatarDisplay, setAvatarDisplay]= useState('none');
    const [height, setHeight] = useState('18%');
    const [width, setWidth] = useState('12.5%');
    const [display, setDisplay]= useState('');
    const [source, setSource]= useState('/Images/Tom and Jerry.jpeg');
    const [profileDisplay, setProfiledisplay]= useState('none')

    const handleHover = () => {
        setAvatarDisplay('inline')
    }
    const handleLeave = () => {
        setAvatarDisplay('none')
        setHeight('18%')
        setWidth('12.5%')
        setDisplay('visible')
        setProfiledisplay('none')
     }

     const handleprofile = (event) => {
       if (event.target.getAttribute('name') === 'rowOne'){
        setSource(event.target.src)
       }
       
        }
       
      
  

     const changeAvatar = () => {
        setHeight('40%')
        setWidth('25%')
        setDisplay('hidden')

        setProfiledisplay('flex')
     }
     
  

    
    

    return(
        <>
        <motion.nav class=" flex items-center p-4 pb-2 pt-6 justify-between ">
            <ul class=" justify-between items-center w-[60%] flex text-white text-[15px] ">
                <motion.li whileHover={{ scale:1.05}} transition={{type:"spring"}} class=" font-curly text-[20px] text-center font-light bg-gradient-to-r from-pink-800 to-pink-700 p-[12px] rounded-[28px] shadow-lg ">Aspiring SWE</motion.li>
            <NavHashLink class="active:text-gray-600" smooth to="/" ><img src="/Icons/icons8-home-48 (1).png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class="inline-block">Home</li></NavHashLink>  
              <NavHashLink smooth to="/About" ><img src="/Icons/icons8-about-48.png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class="inline-block">About</li></NavHashLink>  
              <NavHashLink smooth to="/Education" ><img src="/Icons/icons8-education-50.png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class='inline-block'>Education</li></NavHashLink>  
              <NavHashLink smooth to="/Projects" ><img src="/Icons/icons8-projects-50.png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class='inline-block' >Projects</li></NavHashLink>
              <NavHashLink smooth to="/Skills" ><img src="/Icons/icons8-skills-50.png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class='inline-block' >Skills</li></NavHashLink>
            </ul>
            <div class="flex items-center z-[2]">
                <h1 class="text-white pr-6">Profile</h1>
                <motion.img onMouseEnter={handleHover} whileHover={{scale:1.05, rotate:90}} src={source} alt="" class="bg-white w-[65px] hover:cursor-pointer h-[65px] rounded-[50px] "/>
            </div>
           <ChangeAvatar proDis={profileDisplay} tagg={'rowOne'} handleprofile={handleprofile} display={avatarDisplay} words={display} changeAvatar={changeAvatar} leaveFunc={handleLeave} width={width} height={height}>

           </ChangeAvatar>
        </motion.nav>
       
        </>
    )
}

export default NavBar