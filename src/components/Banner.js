import './Banner.css'
import React from 'react'
import {ReactComponent as Logo} from '../assets/white-logo.svg'


function Banner(){

    return(
        <div className='banner'>
            <Logo className='logo'/>
        </div>
    )
}

export default Banner