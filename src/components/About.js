import React from 'react';
import Menu from './menu';
import pic from "../mainpic.png";
import { NavLink } from "react-router-dom";
import { Card, Stack, Avatar, CardContent, Typography } from '@mui/material';

function About() {
  return (
    <div style={{ padding: '150px', backgroundColor: 'rgb(247, 242, 239)' }}>
      <Card style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "#e67721" }}>

        <Stack direction={{xs:'column',md:'row'}} sx={{p:5}} justifyContent={"center"} alignItems={"center"}>
        <Avatar
            alt="Remy Sharp"
            src={pic}
            sx={{ width: 206, height: 206 }}
          />
          <CardContent style={{ marginLeft: '20px' }}>
            <Typography variant="h5" component="div" style={{color:"white"}}>
              About Me
            </Typography>
            <Typography variant="body2" style={{color:"white"}}>
              As a senior full stack developer, I work with a team of engineers to design, develop, and deploy scalable and reliable web applications that enhance the customer experience and optimize the business operations. I use Spring Boot, SQL, and REST APIs to create backend services and integrate them with frontend frameworks and cloud platforms.
            </Typography>
            <Typography variant="body2" style={{ marginTop: '10px',color:"white" }}>
              I have over three years of experience in full stack development, having previously worked with multiple projects involving Firebase, Jenkins, Java, Selenium, and CSS. I have also obtained two certifications in interfacing devices through Arduino and ICS security with GRFICS, demonstrating my interest and ability in learning new technologies and applying them to real-world scenarios. I am passionate about creating innovative and user-friendly solutions that solve complex problems and deliver value to the stakeholders.
            </Typography>
          </CardContent>
        </Stack>
      </Card>
    </div>
  );
}

export default About;
