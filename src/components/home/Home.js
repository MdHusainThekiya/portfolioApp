import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/programmerChild.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";

const bioBullets = [
   {
      link: "/",
      emoji: "📍",
      text: "based in mumbai, india",
   },
   {
      link: '/tech',
      emoji: "💻",
      text: "Sr.Software Developer working on MERN stack"
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

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} component={'img'} alt={'md husain thekiya'} src={me} width={{xs: '36vh', md: '41vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span className={Style.firstName}>Md Husain Thekiya</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm a software developer.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {bioBullets.map((bio, index) => (
                  <li key={index}>
                     <EmojiBullet link={bio.link} emoji={bio.emoji} text={bio.text}/>
                  </li>
               ))}
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