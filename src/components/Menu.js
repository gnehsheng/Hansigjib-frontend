import React from 'react'

import SubHeading from './SubHeading';
import MenuItem from '../constants/data'
import { images } from '../constants';

import '../style/menu.css'

export const Menu = () => {


  return (
    <div className='app__menu flex__center section__padding' id='menu'>
      <div className='app__menu-title'>
        <SubHeading title='Our Menu' />
        <h1 className='headtext__cormorant'>HANSIGJIB MENU</h1>
      </div>

      <div className='app__menu-menu'>
        <div className='app__menu-menu_items'>
          <MenuItem />
        </div>
      </div>

    </div>
  )
}

