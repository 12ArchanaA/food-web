import React from 'react'
import { Instagram } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="social-media-accounts">
            <Instagram/>
            <Facebook/>
            <Twitter/>
            <LinkedIn/>
        </div>
        <div className="copy-right">
            <p>&copy; 2023 abc.com</p>
        </div>
    </div>
  )
}

export default Footer