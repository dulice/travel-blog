import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Box, Typography, Avatar, Button, Hidden } from '@mui/material'
import { animateScroll as scroll } from 'react-scroll'
import { NavC, LinkN, Flex, LinkScroll, SmallNav } from '../styles/styles'
import { BiX, BiMenuAltRight } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { navVariant } from '../styles/animation'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/authSlice'

const Header = () => {
    const dispatch = useDispatch();
    const [collapse, setCollapse] = useState(false);
    const PF = "http://localhost:5000/images"

    const user = useSelector(state => state.auth.user);
  return (
    <NavC>
        <Container>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <a onClick={scroll.scrollToTop} className="">
                    <Typography variant="h5" className="logo">Travel</Typography>
                </a>  
                <Hidden mdDown>
                    <div>
                        <LinkScroll activeClass="active" to="posts"spy={true} smooth={true} offset={-50} duration={500} >
                        BLOG
                        </LinkScroll>
                        <LinkScroll activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} >
                        ABOUT
                        </LinkScroll>
                        <LinkScroll activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} >
                        CONTACT
                        </LinkScroll>
                        <LinkN to="/write">WRITE</LinkN>
                    </div>
                    { user ? 
                        <Flex>
                            <Link to="/settings">
                                { user ? 
                                    <Avatar src={PF+user.profile} alt="" style={{marginRight: "1rem"}}/> : 
                                    <Avatar src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt="" style={{marginRight: "1rem"}} />
                                }
                            </Link>
                            <Link to="/login" style={{color: "inherit", textDecoration: "none"}}>
                                <Button variant="contained" color="error">
                                    Logout
                                </Button>
                            </Link>
                        </Flex>
                        :
                        <Flex>                   
                            <LinkN to="/login" style={{color: "inherit", textDecoration: "none"}}>
                                <Button variant="contained">Login</Button>
                            </LinkN>

                            <LinkN to="/register" style={{color: "inherit", textDecoration: "none"}}>
                                <Button variant="contained" style={{marginLeft: "1rem"}}>Singup</Button>
                            </LinkN>
                        </Flex>
                    }
                </Hidden>              
                <Hidden mdUp>
                    { collapse ? <BiX size={36} onClick={() => setCollapse(false)} /> : <BiMenuAltRight size={36} onClick={() => setCollapse(true)}/>}
                    { collapse && (
                        <motion.div
                            variants={navVariant}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <SmallNav>
                                <div className="main-nav">
                                    <LinkScroll onClick={() => setCollapse(false)} activeClass="active" to="posts"spy={true} smooth={true} offset={-50} duration={500} >
                                    BLOG
                                    </LinkScroll>
                                    <LinkScroll onClick={() => setCollapse(false)} activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} >
                                    ABOUT
                                    </LinkScroll>
                                    <LinkScroll onClick={() => setCollapse(false)} activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} >
                                    CONTACT
                                    </LinkScroll>
                                    <LinkN to="/write" onClick={() => setCollapse(false)}>WRITE</LinkN>
                                </div>
                                { user ? 
                                    <div>
                                        <Link onClick={() => setCollapse(false)} to="/settings">
                                            <Avatar src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt="" style={{margin: "1rem"}} />
                                        </Link>
                                        <LinkN onClick={() => setCollapse(false)} to="/login" style={{color: "inherit", textDecoration: "none"}}>
                                            <Button variant="contained" color="error">Logout</Button>
                                        </LinkN>
                                    </div>
                                    :
                                    <div>                   
                                        <LinkN onClick={() => setCollapse(false)} to="/login" style={{color: "inherit", textDecoration: "none"}}>
                                            <Button variant="contained">Login</Button>
                                        </LinkN>
                                        <LinkN onClick={() => setCollapse(false)} to="/register" style={{color: "inherit", textDecoration: "none"}}>
                                            <Button variant="contained" style={{marginLeft: "1rem"}}>Singup</Button>
                                        </LinkN>
                                    </div>}
                            </SmallNav>
                        </motion.div>
                    )}
                </Hidden>        
            </Box>
        </Container>
    </NavC>
  )
}

export default Header