import React, {useEffect, useState} from 'react';
import logo from '../img/ht.png';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Box} from "@mui/material";
import { Link } from 'react-router-dom';

const links = [
   // {
   //    image: logo,
   //    to: '/',
   //    active: 'home'
   // },
   {
      name: 'Home',
      to: '/',
      active: 'home'
   },
   {
      name: 'TechSkill',
      to: '/tech',
      active: 'tech'
   },
   {
      name: 'toggle',
   },
   {
      name: 'Project',
      to: '/project',
      active: 'project'
   },
   {
      name: 'Resume',
      to: '/resume',
      active: 'resume'
   }
]

export default function Navbar({darkMode, handleClick, active, setActive}) {

   return (
      <Box component={'nav'} width={'100%'}>
         <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
              gap={{xs: '2rem', md: '8rem'}}
              textTransform={'lowercase'} fontSize={'1rem'} marginTop={"1rem"} marginBottom={"1rem"}>
            {links.map((link, index) => (
               (link.name === "toggle")
               ?  <li key={index}>
                     <Toggler darkMode={darkMode} handleClick={handleClick}/>
                  </li>
               :  <li className={(link.active === active && !link.image) ? Style.active : ''} key={index}>
                     <Link aria-label={'home page'} to={link.to} onClick={() => setActive(link.active)}>
                        {link.name && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                        {link.image && <img alt={''} src={link.image} style={{maxWidth: '75px'}}/>}
                     </Link>
                  </li>
            ))}
         </Box>
      </Box>
   )
}