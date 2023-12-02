import React, {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import Tech from "./tech/Tech";
import Resume from "./resume/Resume";
import Project from "./project/Project";
import {Route, Routes, useLocation} from "react-router-dom";
import {v4} from "uuid";
import {Box, Grid} from "@mui/material";


export default function BaseLayout() {
   let location = useLocation()

   let [darkMode, setDarkMode] = useState(false);
   let [viewsCount, setViewsCount] = useState(0);
   let [loading, setLoading] = useState(true);
   let [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

   useEffect(() => {

      const {
         platform,
         language,
         userAgent,
         userAgentData,
      } = window.navigator

      if (!window.localStorage.getItem('uniqueUserToken')) {
         window.localStorage.setItem('uniqueUserToken', v4())
      }

      fetch('https://news-app-api-mdhusainthekiya.vercel.app/portfolioApp/getUpdatedViews?' +  new URLSearchParams({
         platform,
         language,
         userAgent,
         userAgentData : JSON.stringify(userAgentData),
         uniqueUserToken : window.localStorage.getItem('uniqueUserToken')
      }))
         .then((res) => res.json())
         .then((result) => {
            if (result && result.viewsCount) {
               setViewsCount(result.viewsCount);
            }
         })
         .catch((error) => {
            console.log(`[${__filename}]::error::`, typeof(error), error);
         })
         .finally(() => {
            setLoading(!loading);
         })

   }, [setActive, setLoading])

   function handleClick() {
      setDarkMode(!darkMode);
   }

   let updatedProps = {
      darkMode,
      active,
      setActive,
      handleClick,
      location,
      loading,
      setLoading,
      viewsCount,
      setViewsCount,
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar {...updatedProps}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home {...updatedProps}/>}/>
                  <Route exact path={'/tech'} element={<Tech {...updatedProps}/>}/>
                  <Route exact path={'/project'} element={<Project {...updatedProps}/>}/>
                  <Route exact path={'/resume'} element={<Resume {...updatedProps}/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>Made with &hearts; by Md Husain Thekiya</p>
                  <p>&copy; 2023-24</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

