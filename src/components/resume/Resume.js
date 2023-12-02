import React, { useEffect } from 'react';
import {Box, IconButton} from "@mui/material";
import tStyle from "./Terminal.module.scss";
import classNames from "classnames";
import Md_Husain_Thekiya from "../../img/Md_Husain_Thekiya.jpg";

const iconClass = "fa fa-circle";


export default function Resume({setActive}) {

   useEffect(() => {
      setActive('resume')
   }, [setActive])

   return (
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
         <Box component={'section'} className={classNames(tStyle.terminal, tStyle.shadowed)}
           width={{xs: '80%', md: '75%'}} borderRadius={'0.5rem'} mb={'4rem'}>
         <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
              fontSize={'1rem'}>
            <div style={{display : 'flex', justifyContent : 'space-between'}}>
               <div>
                  <i className={classNames(iconClass, tStyle.red)}/>
                  <i className={classNames(iconClass, tStyle.amber)}/>
                  <i className={classNames(iconClass, tStyle.green)}/>
               </div>
               <div>
                  <IconButton size="small" sx={{height : "2px"}} onClick={()=>{ window.location.href = "/resume" }}>
                     <i className={classNames("fa fa-download", tStyle.black)}/>
                  </IconButton>
               </div>
            </div>
         </Box>
            <Box py={{xs: '1rem', md: '2rem'}} px={{xs: '2rem', md: '3rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
               sx={{backgroundColor: '#27242f'}} fontSize={'1.5rem'} fontFamily={'Courier New, Courier, monospace'}>
               <img src={Md_Husain_Thekiya}></img>
            </Box>
         </Box>
      </Box>
   )
}