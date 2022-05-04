import { TextField, Button, Grid, Typography, Container, Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { formVariant, imgVariant } from '../styles/animation';
import { FiMapPin, FiMail } from 'react-icons/fi'
import { BsTelephoneFill } from 'react-icons/bs'
import AOS from 'aos'
import { ContactCard, ContactIcon, ContentContainer } from '../styles/styles';
AOS.init();

const Contact = () => {

  return (
      <ContentContainer className="contact">
        <Container>
            <Typography variant="h4" align="center" mt={5} color="white">Contact us</Typography>
            <Typography variant="body2" align="center" mb={5} color="white">
                Lorem ipsum dolor sit amet, consectetur adip
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <div data-aos-duration="500" data-aos="fade-right">
                        <ContactIcon >
                            <Avatar sx={{bgcolor: "#fff", color: "#000", marginRight: "1rem"}}>
                                <FiMapPin />
                            </Avatar>
                            <div className="info">
                                <a href="https://goo.gl/maps/VZHHHPJ5MpXpS23C8" target="_blank">Address</a>
                                <Typography variant="body2">4201, Myat Lay Street, Taunggyi, Shan State, Myanmar</Typography>
                            </div>
                        </ContactIcon>
                        <ContactIcon>
                            <Avatar sx={{bgcolor: "#fff", color: "#000", marginRight: "1rem"}}>
                                <BsTelephoneFill />
                            </Avatar>
                            <div className="info">
                                <a href="tel:_959767331403" target="_blank">Phone</a>
                                <Typography variant="body2">+959767331403</Typography>
                            </div>
                        </ContactIcon>
                        <ContactIcon>
                            <Avatar sx={{bgcolor: "#fff", color: "#000", marginRight: "1rem"}}>
                                <FiMail/>
                            </Avatar>
                            <div className="info">
                                <a to="mailto:duliceellen600@gmail.com" target="_blank">Email</a>
                                <Typography variant="body2">duliceellen600@gmail.com</Typography>
                            </div>
                        </ContactIcon>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContactCard >
                        <div>
                            <form data-aos-duration="500" data-aos="fade-left"
                                variants={formVariant}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            action="">
                                <Typography variant="h5" m={1}>Send Message</Typography>
                                <TextField label="Your Name" variant="standard"sx={{ m: 1, width: '90%' }}/>
                                <TextField label="Your Email" variant="standard" sx={{ m: 1, width: '90%' }}/>
                                <TextField sx={{ m: 1, width: '90%' }}
                                id="standard-multiline-static"
                                label="Type Your Message"
                                multiline
                                rows={4}
                                variant="standard"
                                />
                                <Button variant="contained">Send</Button>
                            </form>
                        </div>
                    </ContactCard>
                </Grid>
                
            </Grid>
        </Container>
    </ContentContainer>
  )
}

export default Contact