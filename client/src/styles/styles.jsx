import styled from 'styled-components'
import { createTheme } from '@mui/material/styles';
import { Link, NavLink } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'
import img from "../images/login.svg";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#41a19b",
      light: '#5bd8d0',
      dark: '#34b4ac',
      contrastText: '#eee',
    }
  },
});

export const Foot = styled.div`
    width: 100%;
    background-color: #eee;
    padding: 1rem;
    margin-top: 5rem;
`

export const Flex = styled.div`
    display: flex;
`

export const AboutCard = styled.div`
    margin-top: 5rem;
    min-height: 100vh;
    position: relative;
    img {
        width: 100%;
    }
    .aboutus {
        width: 30%;
        position: absolute;
        top: 20%;
        left: 5rem;
        transition: (-50%, -50%);
        color: white;
    }
    .who-are-we {
        margin: auto;
        width: 300px;
        margin-top: -5rem;
    }
    .why-choose-us {
        margin: auto;
        width: 300px;
        margin-top: 5rem;
    }
     @media (max-width: 768px) {
        .aboutus{
            display: none;
        }
    }
`

export const NavC = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #eee;
    padding: 1rem;
    z-index: 1000;
`

export const LinkN = styled(NavLink)`
    margin: 0.5rem 1rem;
    text-decoration: none;
    color: black;
    &.active, :hover {
        color: #49beb7;
        border-bottom: 1px solid #49beb7;
    }
`

export const LinkScroll = styled(LinkS)`
    margin: 0.5rem 1rem;
    text-decoration: none;
    color: black;
    cursor: pointer;
    &.active, :hover {
        color: #49beb7;
        border-bottom: 1px solid #49beb7;
    }
`

export const CardPost = styled.div`
    &:nth-child(2) {
        flex-direction: row-reverse;
    }
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
    .postImg {
        width: 40%;
        object-fit: center;
    }
    .postInfo {
        width: 40%;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        .postImg {
        width: 100%;
        object-fit: center;
    }
    .postInfo {
        width: 100%;
    }
    }
`

export const ContentContainer = styled.div`
  background: rgba(0, 0, 0, 0.7) url('https://s3-prod.chicagobusiness.com/styles/1200x630/s3/Screen%20Shot%202020-03-09%20at%203.08.18%20PM.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
  min-height: 100vh;
  width: 100%;
  padding: 1rem;
  margin-top: 3rem;
`

export const ContactCard = styled.div`
    margin: auto;
   display: flex;
    justify-content: center;
    background-color: white;
    padding: 1rem;
    width: 50%;
    height: 350px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    .MuiButton-root {
        dispaly: block;
        width: 40%;
        margin: .5rem;
    }
    img {
        width: 100%;
        margin-top: 3rem;
    }
`
export const ContactIcon = styled.div`
    margin: 2rem;
    display: flex;
    .info {
        width: 50%;
        color: white;
    }
    a{
        text-decoration: none;
        color: #49beb7;
    }
    @media (max-width: 768px) {
        justify-content: center;
  }
`

export const LoginCard = styled.div`
    background-image: url(${img});
    max-width: 700px;
    padding: 1rem;
    background-position: right center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 400px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    .MuiButton-root {
        dispaly: block;
        width: 60%;
        margin: .5rem;
    }
    img {
        width: 100%;
        margin-top: 3rem;
    }
`

export const RegisterCard = styled.div`
    background-image: url(${img});
    max-width: 700px;
    padding: 1rem;
    background-position: right center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 410px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    .MuiButton-root {
        dispaly: block;
        width: 60%;
        margin: .5rem;
    }
    img {
        width: 100%;
        margin-top: 3rem;
    }
`

export const SinglePostCard = styled.div`
    img {
        margin-top: 5rem;
        width: 100%;
        height: 400px;
        object-fit: cover;
        object-position: center;
        border-radius: 15px;
    }
    span.patrick-font {
        color: #49beb7;
    }
    .singlePostInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem;
    }
    .avator {
        display: flex;
    }
    input, textarea, .file {
        width: 97%;
        padding: 1rem;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        border: none;
        border: 1px solid #49beb7;
        border-radius: 10px;
        outline: none;
        font-family: inherit;
    }
    textarea {
        height: 200px;
    }
`

export const CustomForm = styled.form`
    margin-top: 3rem;
    width: 100%;
    input, textarea, .file {
        width: 97%;
        padding: 1rem;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        border: none;
        border: 1px solid #49beb7;
        border-radius: 10px;
        outline: none;
        font-family: inherit;
    }
    textarea {
        height: 200px;
    }
    .MuiButton-root {
        display: flex;
        margin: auto;
        margin-right: 0;
    }
`


 export const SettingForm = styled.form`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .img-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  .MuiAvatar-root {
    margin: 1rem;
  }
    label{
      font-size: 1rem;
      display: inline-block;
      width: 150px;
    }
    input {
      width: 70%;
        padding: 1rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        border: none;
        border: 1px solid #49beb7;
        border-radius: 10px;
        outline: none;
        font-family: inherit;
    }
    .MuiButton-root {
        display: flex;
        margin: auto;
    }
`

export const SmallNav = styled.div`
    position: absolute;
    top: 1rem;
    background: #eee;
    width: 300px;
    right: 0;
    padding: 1rem;
    border-radius: 5px;
    .main-nav {
        display: flex;
        flex-direction: column;
       a {
           margin-bottom: 1rem;
       }
    }
     
`