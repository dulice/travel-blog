import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Post from './Post'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { formVariant } from '../styles/animation'
const Hero = () => {

  return (
    <div>
        <Box className="hero" sx={{
            display: 'flex',
            width: '100%',
            height: 'calc(100vh)',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <Container>
                <Grid container>
                    <Grid item xs={10} md={6}>
                        <motion.div
                            variants={formVariant}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <Typography variant="h4" mb={3}>Never Stop Exploring the World</Typography>
                            <Typography variant="p" display="inline-block" mb={3} color="#ccc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur totam sint odio delectus voluptas, voluptatibus molestias facere quod cumque quidem culpa aspernatur dignissimos fugit veniam hic nemo maxime. Sapiente, officia.
                            </Typography>
                            <Button variant="contained" endIcon={<BsArrowRight />} >Explore </Button>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>     
        </Box>
    </div>
  )
}

export default Hero;