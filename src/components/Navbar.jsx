import {React} from "react";
import {NavHashLink} from "react-router-hash-link";
import { motion } from "framer-motion";
import ChangeAvatar from "./ChangeAvatar";
import { useEffect, useState } from "react";




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
     
  

    
     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

     useEffect(() => {
       const handleResize = () => {
         setWindowWidth(window.innerWidth);
       };

       window.addEventListener('resize', handleResize);

       return () => {
         window.removeEventListener('resize', handleResize);
       };
     }, []);

    return(
        <>
        <motion.nav class=" flex items-center p-4 pb-1 pt-6 justify-between ">
            <ul class=" justify-between items-center w-[60%] flex text-white text-[15px] max-[760px]:text-[12px] max-[760px]:gap-3 ">
                <motion.li whileHover={{ scale:1.05}} transition={{type:"spring"}} class="max-[760px]:text-[12px] font-curly text-[20px] text-center font-light bg-gradient-to-r from-pink-800 to-pink-700 p-[12px] rounded-[28px] shadow-lg ">Aspiring SWE</motion.li>
            <NavHashLink class="active:text-gray-600" smooth to="/" ><img src="/Icons/icons8-home-48 (1).png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class="inline-block">Home</li></NavHashLink>  
              <NavHashLink smooth to="/About" ><img src="/Icons/icons8-about-48.png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class="inline-block">About</li></NavHashLink>  
              <NavHashLink smooth to="/Education" ><img src="/Icons/icons8-education-50.png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class='inline-block'>Education</li></NavHashLink>  
              <NavHashLink smooth to="/Projects" ><img src="/Icons/icons8-projects-50.png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class='inline-block' >Projects</li></NavHashLink>
              <NavHashLink smooth to="/Skills" ><img src="/Icons/icons8-skills-50.png" class="inline-block w-5 mr-2 mb-1" alt="" /><li class='inline-block' >Skills</li></NavHashLink>
            </ul>
            <div class="flex items-center z-[2]">
                <h1 class="text-white max-[760px]:text-[12px] max-[760px]:pr-2 pr-6">Profile</h1>
                <motion.img onMouseEnter={handleHover} whileHover={{scale:1.05, rotate:90}} src={source} alt="" class="bg-white w-[65px] hover:cursor-pointer max-[760px]:w-[40px] max-[760px]:h-[40px] h-[65px] rounded-[50px] "/>
            </div>
           {windowWidth > 760 ?
           <ChangeAvatar proDis={profileDisplay} tagg={'rowOne'} handleprofile={handleprofile} display={avatarDisplay} words={display} changeAvatar={changeAvatar} leaveFunc={handleLeave} width={width} height={height}></ChangeAvatar>
           : null
           }
        </motion.nav>
       
        </>
    )
}

export default NavBar