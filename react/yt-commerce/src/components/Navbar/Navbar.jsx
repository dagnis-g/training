import React from 'react'
import {AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
function Navbar() {
    return (
        <>
         <AppBar position='fixed' className={classes.appBar} color='inherit'>
             <ToolBar>
                 <Typography >
                     <img src={} alt='Commerce.js' height='25px' className={classes.image}/>
                 </Typography>
             </ToolBar>
             </AppBar>   
        </>
    )
}

export default Navbar
