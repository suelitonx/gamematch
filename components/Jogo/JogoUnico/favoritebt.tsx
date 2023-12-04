'use client'

import { pink } from '@mui/material/colors';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

export default function LikeButton({ idGame } : {idGame : number} ) {

    const [amei, setAmei] = useState<boolean>(false)

    const handleLove = () => {
    
        setAmei(!amei)
        alert(idGame)

    }


    return <>
    
    
    <IconButton aria-label="amei" onClick={handleLove} >

        {amei ? <FavoriteRoundedIcon sx={{ color: pink[500] }} /> : <FavoriteBorderRoundedIcon sx={{ color: pink[500] }} /> }
        
    
    </IconButton>
    
    
    </>

}