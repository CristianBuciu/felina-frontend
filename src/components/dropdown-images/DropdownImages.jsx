import React from 'react';
import './DropdownImages.scss';
import { NavLink } from 'react-router-dom';

const DropdownImages = props => {
  return (
    <div className='dropdown-images-container'>
      <img src={props.imgSrc} className={props.imageClassName} alt='' />
      <div className='dropdown-images-container__inner'>
        <h2 className='dropdown-images-container__inner--title'>
          {props.title}
        </h2>
        <NavLink
          className='dropdown-images-container__inner--link'
          to={props.route}
        >
          SHOP NOW
        </NavLink>
      </div>
    </div>
  );
};

export default DropdownImages;
