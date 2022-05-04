import React, { useState } from 'react'
import { Avatar, Button, Container, Typography, Grid, Breadcrumbs, Link } from '@mui/material'
import {FaUser} from 'react-icons/fa'
import { SettingForm } from '../styles/styles'
import { authActions } from '../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const Settings = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const user = useSelector(state => state.auth.user);
  console.log(user);
  const dispatch = useDispatch();
  const PF = "http://localhost:5000/images";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUser = dispatch(authActions.UpdateSuccess({
      username,
      password,
      email,
      dateOfBirth,
      phoneNumber,
    }))
    localStorage.setItem('user', JSON.stringify(updateUser))
    if(file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("filename", filename);
      data.append("file", file);
      updateUser.profile = filename;
      try{
        await axios.post("http://localhost:5000/api/upload", data.payload);
      } catch(err){
        console.log(err.message);
      }
    }
    try {
      await axios.put("http://localhost:5000/api/user/"+ user._id, updateUser);
    } catch (err){
      console.log(err.message);
    }
  }
  return (
    <div>
      <Container>
        <Breadcrumbs mt={3}>
          <Link hover="underline" color="inherit" href="/">
            Home
          </Link>
          <Typography color="primary">Setting</Typography>
        </Breadcrumbs>
        <Grid container mb={3} >
          <Grid xs={12} md={8}>         
        <Typography variant="h3" my={3}>Profile Settings</Typography>
        <Typography variant="h5" my={3}>Profile Details</Typography>
        <SettingForm onSubmit={handleSubmit}>
          <ul>
            <li className="img-avatar">
              {user?.profile ?
                <Avatar
                  sx={{
                    width: 150,
                    height: 150,
                    margin: 'auto'
                  }}
                src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="></Avatar> :
                <Avatar sx={{
                    width: 150,
                    height: 150,
                    margin: 'auto'
                  }}
                  src={ file ? URL.createObjectURL(file) : PF+user.profile}
                  alt=""
                  ></Avatar>
                }
              <label htmlFor="image" >
                <Avatar>
                  <FaUser />
                </Avatar>
              </label>
              <input 
              onChange={(e) => setFile(e.target.files[0])}
              type="file" id="image" style={{display: 'none'}}/>
            </li> 
            <li>
              <label htmlFor="name">Name: </label>
              <input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text" id="name" placeholder={user.username}/>
            </li>
            <li>
              <label htmlFor="password">Password: </label>
              <input  
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" id="password" placeholder=""/>
            </li>
            <li>
              <label htmlFor="dob">Date Of Birth: </label>
              <input 
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="date" id="dob" placeholder={dateOfBirth}/>
            </li>
            <li>
              <Typography variant="h5" my={3}>Contact Info</Typography>
            </li>
            <li>
              <label htmlFor="phone">Phone Number: </label>
              <input 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="phone" id="phone" placeholder={phoneNumber}/>
            </li>
            <li>
               <label htmlFor="email">Email: </label>
                <input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email" id="email" placeholder={email}/>
            </li>
            <li>
              <Button variant="contained" type="submit">Save Changes</Button>                                                        
            </li>
          </ul>   
        </SettingForm>
        </Grid>
        </Grid>
      </Container>
    </div>
  )
}


export default Settings