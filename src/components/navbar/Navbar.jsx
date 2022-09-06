import React, { useState } from 'react';
import style from './Navbar.module.css';
import Logo from '../../assets/logo.png';
import LogoText from '../../assets/logo_text.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NAvbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.box}>
          <div className={style.logo_image}>
            <img src={Logo} alt='/' />
            <img src={LogoText} alt='/' />
          </div>
          <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            <li>
              <a href='##'>Product</a>
            </li>
            <li>
              <a href='##'>About Us</a>
            </li>
            <li>
              <a href='##'>Customers</a>
            </li>
            <li>
              <a href='##'>Price</a>
            </li>
            <li>
              <a href='##'>Contacts</a>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NAvbar;
