import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Typography,Stack} from '@mui/material';
import img1 from "../back.jpg"
import img2 from "../download.jpeg"
import img3 from "../front.jpeg"

function Services() {
  return (
    <div>
      <div >
      <h1 style={{textAlign:"center",color:"#e67721",fontSize:"49px"}}> Services</h1><hr></hr>

      </div>
  <div style={{ display: 'flex', justifyContent: 'center',padding:"123px" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', gap: '20px'}}> {/* Added gap property */}
      <Stack direction={{xs:"column",md:'row'}}  spacing={{xs:2,md:4}}>
      <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            sx={{ height: 240 }}
            image={img1}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Backend
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            sx={{ height: 240 }}
            image={img2}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Full-Stack
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            sx={{ height: 240 }}
            image={img3}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Front-End
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Stack>
    
      </div>
    </div>
    </div>
  
  );
}

export default Services;
