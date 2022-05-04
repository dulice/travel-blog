import { TextField, InputLabel, OutlinedInput, InputAdornment, FormControl, IconButton, Button, Grid, Typography, Breadcrumbs, Link as LinkM } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import React, {useContext, useRef, useState} from 'react'
import loginImg from '../images/login-img.svg'
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion'
import { formVariant, imgVariant } from '../styles/animation';
import { LoginCard } from '../styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {authActions} from '../store/authSlice'
import { Context } from '../components/context/Context';


const Login = () => {
    const dispatch = useDispatch();
    const errorNotification = useSelector(state => state.auth);
    const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [email, setEmail] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  
  const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const data = dispatch(authActions.Login({
                email,
                password: values.password
            }))
             const res = await axios.post("http://localhost:5000/api/auth/login", data.payload);
            res.data && window.location.replace('/');
        }catch(err) {
            dispatch(authActions.errorNotification({ 
                message: err.response.data, 
                open: true, 
            }))
        }
  }

  return (
    <div className="login">
        <Breadcrumbs aria-label="breadcrumb" m={3}>
            <LinkM underline="hover" color="inherit" href="/">
                Home
            </LinkM>
            <Typography color="primary">Login</Typography>
        </Breadcrumbs>
        <LoginCard>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <motion.form
                        variants={formVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onSubmit={handleSubmit}
                    >
                        <Typography variant="h5" m={1} mt={5}>Login</Typography>
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
                        {errorNotification?.open && <Typography ml={1} variant="body2" color="error">{errorNotification.message}</Typography>}
                        <Button variant="contained" type="submit">Login</Button>
                        <Typography variant="body2">
                            Don't have an account yet? 
                            <Link to="/register">Sign up</Link>
                        </Typography>
                    </motion.form>
                </Grid>
                <Grid item xs={0} md={6}>
                    <motion.img
                        variants={imgVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                     src={loginImg} alt="" />
                </Grid>
            </Grid>
        </LoginCard>
    </div>
  )
}



export default Login