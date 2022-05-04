import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Foot } from "../styles/styles"

const Footer = () => {
  return (
    <Foot>
        <Typography variant="body2" align="center">
            Copyright &copy; <Link to="/">Travel</Link> and all rights reserved.
        </Typography>
    </Foot>
  )
}

export default Footer