import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts");
      // console.log(res.data);
      setPosts(res.data);
    }
    fetchPost();
  },[]);


  return (
    <div className="posts">
        <Container>
            {posts.map(post => (
              <Post photo={post.photo} title={post.title} description={post.description} time={post.createAt} id={post._id}/>
            ))}
        </Container>
    </div>
  )
}

export default Posts