import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom'
import { Container, Typography, Avatar } from '@mui/material'
import { animateScroll as scroll } from 'react-scroll'
import { NavC, LinkN, Flex, LinkScroll } from '../styles/styles'
import styled from 'styled-components';
let user = true;
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
       
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <SmallLink>
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
                </SmallLink>
                { user ? 
                    <div>
                        <Link to="/settings">
                            <Avatar src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt="" style={{marginRight: "1rem"}} />
                        </Link>
                        <Button variant="contained" color="error">
                            <LinkN to="/login" style={{color: "inherit", textDecoration: "none", margin: 0}}>Logout</LinkN>
                        </Button>
                    </div>
                    :
                    <div>                   
                        <Button variant="contained">
                            <LinkN to="/login" style={{color: "inherit", textDecoration: "none"}}>Login</LinkN>
                        </Button>
                        <Button variant="contained" style={{marginLeft: "1rem"}}>
                            <LinkN to="/register" style={{color: "inherit", textDecoration: "none"}}>Singup</LinkN>
                        </Button>
                    </div>
                }
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const SmallLink = styled.div`
    display: flex;
    flex-direction: column;
`