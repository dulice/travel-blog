import { Typography, Button } from '@mui/material';
import React from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';
import { CardPost } from '../styles/styles';

AOS.init();

const Post = ({ id, photo, title, description, time}) => {
  const PF = "http://localhost:5000/upload/"
  return (
    <CardPost key={id} className="post"  data-aos-duration="500" data-aos="fade-up">
        {photo && <img className="postImg" src={PF+photo} alt="" />}
        <div className="postInfo">
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2" color="text.secondary" mt={2}>{description.length > 250 ? `${description.slice(0, 250)}...` : description}</Typography>
            <Typography variant="body2" mt={2} align="right" color="orange">{time}</Typography>
            <Button variant="contained">
              <Link to={`/posts/${id}`} style={{color: "inherit", textDecoration: "none"}}>Explore</Link>
            </Button>
        </div>
    </CardPost>
  )
}

export default Post