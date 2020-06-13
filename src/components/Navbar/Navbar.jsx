import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.activlink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.activ}`}>
          <NavLink to="/dialogs" activeClassName={s.activlink}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.activlink}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.activlink}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="settings" activeClassName={s.activlink}>Settings</NavLink>
        </div>
      </nav>
    );
}

export default Navbar;