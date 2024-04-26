import React from 'react'
import Menu from './menu'
import { Card, Stack, Avatar, CardContent, Typography } from '@mui/material';
import pic from "../mainpic.png";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from '@mui/icons-material';
function Contact() {
  return (
    <div style={{ padding: '180px', backgroundColor: 'rgb(247, 242, 239)' }}>
<h1 style={{textAlign:"center"}}>Get In Touch</h1>
<p style={{textAlign:"center"}}>I'd love if you reached out to me. Even if it's just to say "Hey!". Don't hesitate! Drop me a line and I’ll get back to you ASAP!</p>
<br/><br/>
<Stack direction={{xs:"column",md:'row'}}  spacing={{xs:2,md:4}} style={{marginLeft:"150px"}}>
  <EmailIcon/>
 sumanth6633@gmail.com
 <LinkedInIcon/>
 https://www.linkedin.com/in/sumanth-rakurthi-446b09215/
 <PhoneIcon/>
 7780569445
  </Stack>
    </div>
  )
}

export default Contact