import { ChevronRightRounded } from '@mui/icons-material';
import React from 'react'

function MenuCard({imgsrc,name,isActive}) {
  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
   
        <div className='imgBox'>
            <img src = {imgsrc} alt=""/>
        </div>
        <h3>{name}</h3>
        <i className='loadMenu'>
            <ChevronRightRounded/>
        </i>
      
    </div>
  )
}

export default MenuCard;
