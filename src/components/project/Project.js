import React from 'react';
import kesta from "../../img/kesta.png";
import kestaAdmin from "../../img/kestaAdmin.png";
import heartbeat from "../../img/heartbeat.png";
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";

const projects = [
    {
        image: heartbeat,
        title: "Heartbeat (timer-service for scalable microservices)",
        live : "https://hub.docker.com/r/mdhusainthekiya/heartbeat",
        source : "https://github.com/MdHusainThekiya/heartBeat"
    },
    {
        image: kesta,
        live: "https://kesta.in/",
        title: "Kesta.in (E-Comm) [nextJS, nodeJS, mongoDB, razorPay, shipRocket]"
    },
    {
        image: kestaAdmin,
        title: "Kesta.in Admin dashboard (E-Comm) [reactJS, nodeJS, mongoDB]"
    },
]

export default function Project() {
    return (
        <Box>
            <Grid marginTop={"2rem"} container display={'flex'} justifyContent={'center'}>
                {projects.map((project, index) => (
                   <Grid item xs={12} md={6} marginTop={"1rem"} marginBottom={"4rem"} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};