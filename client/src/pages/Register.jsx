import { TextField, InputLabel, OutlinedInput, InputAdornment, FormControl, IconButton, Button, Grid, Typography, Breadcrumbs, Link as LinkM } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import React, { useState } from 'react'
import registerImg from '../images/register-img.svg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { formVariant, imgVariant } from '../styles/animation';
import { RegisterCard } from '../styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, register } from '../store/authSlice';
import axios from 'axios'

const Register = () => {
    const [values, setValues] = useState({
    amount: '',
    password: '',
    repeat_password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const notification = useSelector(state => state.auth.error);
   console.log(notification);
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(authActions.errorNotification({ 
            open: false, 
        }));
        e.preventDefault();
        try{
            const data = dispatch(authActions.Regitster({
            username,
            email, 
            password: values.password,
            repeat_password: values.repeat_password
        }))
        const res = await axios.post("http://localhost:5000/api/auth/register", data.payload);
            res.data && window.location.replace('/login');
        }  catch(err) {
            dispatch(authActions.errorNotification({ 
                message: err.response.data, 
                open: true, 
            }))
        }   
    }


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
      <>
    <div className="login">
        <Breadcrumbs aria-label="breadcrumb" m={3}>
            <LinkM underline="hover" color="inherit" href="/">
                Home
            </LinkM>
            <Typography color="primary">Register</Typography>
        </Breadcrumbs>
        <RegisterCard>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <motion.form
                        variants={formVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onSubmit={handleSubmit}
                    >
                        <Typography variant="h5" m={1} >Register</Typography>
                        <TextField
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                            label="Your Name" variant="outlined"sx={{ m: 1, width: '25ch' }}/>
                        <TextField 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Your Email" variant="outlined" sx={{ m: 1, width: '25ch' }}/>

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-comfirm-password">Comfirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-comfirm-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.repeat_password}
                                onChange={handleChange('repeat_password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        {/* {notification?.open && <Typography ml={1} variant="body2" color="error">{notification.message}</Typography>} */}
                        <Button variant="contained" type="submit">Sign up</Button>
                        <Typography variant="body2" ml={4}>
                            Already has an account? <Link to="/login">Login</Link>
                        </Typography>
                    </motion.form>
                </Grid>
                <Grid item xs={0} md={6}>
                    <motion.img
                        variants={imgVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                     src={registerImg} alt="" />
                </Grid>
            </Grid>
        </RegisterCard>
    </div>
    </>
  )
}

export default Register