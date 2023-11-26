import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";


export default function Tech() {

   function aboutMeText() {
      return <>
         <p><span className={Style.pink}>mdhusainthekiya $</span> cat about </p>
         <p><span className={Style.pink}>about <span className={Style.green}>(main)</span> $ </span>
            Hello! I'm Md Husain Thekiya, I am software developer working on building
            large scale web applications using NodeJS and ReactJS.
         </p>
         <p>I have stared my journy of software development since March 2022.
         </p>
      </>;
   }

   function skillsText() {
      return <>
         <p><span className={Style.pink}>mdhusainthekiya $</span> cd skills</p>
         <p><span className={Style.pink}>skills
         <span className={Style.green}>(main)</span> $</span> ls <span className={Style.green}>./Programming</span></p>
         <ul className={Style.skills}>
            <li>Javascript</li>
            <li>Php</li>
            <li>Lua</li>
            <li>Golang (basic)</li>
            <li>HTML && Tailwind CSS</li>
            <li>Core Java (basic)</li>
         </ul>
         <p><span className={Style.pink}>skills
         <span className={Style.green}>(main)</span> $</span> ls <span className={Style.green}>./Frameworks</span></p>
         <ul className={Style.skills}>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>Restify</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>PHP Codeigniter</li>
         </ul>
         <p><span className={Style.pink}>skills
         <span className={Style.green}>(main)</span> $</span> ls <span className={Style.green}>./Databases</span></p>
         <ul className={Style.skills}>
         <li>Mysql</li>
         <li>MongoDB (NoSql)</li>
         <li>Redis</li>
         <li>Elasticsearch (basics)</li>
         </ul>
         <p><span className={Style.pink}>skills
         <span className={Style.green}>(main)</span> $</span> ls <span className={Style.green}>./Tech</span></p>
         <ul className={Style.skills}>
         <li>kafka.js</li>
         <li>kafka connect</li>
         <li>dabezium</li>
         <li>RabbitMQ</li>
         <li>webSocket</li>
         <li>socket.io</li>
         <li>REST APIs</li></ul>
         <p><span className={Style.pink}>skills
         <span className={Style.green}>(main)</span> $</span> ls <span className={Style.green}>./Devops</span></p>
         <ul className={Style.skills}>
         <li>GIT</li>
         <li>Linux</li>
         <li>Docker</li>
         <li>Shell script</li>
         <li>SFTP</li></ul>
         <p><span className={Style.pink}>skills
         <span className={Style.green}>(main)</span> $</span> ls <span className={Style.green}>./Others</span></p>
         <ul className={Style.skills}>
         <li>Good communication</li>
         <li>Critical thinking</li>
         <li>Team collaboration</li>
         <li>Multitasking</li>
         <li>Problem Solving</li></ul>
      </>;
   }

   return (
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
         <Terminal text={aboutMeText()}/>
         <Terminal text={skillsText()}/>
      </Box>
   )
}