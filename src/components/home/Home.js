import React, { useEffect } from 'react';
import Style from './Home.module.scss';
import me from '../../img/programmer.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import { Link } from 'react-router-dom';

const bioBullets = [
   {
      link: "/",
      emoji: "📍",
      text: "based in mumbai, india",
   },
   {
      link: '/tech',
      emoji: "💻",
      text: "Sr.Software Developer working on MERN"
   },
   {
      link: "mailto:hussainthekiya@gmail.com?subject=Let's work on something together!",
      emoji: "✉️",
      text: "let's get in touch!"
   }
];

const socials = [
   {
      link: "https://github.com/MdHusainThekiya",
      icon: "fa fa-github",
      label: 'Github'
   },
   {
      link: "https://in.linkedin.com/in/md-husain-thekiya",
      icon: "fa fa-linkedin",
      label: 'LinkedIn'
   },
   {
      link: "mailto:hussainthekiya@gmail.com",
      icon: "fa fa-envelope",
      label: 'Email'
   },
]

export default function Home({setActive, loading, viewsCount}) {

   useEffect(()=> {
      setActive('home');
   }, [setActive])

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} component={'img'} alt={'md husain thekiya'} src={me} width={{md: '41vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span className={Style.firstName}>Husain Thekiya</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm a software developer.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {bioBullets.map((bio, index) => (
                  <li key={index}>
                     <EmojiBullet link={bio.link} emoji={bio.emoji} text={bio.text}/>
                  </li>
               ))}
               <li key={"uniqueViews"}>
                  <Link to={"/"} rel="noopener noreferrer" style={{fontSize: '1rem', lineHeight: '1.5'}}>
                     <Box component={'span'} aria-label="cheese"
                        role="img"
                        mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{"🔥"}
                     </Box>
                     this portfolio got &nbsp;
                        <span className={loading ? Style.loading : Style.firstName}>{loading ? "🟢" : viewsCount}</span>
                     &nbsp; unique views
                  </Link>
               </li>
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}