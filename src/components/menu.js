import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {IconButton,Link} from '@mui/material';

import { NavLink} from "react-router-dom";


export default function Menu() {
  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} style={{ color: 'white' }}>
          Home
        </Typography>
        <Typography sx={{ flexGrow: 1 }} style={{ color: 'white' }}>
         Home
        </Typography>
        <Typography sx={{ flexGrow: 1 }} style={{ color: 'black' }}>

          <Link
  href="#About"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
  style={{color:"black",textDecoration:"none",fontSize:"22px"}}
>          About
</Link>
        </Typography>
        <Typography sx={{ flexGrow: 1 }} style={{ color: 'black' }}>
          <Link
          
  href="#Services"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
  style={{color:"black",textDecoration:"none",fontSize:"22px"}}
>     Services
</Link>
        </Typography>
        <Typography sx={{ flexGrow: 1 }} style={{ color: 'black' }}>
          <Link
  href="#Contact"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
  style={{color:"black",textDecoration:"none",fontSize:"22px"}}
> Contact
</Link>
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
