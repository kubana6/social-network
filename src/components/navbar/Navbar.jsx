import React from 'react';
import navbar from './Navbar.module.css';

const Navbar=()=>{
    return (<nav className={navbar.nav}>
    <div className={navbar.item}>
      <a href='/profile'>Profile</a>
    </div>

    <div className={navbar.item}>
      <a href='/messages'>Messages</a>
    </div>

    <div className={navbar.item}>
      <a href='/news'>News</a>
    </div>

    <div className={navbar.item}>
      <a href='/music'>Music</a>
    </div>
    <div className={navbar.item}>
      <a href='/settings'>Settings</a>
    </div>

  </nav>);
}
export default Navbar;