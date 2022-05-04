import React from 'react'
import { Container, Typography, Grid } from '@mui/material'
import { AboutCard } from '../styles/styles'
import aboutImg from '../images/about.svg'
import AOS from 'aos'

AOS.init();

const About = () => {
  return (
    <AboutCard className="about">
        <img src={aboutImg} alt="" />
        <Container>
            <div className="aboutus" data-aos-duration="500" data-aos="fade-right">
                <Typography variant="h4" mb={5}>About Us</Typography>
                <Typography variant="body2" color="#aaa" lineHeight={2}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In alias consequatur provident praesentium quo dolorum quia explicabo modi eum? 
                </Typography>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className="who-are-we" data-aos-duration="500" data-aos="fade-right">
                        <Typography variant="h4" mb={3}>Who We Are?</Typography>
                        <Typography variant="body2" lineHeight={2}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In alias consequatur provident praesentium quo dolorum quia explicabo modi eum? Aperiam, sit reprehenderit. Quaerat at earum optio, ullam nisi ducimus sunt.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="why-choose-us" data-aos-duration="500" data-aos="fade-left">
                        <Typography variant="h4" mb={3}>Why Choose Us?</Typography>
                        <Typography variant="body2" lineHeight={2}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In alias consequatur provident praesentium quo dolorum quia explicabo modi eum? Aperiam, sit reprehenderit. Quaerat at earum optio, ullam nisi ducimus sunt.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </AboutCard>
  )
}


export default About